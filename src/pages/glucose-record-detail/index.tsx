import { VChart } from '@visactor/taro-vchart';
import dayjs from 'dayjs';
import Taro from '@tarojs/taro';

import './index.scss';

const GlucoseRecordOneQueryDocument = graphql(`
    query GlucoseRecordOneQuery($id: uuid!) {
        glucose_records_by_pk(id: $id) {
            diet_record
            exercise_record
            glucose_value
            measurement_period
            medication_record
            record_time
            remarks
        }
        user_glucose_standards {
            max
            min
            title
            type
        }
        glucose_standards {
            max
            min
            title
            type
        }
    }
`);

const DeleteGlucoseRecordMutationDocument = graphql(`
    mutation DeleteGlucoseRecordMutation($id: uuid!) {
        delete_glucose_records_by_pk(id: $id) {
            id
        }
    }
`);

function Index() {
    const { id } = Router.getParams();

    const measurementPeriodList = [
        { text: '早餐前', value: '1' },
        { text: '早餐后', value: '2' },
        { text: '午餐前', value: '3' },
        { text: '午餐后', value: '4' },
        { text: '晚餐前', value: '5' },
        { text: '晚餐后', value: '6' },
        { text: '其他', value: '7' },
    ];

    const [{data}] = useQuery({
        query: GlucoseRecordOneQueryDocument,
        variables: {id}
    });
    const [, deleteGlucoseRecord] = useMutation(DeleteGlucoseRecordMutationDocument);

    const [glucoseValue, setGlucoseValue] = useState('0.0');

    const defaultChartSpec = {
        type: 'common',
        background: 'transparent',
        padding: 0,
        data: [
            {
                id: 'pointer',
                values: [
                    {
                        type: 'pointer',
                        value: glucoseValue
                    }
                ]
            },
            {
                id: 'segment',
                values: [
                    {
                        type: 'progress',
                        value: glucoseValue
                    },
                ]
            }
        ],
        series: [
            {
                type: 'gauge',
                dataIndex: 1,
                radiusField: 'type',
                angleField: 'value',
                seriesField: 'type',
                outerRadius: 0.9,
                innerRadius: 0.8,
                roundCap: false,
                segment: {
                    style: {
                        cornerRadius: 500,
                        innerPadding: 10,
                        outerPadding: 10,
                        fill: {
                            type: 'threshold',
                            field: 'value',
                            domain: [6.1, 9.1],
                            range: ['#EC6400']
                        }
                    }
                },
                track: {
                    visible: true,
                    style: {
                        cornerRadius: 500,
                        roundCap: false,
                        fill: '#F0EFEF'
                    }
                }
            },
            {
                type: 'gaugePointer',
                dataIndex: 0,
                categoryField: 'type',
                valueField: 'value',
                innerRadius: 0.55,
                pin: {
                    visible: true,
                    width: 0.04,
                    height: 0.04,
                    isOnCenter: false,
                    style: {
                        fill: {
                            type: 'threshold',
                            field: 'value',
                            domain: [6, 9],
                            range: ['#EC6400']
                        }
                    }
                },
                pinBackground: {
                    visible: false
                },
                pointer: {
                    width: 0.2,
                    height: 0.1,
                    isOnCenter: false,
                    style: {
                        fill: {
                            type: 'threshold',
                            field: 'value',
                            domain: [6, 9],
                            range: ['#EC6400']
                        }
                    }
                },
                animation: false
            }
        ],
        startAngle: -90,
        endAngle: 270,
        axes: [
            {
                type: 'linear',
                orient: 'angle',
                inside: true,
                outerRadius: 0.9,
                innerRadius: 0.65,
                min: 0,
                max: 40,
                grid: { visible: false },
                tick: { visible: true, tickSize: 0, style: { lineWidth: 4, lineCap: 'round' } },
                subTick: { visible: true, tickSize: 0, style: { lineWidth: 4, lineCap: 'round' } },
                label: { visible: false }
            },
            {
                type: 'linear',
                orient: 'radius',
                outerRadius: 0.8,
                grid: { visible: false },
                label: { visible: false }
            }
        ],
        indicator: [
            {
                visible: true,
                offsetY: '0',
                title: {
                    style: {
                        text: parseFloat(glucoseValue).toFixed(1),
                        fontSize: 60,
                        fontWeight: 800
                    }
                },
                content: [
                    {
                        style: {
                            dy: 0,
                            text: 'mmol/L',
                            fontSize: 18,
                        }
                    }
                ]
            },
        ]
    };

    const [commonChartSpec, setCommonChartSpec] = useState(defaultChartSpec);

    const measurementPeriodText = useMemo(() => {
        return measurementPeriodList.find((item) => Number(item.value) === data?.glucose_records_by_pk?.measurement_period)?.text;
    }, [data]);

    const deleteRecord = () => {
        Taro.showModal({
            title: '删除记录',
            content: '确定删除该记录吗？',
            confirmText: '删除',
            confirmColor: '#EC6400',
            success: (res) => {
                if (res.confirm) {
                    deleteGlucoseRecord({id}).then((result) => {
                        if (!result.error) {
                            Router.toIndex();
                        }
                    });
                }
            }
        });
    };

    const getStandards = useMemo(() => {
        if (!data?.glucose_records_by_pk?.measurement_period) {
            return {
                min: 0,
                max: 0
            };
        }

        if ([1, 3, 5].includes(data?.glucose_records_by_pk?.measurement_period)) {
            const userStandard = data?.user_glucose_standards.find((item: any) => item.type === 1);
            if (userStandard) {
                return userStandard;
            }
            return data?.glucose_standards.find((item: any) => item.type === 1);
        }
        if ([2, 4, 6].includes(data?.glucose_records_by_pk?.measurement_period)) {
            const userStandard = data?.user_glucose_standards.find((item: any) => item.type === 2);
            if (userStandard) {
                return userStandard;
            }
            return data?.glucose_standards.find((item: any) => item.type === 2);
        }
        if (data?.glucose_records_by_pk?.measurement_period === 7) {
            const userStandard = data?.user_glucose_standards.find((item: any) => item.type === 5);
            if (userStandard) {
                return userStandard;
            }
            return data?.glucose_standards.find((item: any) => item.type === 5);
        }
    }, [data]);

    useEffect(() => {
        if (data?.glucose_records_by_pk?.glucose_value) {
            setGlucoseValue(data.glucose_records_by_pk.glucose_value);
        }
    }, [data]);

    useEffect(() => {
        setCommonChartSpec(defaultChartSpec);
    }, [glucoseValue]);

    return (
        <>
            <View className='flex flex-col items-center justify-center pt-60px gap-30px'>
                <View className='w-380px flex items-center justify-center gap-10px bg-#FEF7F2 c-#EC6400 p-5px rd-full'>
                    <TaroImage src='../../assets/icons/date-yellow.png' className='w-32px h-32px' />
                    <TaroText className='text-26'>{ dayjs(data?.glucose_records_by_pk?.record_time).format('YYYY年MM月DD日 HH:mm') }</TaroText>
                </View>
                <View className='chart-bg'>
                    <VChart
                        type='h5'
                        spec={commonChartSpec as any}
                        canvasId='glucose-record-common-detail'
                        style={{ height: '260px', width: '100%' }}
                    />
                </View>
                <TaroText className='text-30 c-#666666'>{measurementPeriodText}目标: {`${getStandards?.min}-${getStandards?.max}mmol/L`}</TaroText>
            </View>
            <View className='flex flex-col px-40px pt-20px pb-60px'>
                <SharpItem title='测量时段'>
                    <TaroText className='text-30px fw-600 c-black'>{measurementPeriodText}</TaroText>
                </SharpItem>
                {data?.glucose_records_by_pk?.medication_record && (
                    <SharpItem title='用药记录'>
                        <TaroText className='text-30px fw-600 c-black'>{data.glucose_records_by_pk.medication_record}</TaroText>
                    </SharpItem>
                )}
                {data?.glucose_records_by_pk?.diet_record && (
                    <SharpItem title='饮食记录'>
                        <TaroText className='text-30px fw-600 c-black'>{data.glucose_records_by_pk.diet_record}</TaroText>
                    </SharpItem>
                )}
                {data?.glucose_records_by_pk?.exercise_record && (
                    <SharpItem title='运动记录'>
                        <TaroText className='text-30px fw-600 c-black'>{data.glucose_records_by_pk.exercise_record}</TaroText>
                    </SharpItem>
                )}
                {data?.glucose_records_by_pk?.remarks && (
                    <SharpItem title='备注'>
                        <TaroText className='text-30px fw-600 c-black'>{data.glucose_records_by_pk.remarks}</TaroText>
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
                            Router.toGlucoseRecord({
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
