import dayjs from 'dayjs';
import Taro from '@tarojs/taro';

import './index.scss';

const LabReportRecordOneQueryDocument = graphql(`
    query LabReportRecordDetailQuery($id: uuid!) {
        lab_report_records_by_pk(id: $id) {
            assay_date
            images
            remarks
            report_type
        }
    }
`);

const InsertLabReportRecordOneMutationDocument = graphql(`
    mutation InsertLabReportRecordOneMutation($object: lab_report_records_insert_input!) {
        insert_lab_report_records_one(object: $object) {
            id
        }
    }
`);

const UpdateLabReportRecordOneMutationDocument = graphql(`
    mutation UpdateLabReportRecordOneMutation($id: uuid!, $object: lab_report_records_set_input!) {
        update_lab_report_records_by_pk(pk_columns: {id: $id}, _set: $object) {
            id
        }
    }
`);

function Index() {
    const { id } = Router.getParams();

    const [form] = NutForm.useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);

    // 化验报告类型，1：血常规、2：尿常规、3：大便常规、4：肠胃镜报告、5：病理报告、6：其他
    const reportTypeOptions = [
        {
            value: 1,
            text: '血常规'
        },
        {
            value: 2,
            text: '尿常规'
        },
        {
            value: 3,
            text: '大便常规'
        },
        {
            value: 4,
            text: '肠胃镜报告'
        },
        {
            value: 5,
            text: '病理报告'
        },
        {
            value: 6,
            text: '其他'
        },
    ];

    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [recordTime, setRecordTime] = useState(new Date().getTime());

    const [{ data: recordData }] = useQuery({
        query: LabReportRecordOneQueryDocument,
        variables: {
            id
        },
        pause: !id,
    });
    const [,insert] = useMutation(InsertLabReportRecordOneMutationDocument);
    const [,update] = useMutation(UpdateLabReportRecordOneMutationDocument);

    const save = (values) => {
        if (!isSubmitting) {
            return;
        }
        const { report_type, assay_date, images, remarks } = values;

        if (images.some((item) => !item.status || item.status !== 'success')) {
            Taro.showToast({
                title: '图片上传中，请稍后',
                icon: 'none',
            });
            return;
        }

        const object = {
            assay_date,
            remarks,
            report_type: report_type[0],
            images: images.map((item) => item.Key ?? JSON.parse(item.responseText).Key),
        };

        if (!id) {
            insert({
                object
            }).then(handleResult);
        } else {
            update({
                id,
                object,
            }).then(handleResult);
        }
    };

    const handleResult = (res) => {
        if (res.error) {
            Taro.showToast({
                title: '保存失败',
                icon: 'none',
            });
        } else {
            Taro.showToast({
                title: '保存成功',
                icon: 'success',
            });
            Router.toLabReportDetail({
                params: {
                    id: res?.data?.insert_lab_report_records_one?.id || res?.data?.update_lab_report_records_by_pk?.id,
                }
            });
        }
    };

    useEffect(() => {
        if (recordData?.lab_report_records_by_pk) {
            const { assay_date, images, remarks, report_type } = recordData.lab_report_records_by_pk;
            form.setFieldsValue({
                assay_date: dayjs(assay_date).toISOString(),
                images: images.map((Key) => ({
                    Key,
                    url: process.env.TARO_APP_S3_ENDPOINT + Key,
                    status: 'success',
                    type: 'image',
                })),
                remarks,
                report_type: [report_type],
            });
            setRecordTime(dayjs(assay_date).valueOf());
        }
    }, [recordData]);

    return (
        <>
            <View className='flex flex-col gap-30px pt-60px px-40px'>
                <NutForm
                    form={form}
                    labelPosition='left'
                    onFinish={save}
                    className='s-form'
                    initialValues={{ assay_date: dayjs(recordTime).toISOString() }}
                >
                    <NutForm.Item
                        name='report_type'
                        label='报告单类型'
                        rules={[{ required: true, message: '请选择报告单类型' }]}
                        trigger='onConfirm'
                        getValueFromEvent={(...args) => args[1]}
                        onClick={(event, ref: any) => {
                            ref.open();
                        }}
                    >
                        <NutPicker options={[reportTypeOptions]}>
                            {(value: any) => {
                                return (
                                    <NutCell
                                        style={{
                                            padding: 0,
                                            '--nutui-cell-divider-border-bottom': '0',
                                        }}
                                        title={
                                            value.length
                                                ? reportTypeOptions.filter((po) => po.value === value[0])[0]
                                                    ?.text
                                                : '请选择'
                                        }
                                        extra={<NutIconArrowRight />}
                                        align='center'
                                    />
                                );
                            }}
                        </NutPicker>
                    </NutForm.Item>
                    <NutForm.Item
                        name='assay_date'
                        label='化验时间'
                        required
                    >
                        <View
                            className='flex justify-end items-center gap-10px'
                            onClick={() => setDatePickerVisible(true)}
                        >
                            <TaroText className='c-black text-30px fw-400'>{
                                dayjs(recordTime).format('YYYY-MM-DD')
                            }</TaroText>
                            <NutIconArrowSize8 color='#B3BAC5' />
                        </View>
                    </NutForm.Item>
                    <NutForm.Item
                        label='图片上传'
                        name='images'
                        rules={[{ required: true, message: '请上传图片' }]}
                        className='s-form-col-item'
                    >
                        <NutUploader
                            maxCount={20}
                            multiple
                            accept={'image/*'}
                            url='https://s.manbingjiluben.com'
                        />
                    </NutForm.Item>
                    <NutForm.Item
                        name='remarks'
                        label='备注'
                    >
                        <NutTextArea rows={5} placeholder='(选填)' />
                    </NutForm.Item>
                </NutForm>
                <View className='flex gap-30px mt-50px pb-60px'>
                    <SharpButton.Outline
                        onClick={() => {
                            Router.toIndex();
                        }}
                    >
                        取消
                    </SharpButton.Outline>
                    <SharpButton.Primary
                        onClick={() => {
                            setIsSubmitting(true);
                            form.submit();
                        }}
                    >
                        保存
                    </SharpButton.Primary>
                </View>
            </View>
            <NutDatePicker
                visible={datePickerVisible}
                type='date'
                defaultValue={new Date(recordTime)}
                endDate={new Date()}
                onClose={() => setDatePickerVisible(false)}
                onConfirm={(options, values) => {
                    const [year, month, day] = values;
                    setRecordTime(dayjs(`${year}-${month}-${day}`).valueOf());
                    form.setFieldsValue({ assay_date: dayjs(`${year}-${month}-${day}`).toISOString() });
                    setDatePickerVisible(false);
                }}
            />
        </>
    );
}

export default Index;
