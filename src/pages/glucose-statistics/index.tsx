import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { VChart } from '@visactor/taro-vchart';
import Taro from '@tarojs/taro';

import './index.scss';

interface TableColumnProps {
    key: string
    title?: string
    align?: string
    width?: number
    render?: (rowData?: any, rowIndex?: number) => string | React.ReactNode
}

dayjs.locale('zh-cn');

const GlucoseStatisticsQueryDocument = graphql(`
    query GlucoseStatisticsQuery ($startDate: timestamptz = "", $endDate: timestamptz = "") {
        glucose_records(where: {record_time: {_gt: $startDate, _lt: $endDate}}, order_by: {record_time: asc}) {
            glucose_value
            measurement_period
            record_time
        }
    }
`);

const GlucoseStatisticsChartQueryDocument = graphql(`
    query GlucoseStatisticsChartQuery ($startDate: timestamptz = "", $endDate: timestamptz = "", $measurementPeriod: Int = 1) {
        glucose_records(where: {record_time: {_gt: $startDate, _lt: $endDate}, measurement_period: {_eq: $measurementPeriod}}, order_by: {record_time: asc}) {
            glucose_value
            measurement_period
            record_time
        }
    }
`);

const GlucoseStatisticsPieChartQueryDocument = graphql(`
    query GlucoseStatisticsPieChartQuery ($startDate: timestamptz = "", $endDate: timestamptz = "") {
        tooLarge: glucose_records_aggregate(where: {too_large: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {
            aggregate {
                count
            }
        }
        tooSmall: glucose_records_aggregate(where: {too_small: {_eq: true}, record_time: {_gt: $startDate, _lt: $endDate}}) {
            aggregate {
                count
            }
        }
        normal: glucose_records_aggregate(where: {too_large: {_eq: false}, too_small: {_eq: false}, record_time: {_gt: $startDate, _lt: $endDate}}) {
            aggregate {
                count
            }
        }
    }
`);

