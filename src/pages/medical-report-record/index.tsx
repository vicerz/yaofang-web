import dayjs from 'dayjs';
import Taro from '@tarojs/taro';

import './index.scss';

const MedicalReportRecordOneQueryDocument = graphql(`
    query MedicalReportRecordDetailQuery($id: uuid!) {
        medical_examination_records_by_pk(id: $id) {
            exam_date
            images
            remarks
        }
    }
`);

const InsertMedicalReportRecordOneMutationDocument = graphql(`
    mutation InsertMedicalReportRecordOneMutation($object: medical_examination_records_insert_input!) {
        insert_medical_examination_records_one(object: $object) {
            id
        }
    }
`);

const UpdateMedicalReportRecordOneMutationDocument = graphql(`
    mutation UpdateMedicalReportRecordOneMutation($id: uuid!, $object: medical_examination_records_set_input!) {
        update_medical_examination_records_by_pk(pk_columns: {id: $id}, _set: $object) {
            id
        }
    }
`);

function Index() {
    const { id } = Router.getParams();

    const [form] = NutForm.useForm();
    const [isSubmitting, setIsSubmitting] = useState(false);


    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [recordTime, setRecordTime] = useState(new Date().getTime());

    const [{ data: recordData }] = useQuery({
        query: MedicalReportRecordOneQueryDocument,
        variables: {
            id
        },
        pause: !id,
    });
    const [,insert] = useMutation(InsertMedicalReportRecordOneMutationDocument);
    const [,update] = useMutation(UpdateMedicalReportRecordOneMutationDocument);

    const save = (values) => {
        if (!isSubmitting) {
            return;
        }
        const { exam_date, images, remarks } = values;

        if (images.some((item) => !item.status || item.status !== 'success')) {
            Taro.showToast({
                title: '图片上传中，请稍后',
                icon: 'none',
            });
            return;
        }

        const object = {
            exam_date,
            remarks,
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
            Router.toMedicalReportDetail({
                params: {
                    id: res?.data?.insert_medical_examination_records_one?.id || res?.data?.update_medical_examination_records_by_pk?.id,
                }
            });
        }
    };

    useEffect(() => {
        if (recordData?.medical_examination_records_by_pk) {
            const { exam_date, images, remarks } = recordData.medical_examination_records_by_pk;
            form.setFieldsValue({
                exam_date: dayjs(exam_date).toISOString(),
                images: images.map((Key) => ({
                    Key,
                    url: process.env.TARO_APP_S3_ENDPOINT + Key,
                    status: 'success',
                    type: 'image',
                })),
                remarks,
            });
            setRecordTime(dayjs(exam_date).valueOf());
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
                    initialValues={{ exam_date: dayjs(recordTime).toISOString() }}
                >
                    <NutForm.Item
                        name='exam_date'
                        label='体检时间'
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
                    form.setFieldsValue({ exam_date: dayjs(`${year}-${month}-${day}`).toISOString() });
                    setDatePickerVisible(false);
                }}
            />
        </>
    );
}

export default Index;
