import dayjs from 'dayjs';
import Taro from '@tarojs/taro';
import './index.scss';

const CholesterolRecordOneQueryDocument = graphql(`
    query CholesterolRecordDetailQuery($id: uuid!) {
        cholesterol_records_by_pk(id: $id) {
            diastolic_pressure
            medication_record
            pulse_rate
            record_time
            remarks
            symptoms
            systolic_pressure
        }
    }
`);

const InsertCholesterolRecordOneMutationDocument = graphql(`
    mutation InsertCholesterolRecordOneMutation($object: cholesterol_records_insert_input!){
        insert_cholesterol_records_one(object: $object) {
            id
        }
    }
`);

const UpdateCholesterolRecordOneMutationDocument = graphql(`
    mutation UpdateCholesterolRecordOneMutation($id: uuid!, $object: cholesterol_records_set_input!){
        update_cholesterol_records_by_pk(pk_columns: {id: $id}, _set: $object) {
            id
        }
    }
`);

function Index() {
    const [form] = NutForm.useForm();
    const { id } = Router.getParams();

    const [datePickerVisible, setDatePickerVisible] = useState(false);
    const [recordTime, setRecordTime] = useState(new Date().getTime());

    const [{data: updateData}] = useQuery({
        query: CholesterolRecordOneQueryDocument,
        variables: {
            id
        },
        pause: !id,
    });
    const [, insertRecord] = useMutation(InsertCholesterolRecordOneMutationDocument);
    const [, updateRecord] = useMutation(UpdateCholesterolRecordOneMutationDocument);


    const save = (values) => {
        const { __typename, ...rest } = values;

        if (id) {
            // 如果有ID，则执行更新操作
            updateRecord({ id, object: rest }).then(({ data, error }) => {
                handleResult(data, error);
            });
        } else {
            // 如果没有ID，则执行插入操作
            insertRecord({ object: rest }).then(({ data, error }) => {
                handleResult(data, error);
            });
        }
    };

    const handleResult = (data, error) => {
        if (error) {
            // 显示保存失败的消息
            Taro.showToast({
                title: '保存失败',
                icon: 'none',
            });
        } else {
            // 显示保存成功的消息
            Taro.showToast({
                title: '保存成功',
                icon: 'success',
            });

            // 跳转到详细页面
            const recordId = data?.update_cholesterol_records_by_pk?.id || data?.insert_cholesterol_records_one?.id;
            Router.toCholesterolRecordDetail({ params: { id: recordId } });
        }
    };

    useEffect(() => {
        if (updateData?.cholesterol_records_by_pk) {
            const { record_time, ...rest } = updateData?.cholesterol_records_by_pk;
            form.setFieldsValue({
                ...rest,
                record_time: dayjs(record_time).toISOString(),
            });
            setRecordTime(dayjs(record_time).valueOf());
        }
    }, [updateData]);

    return (
        <>
            <View className='bg-#B29251'>
                <View className='flex flex-col gap-20px pt-80px px-40px rd-t-50px bg-white'>
                    <NutForm
                        form={form}
                        labelPosition='left'
                        onFinish={save}
                        className='s-form'
                        initialValues={{ record_time: dayjs(recordTime).toISOString() }}
                    >
                        <NutForm.Item
                            name='systolic_pressure'
                            label='收缩压（高压）'
                            rules={[{ required: true, message: "请输入收缩压（高压）" }]}
                        >
                            <NutInput
                                align='right'
                                type='number'
                                placeholder='mmHg'
                            />
                        </NutForm.Item>
                        <NutForm.Item
                            name='diastolic_pressure'
                            label='舒张压（低压）'
                            rules={[{ required: true, message: "请输入舒张压（低压）" }]}
                        >
                            <NutInput
                                align='right'
                                type='number'
                                placeholder='mmHg'
                            />
                        </NutForm.Item>
                        <NutForm.Item
                            name='pulse_rate'
                            label='脉搏（心率）'
                            rules={[{ required: true, message: "请输入脉搏（心率）" }]}
                        >
                            <NutInput
                                align='right'
                                type='number'
                                placeholder='bmp'
                            />
                        </NutForm.Item>
                        <NutForm.Item
                            name='symptoms'
                            label='症状（选填）'
                        >
                            <NutCheckbox.Group direction='horizontal' className='flex justify-end gap-20px'>
                                <NutCheckbox value='1' className='important-mr-0'>早搏</NutCheckbox>
                                <NutCheckbox value='2' className='important-mr-0'>心律不齐</NutCheckbox>
                                <NutCheckbox value='3' className='important-mr-0'>心颤</NutCheckbox>
                            </NutCheckbox.Group>
                        </NutForm.Item>
                        <NutForm.Item
                            name='record_time'
                            label='记录时间'
                            required
                        >
                            <View
                                className='flex justify-end items-center gap-10px'
                                onClick={() => setDatePickerVisible(true)}
                            >
                                <TaroText className='c-black text-30px fw-400'>{
                                    dayjs(recordTime).format('YYYY-MM-DD HH:mm')
                                }</TaroText>
                                <NutIconArrowSize8 color='#B3BAC5' />
                            </View>
                        </NutForm.Item>
                        <NutForm.Item
                            name='medication_record'
                            label='用药'
                        >
                            <NutInput align='left' placeholder='用药记录（选填）' />
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
                        <SharpButton.Primary onClick={form.submit}>
                            保存
                        </SharpButton.Primary>
                    </View>
                </View>
            </View>
            <NutDatePicker
                visible={datePickerVisible}
                type='datetime'
                defaultValue={new Date(recordTime)}
                endDate={new Date()}
                onClose={() => setDatePickerVisible(false)}
                onConfirm={(options, values) => {
                    const [year, month, day, hour, minute] = values;
                    setRecordTime(dayjs(`${year}-${month}-${day} ${hour}:${minute}`).valueOf());
                    form.setFieldsValue({ record_time: dayjs(`${year}-${month}-${day} ${hour}:${minute}`).toISOString() });
                    setDatePickerVisible(false);
                }}
            />
        </>
    );
}

export default Index;