function Index() {
    const [calendarVisible, setCalendarVisible] = useState(false);
    const [measurementPeriodVisible, setMeasurementPeriodVisible] = useState(false);

    const [dateRange, setDateRange] = useState([dayjs().subtract(6, 'day').toDate(), dayjs().toDate()]);
    const [tableDateRange, setTableDateRange] = useState(dateRange);
    const [chartDateRange, setChartDateRange] = useState(dateRange);
    const [pieChartDateRange, setPieChartDateRange] = useState(dateRange);
    const [currentDateRange, setCurrentDateRange] = useState('');
    const [measurementPeriod, setMeasurementPeriod] = useState(1);

    const [tableData, setTableData] = useState<any[]>([]); // 表格数据
    const [lineChartSpec, setLineChartSpec] = useState({
        type: 'line',
        xField: 'date',
        yField: 'value',
        line: {
            style: {
                lineWidth: 1,
                stroke: '#EC6400',
            },
        },
        point: {
            size: 5,
            shape: 'circle',
            style: {
                fill: '#EC6400',
            },
        },
        tooltip: {
            trigger: 'click' as 'hover'|'click'|'none',
            mark: {
                title: {
                    visible: false,
                }
            }
        },
        padding: {
            top: 0,
            left: 0,
            right: 0,
        },
        data: {
            values: [
            ]
        },
    });
    const [pieChartSpec, setPieChartSpec] = useState({
        type: 'pie',
        padding: 0,
        data: [
            {
                values: [
                    {
                        type: '偏高',
                        value: 0,
                    },
                    {
                        type: '正常',
                        value: 0,
                    },
                    {
                        type: '偏低',
                        value: 0,
                    },
                ]
            }
        ],
        valueField: 'value',
        categoryField: 'type',
        outerRadius: 0.8,
        innerRadius: 0.5,
        padAngle: 0.6,
        color: {
            range: ['#F5B647', '#B29251','#EC6400'],
        },
        legends: {
            visible: true,
            orient: 'bottom',
            item: {
                shape: {
                    style: {
                        fillOpacity: 0
                    }
                }
            },
            data: items => {
                return items.map(item => {
                    item.shape.outerBorder = {
                        stroke: item.shape.fill,
                        distance: 2,
                        lineWidth: 4
                    };

                    return item;
                });
            },
        },
        tooltip: {
            trigger: 'click' as 'hover'|'click'|'none',
            mark: {
                title: {
                    visible: false,
                },
                content: {
                    value: datum => {
                        return `${datum.type} ${datum._percent_}%`;
                    }
                }
            }
        },
        label: {
            visible: true,
            formatter: '{type} {value}',
            style: {
                lineDash: [2, 3],
            }
        },
    });
    const tableColumns: any[] = [
        {
            key: 'date',
            title: '时间',
            align: 'center',
            fixed: 'left',
            render: (rowData) => {
                return (
                    <View className='flex flex-col items-center justify-between'>
                        <TaroText className='text-24px c-black'>{dayjs(rowData.date).format('ddd')}</TaroText>
                        <TaroText className='text-20px c-#B3BAC5'>{dayjs(rowData.date).format('MM.DD')}</TaroText>
                    </View>
                );
            }
        },
        {
            key: '1',
            title: '早餐前',
            align: 'center',
        },
        {
            key: '2',
            title: '早餐后',
            align: 'center',
        },
        {
            key: '3',
            title: '午餐前',
            align: 'center',
        },
        {
            key: '4',
            title: '午餐后',
            align: 'center',
        },
        {
            key: '5',
            title: '晚餐前',
            align: 'center',
        },
        {
            key: '6',
            title: '晚餐后',
            align: 'center',
        },
        {
            key: '7',
            title: '其他',
            align: 'center',
        },
    ];
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

    const [{ data: glucoseRecordsData }] = useQuery({
        query: GlucoseStatisticsQueryDocument,
        variables: {
            startDate: dayjs(tableDateRange[0]).subtract(1, 'day').toDate(),
            endDate: dayjs(tableDateRange[1]).add(1, 'day').toDate(),
        }
    });
    const [{ data: glucoseRecordsChartData }] = useQuery({
        query: GlucoseStatisticsChartQueryDocument,
        variables: {
            startDate: dayjs(chartDateRange[0]).subtract(1, 'day').toDate(),
            endDate: dayjs(chartDateRange[1]).add(1, 'day').toDate(),
            measurementPeriod,
        }
    });
    const [{ data: glucoseRecordsPieChartData }] = useQuery({
        query: GlucoseStatisticsPieChartQueryDocument,
        variables: {
            startDate: dayjs(pieChartDateRange[0]).subtract(1, 'day').toDate(),
            endDate: dayjs(pieChartDateRange[1]).add(1, 'day').toDate(),
        }
    });

    useEffect(() => {
        if (glucoseRecordsData) {
            // 按时间范围生成表格数据
            const newTableData: any[] = [];
            const dateRangeDays = dayjs(tableDateRange[1]).diff(tableDateRange[0], 'day');
            for (let i = 0; i <= dateRangeDays; i++) {
                const date = dayjs(tableDateRange[0]).add(i, 'day').format('YYYY-MM-DD');
                const glucoseRecords = glucoseRecordsData.glucose_records.filter(record => {
                    return dayjs(record.record_time).format('YYYY-MM-DD') === date;
                });
                const rowData = {
                    date,
                };
                glucoseRecords.forEach(record => {
                    rowData[record.measurement_period] = record.glucose_value;
                });
                newTableData.push(rowData);
            }
            setTableData(newTableData);
        }
    }, [glucoseRecordsData]);

    useEffect(() => {
        if (glucoseRecordsChartData) {
            // 按时间范围生成折线图数据
            const newLineChartSpec = {
                ...lineChartSpec,
                data: {
                    values: glucoseRecordsChartData.glucose_records.map(record => {
                        return {
                            date: dayjs(record.record_time).format('MM.DD'),
                            value: record.glucose_value,
                        };
                    })
                }
            };
            setLineChartSpec(newLineChartSpec);
        }
    }, [glucoseRecordsChartData]);

    useEffect(() => {
        if (glucoseRecordsPieChartData) {
            // 按时间范围生成饼图数据
            const newPieChartSpec = {
                ...pieChartSpec,
                data: [
                    {
                        values: [
                            {
                                type: '偏高',
                                value: glucoseRecordsPieChartData.tooLarge.aggregate?.count,
                            },
                            {
                                type: '正常',
                                value: glucoseRecordsPieChartData.normal.aggregate?.count,
                            },
                            {
                                type: '偏低',
                                value: glucoseRecordsPieChartData.tooSmall.aggregate?.count,
                            },
                        ]
                    }
                ],
                label: {
                    visible: glucoseRecordsPieChartData.tooLarge.aggregate?.count && glucoseRecordsPieChartData.normal.aggregate?.count && glucoseRecordsPieChartData.tooSmall.aggregate?.count,
                }
            };
            setPieChartSpec(newPieChartSpec as any);
        }
    }, [glucoseRecordsPieChartData]);

    return (
        <View className='glucose-statistics'>
            <View className='flex flex-col pt-80px pb-80px px-40px gap-50px'>
                <View className='flex justify-between items-center'>
                    <View
                        className='flex gap-20px py-16px px-34px items-center rd-10px bg-#F5F2EB'
                        style={{ border: '1px solid #B29251'}}
                        onClick={() => {
                            setCurrentDateRange('table');
                            setDateRange(tableDateRange);
                            setCalendarVisible(true);
                        }}
                    >
                        <TaroImage src='../../assets/icons/date-brown.png' className='w-32px h-32px' />
                        <TaroText className='text-24px c-#B29251'>
                            {dayjs(tableDateRange[0]).format('YYYY.MM.DD')}~{dayjs(tableDateRange[1]).format('YYYY.MM.DD')}
                        </TaroText>
                    </View>
                    <TaroText
                        className='text-30px c-primary lh-33px'
                        style={{ borderBottom: '2px solid #EC6400'}}
                        onClick={() => Router.toGlucoseRecordList()}
                    >血糖记录列表</TaroText>
                </View>
                <ScrollView
                    scrollX
                    scrollWithAnimation
                    className='rd-20px card-shadow'
                >
                    <NutTable
                        columns={tableColumns}
                        data={tableData}
                    />
                </ScrollView>
                <View
                    className='flex flex-col gap-30px card-shadow rd-20px px-20px py-30px'
                >
                    <View className='flex justify-between items-center'>
                        <View
                            className='flex gap-20px py-16px px-34px items-center rd-10px'
                            style={{ border: '1px solid #B3BAC5'}}
                            onClick={() => {
                                setCurrentDateRange('chart');
                                setDateRange(chartDateRange);
                                setCalendarVisible(true);
                            }}
                        >
                            <TaroImage src='../../assets/icons/date-black.png' className='w-32px h-32px' />
                            <TaroText className='text-24px c-black'>{
                                dayjs(chartDateRange[0]).format('YYYY.MM.DD')}~{dayjs(chartDateRange[1]).format('YYYY.MM.DD')
                            }</TaroText>
                        </View>
                        <View
                            className='flex items-center gap-20px py-20px px-26px rd-10px bg-primary'
                            onClick={() => setMeasurementPeriodVisible(true)}
                        >
                            <TaroText className='text-26px c-white lh-33px'>{
                                measurementPeriodList[0].find(item => item.value === String(measurementPeriod))?.text
                            }</TaroText>
                            <NutIconArrowSize8 className='ml-auto' color='white' size={14} />
                        </View>
                    </View>
                    <VChart
                        type='h5'
                        spec={lineChartSpec}
                        canvasId='glucose-statistics-line'
                        style={{ height: '35vh', width: '100%' }}
                    />
                </View>
                <View
                    className='flex flex-col gap-30px card-shadow rd-20px px-20px py-30px'
                >
                    <View
                        className='flex gap-20px py-16px px-34px items-center rd-10px'
                        style={{ border: '1px solid #B3BAC5'}}
                        onClick={() => {
                            setCurrentDateRange('pie');
                            setDateRange(pieChartDateRange);
                            setCalendarVisible(true);
                        }}
                    >
                        <TaroImage src='../../assets/icons/date-black.png' className='w-32px h-32px' />
                        <TaroText className='text-24px c-black'>{
                            dayjs(pieChartDateRange[0]).format('YYYY.MM.DD')}~{dayjs(pieChartDateRange[1]).format('YYYY.MM.DD')
                        }</TaroText>
                    </View>
                    <VChart
                        type='h5'
                        spec={pieChartSpec}
                        canvasId='glucose-statistics-pie'
                        style={{ height: '35vh', width: '100%' }}
                    />
                </View>
            </View>

            <NutPopup
                title='选择日期'
                visible={calendarVisible}
                position='bottom'
                closeable
                onClose={() => setCalendarVisible(false)}
            >
                <View className='flex justify-end px-40px'>
                    <View
                        className='text-28px c-black'
                        onClick={() => {
                            if (dateRange.length !== 2) {
                                Taro.showToast({
                                    title: '请选择日期范围',
                                    icon: 'none',
                                });
                                return;
                            }

                            if (currentDateRange === 'table') {
                                setTableDateRange(dateRange);
                            } else if (currentDateRange === 'chart') {
                                setChartDateRange(dateRange);
                            } else if (currentDateRange === 'pie') {
                                setPieChartDateRange(dateRange);
                            }
                            setCalendarVisible(false);
                        }}
                    >完成</View>
                </View>
                <NutCalendarCard
                    value={dateRange}
                    type='range'
                    onChange={(d: Date[]) => {
                        setDateRange(d);
                    }}
                    endDate={dayjs().toDate()}
                />
            </NutPopup>

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
        </View>
    );
}

export default Index;
