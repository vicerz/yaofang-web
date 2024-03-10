import Taro from '@tarojs/taro';
import dayjs from 'dayjs';
import './index.scss';

const MedicalReportRecordOneQueryDocument = graphql(`
    query MedicalReportRecordOneQuery($id: uuid!) {
        medical_examination_records_by_pk(id: $id) {
            exam_date
            images
            remarks
        }
    }
`);

const DeleteMedicalReportRecordMutationDocument = graphql(`
    mutation DeleteMedicalReportRecordMutation($id: uuid!) {
        delete_medical_examination_records_by_pk(id: $id) {
            id
        }
    }
`);

function Index() {
    const { id } = Router.getParams();

    const [{ data }] = useQuery({
        query: MedicalReportRecordOneQueryDocument,
        variables: {
            id
        }
    });
    const [,deleteRecord] = useMutation(DeleteMedicalReportRecordMutationDocument);

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
            <SharpItem title='体检时间'>
                <TaroText className='text-30px fw-600 c-black'>
                    {dayjs(data?.medical_examination_records_by_pk?.exam_date).format('YYYY-MM-DD')}
                </TaroText>
            </SharpItem>
            <SharpItem title='图片'>
                <View className='flex flex-wrap gap-20px mt-20px'>
                    {data?.medical_examination_records_by_pk?.images.map((key: string) => (
                        <TaroImage key={key} className='w-140px h-140px rd-10px' src={process.env.TARO_APP_S3_ENDPOINT + key} />
                    ))}
                </View>
            </SharpItem>
            <SharpItem title='备注'>
                <TaroText className='text-30px fw-600 c-black'>{data?.medical_examination_records_by_pk?.remarks}</TaroText>
            </SharpItem>
            <View className='flex gap-30px mt-220px'>
                <SharpButton.Outline onClick={onDeleteRecord}>
                    删除
                </SharpButton.Outline>
                <SharpButton.Primary
                    onClick={() => {
                        Router.toMedicalReportRecord({
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
