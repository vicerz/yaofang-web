import dayjs from 'dayjs';
import Taro from '@tarojs/taro';

import './index.scss';

const LabReportRecordDetailQueryDocument = graphql(`
    query LabReportRecordDetailQuery($id: uuid!) {
        lab_report_records_by_pk(id: $id) {
            assay_date
            images
            remarks
            report_type
        }
    }
`);

const DeleteLabReportRecordMutationDocument = graphql(`
    mutation DeleteLabReportRecordMutation($id: uuid!) {
        delete_lab_report_records_by_pk(id: $id) {
            id
        }
    }
`);

function Index() {
    const { id } = Router.getParams();

    const [{ data }] = useQuery({
        query: LabReportRecordDetailQueryDocument,
        variables: {
            id
        }
    });
    const [,deleteRecord] = useMutation(DeleteLabReportRecordMutationDocument);

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

    const onDeleteRecord = () => {
        Taro.showModal({
            title: '删除记录',
            content: '确定删除该记录吗？',
            confirmText: '删除',
            confirmColor: '#EC6400',
            success: (res) => {
                if (res.confirm) {
                    deleteRecord({id}).then((result) => {
                        if (!result.error) {
                            Router.toIndex();
                        }
                    });
                }
            }
        });
    };

    return (
        <View className='flex flex-col px-40px pt-80px'>
            <SharpItem title='报告单类型'>
                <TaroText className='text-30px fw-600 c-black'>{reportTypeOptions.find(item => item.value === data?.lab_report_records_by_pk?.report_type)?.text}</TaroText>
            </SharpItem>
            <SharpItem title='化验时间'>
                <TaroText className='text-30px fw-600 c-black'>{dayjs(data?.lab_report_records_by_pk?.assay_date).format('YYYY-MM-DD')}</TaroText>
            </SharpItem>
            <SharpItem title='图片'>
                <View className='flex flex-wrap gap-20px mt-20px'>
                    {data?.lab_report_records_by_pk?.images.map((key: string) => (
                        <TaroImage key={key} className='w-140px h-140px rd-10px' src={process.env.TARO_APP_S3_ENDPOINT + key} />
                    ))}
                </View>
            </SharpItem>
            <SharpItem title='备注'>
                <TaroText className='text-30px fw-600 c-black'>{data?.lab_report_records_by_pk?.remarks}</TaroText>
            </SharpItem>
            <View className='flex gap-30px mt-220px'>
                <SharpButton.Outline onClick={onDeleteRecord}>
                    删除
                </SharpButton.Outline>
                <SharpButton.Primary
                    onClick={() => {
                        Router.toLabReportRecord({
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
    );
}

export default Index;
