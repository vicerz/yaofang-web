import dayjs from 'dayjs';
import './index.scss';

const GlucoseRecordListQueryDocument = graphql(`
    query GlucoseRecordListQuery($offset: Int!, $limit: Int!) {
        glucose_records(order_by: {record_time: desc}, offset: $offset, limit: $limit) {
            glucose_value
            measurement_period
            record_time
            id
        }
    }
`);

function Index() {
    const limit = 20;
    const [offset, setOffset] = useState(0);
    const [list, setList] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const measurementPeriodList = [
        { text: '早餐前', value: '1' },
        { text: '早餐后', value: '2' },
        { text: '午餐前', value: '3' },
        { text: '午餐后', value: '4' },
        { text: '晚餐前', value: '5' },
        { text: '晚餐后', value: '6' },
        { text: '其他', value: '7' },
    ];

    const [{ data }, fetch] = useQuery({
        query: GlucoseRecordListQueryDocument,
        variables: {
            offset,
            limit,
        },
        requestPolicy: 'network-only',
    });

    const loadMore = async () => {
        setOffset(offset + limit);
    };

    const refresh = async () => {
        setOffset(0);
        fetch();
    };

    useEffect(() => {
        if (!data?.glucose_records) return;
        if (offset === 0) {
            setList(data?.glucose_records);
            return;
        }
        setList((prev) => [...prev, ...data?.glucose_records]);
        setHasMore(data.glucose_records.length === limit);
    }, [data]);

    return (
        <View id='InfiniteView' className='h-100vh'>
            <NutInfiniteLoading
                loadingText='加载中···'
                loadMoreText='没有啦～'
                pullRefresh
                target='InfiniteView'
                hasMore={hasMore}
                onLoadMore={loadMore}
                onRefresh={refresh}
            >
                <View className='flex flex-col px-40px gap-20px pt-80px'>
                    {list.map((item, index) => (
                        <View
                            key={item.id}
                            className='flex items-center justify-end px-52px py-38px border-1px border-solid border-#B3BAC5 rd-20px'
                            onClick={() => Router.toGlucoseRecordDetail({params:{ id: item.id }})}
                        >
                            <View className='flex items-baseline gap-20px'>
                                <TaroText className='text-40px fw-400 c-black font-italic'>{parseFloat(item.glucose_value).toFixed(1)}</TaroText>
                                <TaroText className='text-24px fw-400 c-nplightgrey'>mmol/L</TaroText>
                            </View>
                            <View className='flex flex-col items-end flex-1 mr-20px'>
                                <TaroText className='text-24px fw-400 c-nplightgrey'>{dayjs(item.record_time).format('YYYY.MM.DD HH:mm')}</TaroText>
                                <TaroText className='text-30px fw-400 c-black'>{measurementPeriodList.find(({ value }) => Number(value) === item.measurement_period)?.text}</TaroText>
                            </View>
                            <NutIconArrowSize8 color='#B3BAC5' className='ml-auto' />
                        </View>
                    ))}
                </View>
            </NutInfiniteLoading>
        </View>
    );
}

export default Index;
