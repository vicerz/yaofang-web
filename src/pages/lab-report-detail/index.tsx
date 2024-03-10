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
