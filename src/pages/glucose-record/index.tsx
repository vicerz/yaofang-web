import dayjs from 'dayjs';
import { VChart } from '@visactor/taro-vchart';
import Taro from '@tarojs/taro';

import './index.scss';

const GlucoseRecordQueryDocument = graphql(`
    query GlucoseRecordQuery{
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

const GlucoseRecordUpdateQueryDocument = graphql(`
    query GlucoseRecordUpdateQuery($id: uuid!) {
        glucose_records_by_pk(id: $id) {
            diet_record
            exercise_record
            glucose_value
            measurement_period
            medication_record
            record_time
            remarks
        }
    }
`);

const GlucoseRecordFilterQueryDocument = graphql(`
    query GlucoseRecordFilterQuery($_gt: timestamptz!, $_lt: timestamptz!, $measurementPeriod: Int!) {
        glucose_records(where: {record_time: {_gt: $_gt, _lt: $_lt}, measurement_period: {_eq: $measurementPeriod}}) {
            record_time
            measurement_period
            id
        }
    }
`);

const InsertGlucoseRecordMutationDocument = graphql(`
    mutation InsertGlucoseRecordMutation($object: glucose_records_insert_input!) {
        insert_glucose_records_one(object: $object) {
            id
        }
    }
`);

const UpdateGlucoseRecordMutationDocument = graphql(`
    mutation UpdateGlucoseRecordMutation($id: uuid!, $object: glucose_records_set_input!) {
        update_glucose_records_by_pk(pk_columns: {id: $id}, _set: $object) {
            id
        }
    }
`);

function Index() {
    const { id } = Router.getParams();

    const [form] = NutForm.useForm();

    const [glucoseValue, setGlucoseValue] = useState('0.0');
    const [measurementPeriod, setMeasurementPeriod] = useState(1);
    const [recordTime, setRecordTime] = useState(new Date().getTime());
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
                        fill: '#148599'
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
                        text: glucoseValue,
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

    const measurementPeriodList = [
        [
            { text: '早餐前', value: '1' },
            { text: '早餐后', value: '2' },
            { text: '午餐前', value: '3' },
            { text: '午餐后', value: '4' },
            { text: '晚餐前', value: '5' },
            { text: '晚餐后', value: '6' },
            { text: '其他', value: '7' },
        ]
    ];

    const [commonChartSpec, setCommonChartSpec] = useState(defaultChartSpec);
    const [numberKeyBoardVisible, setNumberKeyBoardVisible] = useState(false);
    const [measurementPeriodVisible, setMeasurementPeriodVisible] = useState(false);
    const [datePickerVisible, setDatePickerVisible] = useState(false);

    const [{ data: updateData }] = useQuery({
        query: GlucoseRecordUpdateQueryDocument,
        variables: {
            id
        },
        pause: !id
    });
    const [{ data }] = useQuery({
        query: GlucoseRecordQueryDocument,
    });
    const [, insertGlucoseRecord] = useMutation(InsertGlucoseRecordMutationDocument);
    const [, updateGlucoseRecord] = useMutation(UpdateGlucoseRecordMutationDocument);
    const [{ data: filterData }] = useQuery({
        query: GlucoseRecordFilterQueryDocument,
        variables: {
            _gt: dayjs(recordTime).format('YYYY-MM-DD'),
            _lt: dayjs(recordTime).add(1, 'day').format('YYYY-MM-DD'),
            measurementPeriod
        },
        pause: !recordTime && !measurementPeriod,
        requestPolicy: 'network-only'
    });

    const onCommonChartInit = (chart: any) => {
        chart.on('tap', () => {
            setGlucoseValue('0.0');
            setNumberKeyBoardVisible(true);
        });
    };

    const onNumberKeyBoardChange = (value: string) => {
        if (value === '.') {
            if (glucoseValue.includes('.')) {
                return;
            }
        }
        if (glucoseValue === '0.0' && value !== '.') {
            setGlucoseValue(value);
            return;
        }
        if (glucoseValue.includes('.') && glucoseValue.split('.')[1].length === 1 && value !== '.') {
            return;
        }
        if (glucoseValue.includes('.') && glucoseValue.split('.')[1].length === 2) {
            return;
        }
        if (Number(glucoseValue + value) > 40) {
            return;
        }

        setGlucoseValue(glucoseValue + value);
    };

    const onNumberKeyBoardDelete = () => {
        setGlucoseValue(glucoseValue.slice(0, -1));
    };

    const getMeasurementPeriodText = () => {
        return measurementPeriodList[0].find((item) => item.value === String(measurementPeriod))?.text;
    };

    const getStandards = () => {
        if ([1, 3, 5].includes(measurementPeriod)) {
            const userStandard = data?.user_glucose_standards.find((item: any) => item.type === 1);
            if (userStandard) {
                return userStandard;
            }
            return data?.glucose_standards.find((item: any) => item.type === 1);
        }
        if ([2, 4, 6].includes(measurementPeriod)) {
            const userStandard = data?.user_glucose_standards.find((item: any) => item.type === 2);
            if (userStandard) {
                return userStandard;
            }
            return data?.glucose_standards.find((item: any) => item.type === 2);
        }
        if (measurementPeriod === 7) {
            const userStandard = data?.user_glucose_standards.find((item: any) => item.type === 5);
            if (userStandard) {
                return userStandard;
            }
            return data?.glucose_standards.find((item: any) => item.type === 5);
        }
    };

    const save = async (values) => {
        if (!glucoseValue || glucoseValue === '0.0') {
            Taro.showToast({
                title: '请填写血糖值',
                icon: 'none'
            });
            return;
        }
        const { __typename, ...rest } = values ?? {};

        if (filterData?.glucose_records.length) {
            const confirm = await Taro.showModal({
                title: '重复记录',
                confirmColor: '#EC6400',
                content: '已经存在相同时段记录，是否要覆盖？'
            });
            if (confirm.cancel) {
                return;
            }
        }

        if (id || filterData?.glucose_records.length) {
            updateGlucoseRecord({
                id: id || filterData?.glucose_records[0].id,
                object: {
                    record_time: new Date(recordTime).toISOString(),
                    glucose_value: glucoseValue,
                    measurement_period: measurementPeriod,
                    ...rest,
                }
            }).then((res) => {
                handleResult(res.data, res.error);
            });
        } else {
            insertGlucoseRecord({
                object: {
                    record_time: new Date(recordTime).toISOString(),
                    glucose_value: glucoseValue,
                    measurement_period: measurementPeriod,
                    ...rest,
                }
            }).then((res) => {
                handleResult(res.data, res.error);
            });
        }
    };

    const handleResult = (result, error) => {
        if (error) {
            Taro.showToast({
                title: '保存失败',
                icon: 'none',
            });
        } else {
            Taro.showToast({
                title: '保存成功',
                icon: 'success',
            });
            const recordId = result?.update_glucose_records_by_pk?.id || result?.insert_glucose_records_one?.id;
            Router.toGlucoseRecordDetail({
                params: {
                    id: recordId,
                },
                type: NavigateType.redirectTo,
            });
        }
    };

    useEffect(() => {
        setCommonChartSpec(defaultChartSpec);
    }, [glucoseValue]);

    // 更新记录
    useEffect(() => {
        if (updateData?.glucose_records_by_pk) {
            setGlucoseValue(updateData.glucose_records_by_pk.glucose_value);
            setMeasurementPeriod(updateData.glucose_records_by_pk.measurement_period);
            setRecordTime(dayjs(updateData.glucose_records_by_pk.record_time).valueOf());
            form.setFieldsValue(updateData.glucose_records_by_pk);
        }
    }, [updateData]);

    return (
        <>
            <View className='flex flex-col pb-100px'>
                <View className='relative bg-#B29251 flex flex-col items-center justify-center gap-20px py-30px pb-80px'>
                    <View
                        className='w-380px flex items-center justify-center gap-10px bg-#F0BE5A c-white p-5px rd-full'
                        onClick={() => setDatePickerVisible(true)}
                    >
                        <TaroImage src='../../assets/icons/date-white.png' className='w-32px h-32px' />
                        <TaroText className='text-26'>{ dayjs(recordTime).format('YYYY年MM月DD日 HH:mm') }</TaroText>
                    </View>
                    <View className='chart-bg'>
                        <VChart
                            type='h5'
                            spec={commonChartSpec as any}
                            canvasId='glucose-record-common'
                            style={{ height: '260px', width: '100%' }}
                            onChartInit={onCommonChartInit}
                        />
                    </View>
                    <TaroText className='text-30 c-white'>{getMeasurementPeriodText()}目标: {getStandards()?.min}-{getStandards()?.max}mmol/L</TaroText>
                </View>
                <View className='relative z-1 mt--60px rd-t-50px bg-white px-40px pt-60px'>
                    <NutForm
                        form={form}
                        labelPosition='left'
                        onFinish={save}
                        className='s-form'
                    >
                        <NutForm.Item
                            name='glucose_value'
                            label='请选择血糖测量时段'
                            required
                        >
                            <View
                                className='flex justify-end items-center gap-10px'
                                onClick={() => setMeasurementPeriodVisible(true)}
                            >
                                <TaroText className='c-primary text-30px fw-600'>{
                                    getMeasurementPeriodText()
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
                            name='diet_record'
                            label='饮食'
                        >
                            <NutInput align='left' placeholder='饮食记录（选填）' />
                        </NutForm.Item>
                        <NutForm.Item
                            name='exercise_record'
                            label='运动'
                        >
                            <NutInput align='left' placeholder='运动记录（选填）' />
                        </NutForm.Item>
                        <NutForm.Item
                            name='remarks'
                            label='备注'
                        >
                            <NutTextArea rows={5} placeholder='选填，建议备注饮食、运动等内容' />
                        </NutForm.Item>
                    </NutForm>
                </View>
            </View>

            <View className='w-full pt-20px pb-60px fixed bottom-0 left-0 bg-white z-2'>
                <View className='px-40px flex gap-30px'>

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

            <NutNumberKeyboard
                visible={numberKeyBoardVisible}
                title='输入血糖值'
                custom={['.']}
                onChange={onNumberKeyBoardChange}
                onDelete={onNumberKeyBoardDelete}
                onClose={() => setNumberKeyBoardVisible(false)}
                onConfirm={() => setNumberKeyBoardVisible(false)}
            />

            <NutPicker
                visible={measurementPeriodVisible}
                options={measurementPeriodList}
                defaultValue={[measurementPeriod]}
                onConfirm={(list, values) => {
                    setMeasurementPeriod(Number(values[0]));
                    setMeasurementPeriodVisible(false);
                }}
                onClose={() => setMeasurementPeriodVisible(false)}
            />

            <NutDatePicker
                title='血糖记录时间'
                defaultValue={new Date(recordTime)}
                endDate={new Date()}
                visible={datePickerVisible}
                type='datetime'
                onClose={() => setDatePickerVisible(false)}
                onConfirm={(options, values) => {
                    const [year, month, day, hour, minute] = values;
                    setRecordTime(dayjs(`${year}-${month}-${day} ${hour}:${minute}`).valueOf());
                    setDatePickerVisible(false);
                }}
            />
        </>
    );
}

export default Index;
