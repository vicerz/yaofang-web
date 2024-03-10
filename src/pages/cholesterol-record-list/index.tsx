import dayjs from 'dayjs';
import './index.scss';

const CholesterolRecordListQueryDocument = graphql(`
    query CholesterolRecordListQuery($offset: Int!, $limit: Int!) {
        cholesterol_records(order_by: {record_time: desc}, offset: $offset, limit: $limit) {
            diastolic_pressure
            id
            systolic_pressure
            pulse_rate
            record_time
        }
    }
`);

function Index() {
    const limit = 20;
    const [offset, setOffset] = useState(0);
    const [list, setList] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const [{ data }, fetch] = useQuery({
        query: CholesterolRecordListQueryDocument,
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
        if (!data?.cholesterol_records) return;
        if (offset === 0) {
            setList(data?.cholesterol_records);
            return;
        }
        setList((prev) => [...prev, ...data?.cholesterol_records]);
        setHasMore(data.cholesterol_records.length === limit);
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
                    {list.map((item) => (
                        <View
                            key={item.id}
                            className='flex items-center justify-end px-52px py-38px gap-25px border-1px border-solid border-#B3BAC5 rd-20px'
                            onClick={() => Router.toCholesterolRecordDetail({params:{ id: item.id }})}
                        >
                            <View className='flex flex-col items-center'>
                                <TaroText className='text-24px fw-400 c-black'>收缩压</TaroText>
                                <TaroText className='text-40px fw-400 c-black font-italic'>{item.systolic_pressure}</TaroText>
                            </View>
                            <View className='flex flex-col items-center'>
                                <TaroText className='text-24px fw-400 c-black'>舒张压</TaroText>
                                <TaroText className='text-40px fw-400 c-black font-italic'>{item.diastolic_pressure}</TaroText>
                            </View>
                            <View className='flex flex-col items-center'>
                                <TaroText className='text-24px fw-400 c-black'>心率</TaroText>
                                <TaroText className='text-40px fw-400 c-black font-italic'>{item.pulse_rate}</TaroText>
                            </View>
                            <View className='flex flex-col items-end flex-1'>
                                <TaroText className='text-24px fw-400 c-nplightgrey'>{dayjs(item.record_time).format('YYYY.MM.DD HH:mm')}</TaroText>
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
