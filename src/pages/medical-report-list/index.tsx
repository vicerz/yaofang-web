import dayjs from 'dayjs';
import './index.scss';

const MedicalReportListQueryDocument = graphql(`
    query MedicalReportListQuery($offset: Int!, $limit: Int!) {
        medical_examination_records(order_by: {exam_date: desc}, offset: $offset, limit: $limit) {
            id
            exam_date
        }
    }
`);

function Index() {
    const limit = 20;
    const [offset, setOffset] = useState(0);
    const [list, setList] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const [{ data }, fetch] = useQuery({
        query: MedicalReportListQueryDocument,
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
        if (!data?.medical_examination_records) return;
        if (offset === 0) {
            setList(data?.medical_examination_records);
            return;
        }
        setList((prev) => [...prev, ...data?.medical_examination_records]);
        setHasMore(data.medical_examination_records.length === limit);
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
                            className='flex items-center justify-between px-52px py-38px border-1px border-solid border-#B3BAC5 rd-20px'
                            onClick={() => Router.toMedicalReportDetail({params: {id: item.id}})}
                        >
                            <View className='flex flex-col'>
                                <TaroText className='text-24px fw-400 c-nplightgrey'>体检时间</TaroText>
                                <TaroText className='text-30px fw-400 c-black'>{item.exam_date}</TaroText>
                            </View>
                            <NutIconArrowSize8 color='#B3BAC5' className='ml-auto' />
                        </View>
                    ))}

                    {list.length === 0 && (
                        <NutEmpty description='还没有体检报告' />
                    )}
                </View>
            </NutInfiniteLoading>
        </View>

    );
}

export default Index;
