import './index.scss';

const LabReportListQueryDocument = graphql(`
    query LabReportListQuery($offset: Int!, $limit: Int!) {
        lab_report_records(order_by: {assay_date: desc}, offset: $offset, limit: $limit) {
            id
            assay_date
            report_type
        }
    }
`);

function Index() {
    const limit = 20;
    const [offset, setOffset] = useState(0);
    const [list, setList] = useState<any[]>([]);
    const [hasMore, setHasMore] = useState(true);

    const [{ data }, fetch] = useQuery({
        query: LabReportListQueryDocument,
        variables: {
            offset,
            limit,
        },
        requestPolicy: 'network-only',
    });

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

    const loadMore = async () => {
        setOffset(offset + limit);
    };

    const refresh = async () => {
        setOffset(0);
        fetch();
    };

    useEffect(() => {
        if (!data?.lab_report_records) return;
        if (offset === 0) {
            setList(data?.lab_report_records);
            return;
        }
        setList((prev) => [...prev, ...data?.lab_report_records]);
        setHasMore(data.lab_report_records.length === limit);
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
                            className='flex items-center justify-end px-52px py-38px border-1px border-solid border-#B3BAC5 rd-20px'
                            onClick={() => Router.toLabReportDetail({params: {id: item.id}})}
                        >
                            <View className='flex flex-col mr-auto'>
                                <TaroText className='text-24px fw-400 c-nplightgrey'>化验时间</TaroText>
                                <TaroText className='text-30px fw-400 c-black'>{item.assay_date}</TaroText>
                            </View>
                            <View className='text-26px fw-400 c-black mr-20px'>
                                { reportTypeOptions.find((reportType) => reportType.value === item.report_type)?.text }
                            </View>
                            <NutIconArrowSize8 color='#B3BAC5' />
                        </View>
                    ))}

                    {list.length === 0 && (
                        <NutEmpty description='还没有化验报告' />
                    )}
                </View>
            </NutInfiniteLoading>
        </View>
    );
}

export default Index;
