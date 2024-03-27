import dayjs from 'dayjs';
import Taro from '@tarojs/taro';
import './index.scss';

const CholesterolRecordDetailQueryDocument = graphql(`
    query CholesterolRecordDetailQuery($id: uuid!) {
        cholesterol_records_by_pk(id: $id) {
            diastolic_pressure
            medication_record
            pulse_rate
            record_time
            remarks
            symptoms
            systolic_pressure
            measurement_period
        }
    }
`);

const DeleteCholesterolRecordMutationDocument = graphql(`
    mutation DeleteCholesterolRecordMutation($id: uuid!) {
        delete_cholesterol_records_by_pk(id: $id) {
            id
        }
    }
`);

function Index() {
    const { id } = Router.getParams();
    const [{ data }] = useQuery({
        query: CholesterolRecordDetailQueryDocument,
        variables: { id },
    });
    const [, deleteCholesterolRecord] = useMutation(DeleteCholesterolRecordMutationDocument);

    const measurementPeriodList = [
        { text: '上午', value: '1' },
        { text: '中午', value: '2' },
        { text: '下午', value: '3' },
        { text: '睡前', value: '4' },
    ];

    const symptomsText = useMemo(() => {
        if (!data?.cholesterol_records_by_pk?.symptoms) {
            return '';
        }
        // 1：早搏、2：心率不齐、3：心颤
        return data?.cholesterol_records_by_pk?.symptoms?.map((item) => {
            return ['早搏', '心率不齐', '心颤'][item - 1];
        }).join('、');
    }, [data]);

    const measurementPeriodText = useMemo(() => {
        return measurementPeriodList.find((item) => Number(item.value) === data?.cholesterol_records_by_pk?.measurement_period)?.text;
    }, [data]);

    const deleteRecord = useCallback(() => {
        Taro.showModal({
            title: '删除记录',
            content: '确定删除该记录吗？',
            confirmText: '删除',
            confirmColor: '#EC6400',
            success: (res) => {
                if (res.confirm) {
                    deleteCholesterolRecord({id}).then((result) => {
                        if (!result.error) {
                            Router.toIndex();
                        }
                    });
                }
            }
        });
    }, [id]);

    return (
        <>
            <View className='flex flex-col gap-20px pt-80px px-40px'>
                <SharpItem title='收缩压（高压）'>
                    <TaroText className='text-30px fw-600 c-black'>{data?.cholesterol_records_by_pk?.systolic_pressure}</TaroText>
                </SharpItem>
                <SharpItem title='舒张压（低压）'>
                    <TaroText className='text-30px fw-600 c-black'>{data?.cholesterol_records_by_pk?.diastolic_pressure}</TaroText>
                </SharpItem>
                <SharpItem title='脉搏（心率）'>
                    <TaroText className='text-30px fw-600 c-black'>{data?.cholesterol_records_by_pk?.pulse_rate}</TaroText>
                </SharpItem>
                {symptomsText && (
                    <SharpItem title='症状'>
                        <TaroText className='text-30px fw-600 c-black'>{symptomsText}</TaroText>
                    </SharpItem>
                )}
                <SharpItem title='记录时间'>
                    <TaroText className='text-30px fw-600 c-black'>{dayjs(data?.cholesterol_records_by_pk?.record_time).format('YYYY-MM-DD HH:mm')}</TaroText>
                </SharpItem>
                <SharpItem title='测量时段'>
                    <TaroText className='text-30px fw-600 c-black'>{measurementPeriodText}</TaroText>
                </SharpItem>
                {data?.cholesterol_records_by_pk?.medication_record && (
                    <SharpItem title='用药记录'>
                        <TaroText className='text-30px fw-600 c-black'>{data?.cholesterol_records_by_pk?.medication_record}</TaroText>
                    </SharpItem>
                )}
                {data?.cholesterol_records_by_pk?.remarks && (
                    <SharpItem title='备注'>
                        <TaroText className='text-30px fw-600 c-black'>{data?.cholesterol_records_by_pk?.remarks}</TaroText>
                    </SharpItem>
                )}
                <View className='flex gap-30px mt-100px'>
                    <SharpButton.Outline
                        onClick={deleteRecord}
                    >
                        删除
                    </SharpButton.Outline>
                    <SharpButton.Primary
                        onClick={() => {
                            Router.toCholesterolRecord({
                                params: {
                                    id,
                                },
                                type: NavigateType.redirectTo
                            });
                        }}
                    >
                        修改
                    </SharpButton.Primary>
                </View>
            </View>
            <SharpFixedNav />
        </>
    );
}

export default Index;
