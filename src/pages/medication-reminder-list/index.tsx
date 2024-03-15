import Taro from '@tarojs/taro';
import './index.scss';

const MedicationReminderListQueryDocument = graphql(`
    query MedicationReminderListQuery {
        medication_reminders {
            id
            name
            usage_dosage
        }
    }
`);

const DeleteMedicationReminderMutationDocument = graphql(`
    mutation DeleteMedicationReminderMutation($id: uuid!) {
        delete_medication_reminders_by_pk(id: $id) {
            id
        }
    }
`);

function Index() {
    const [{ data }] = useQuery({
        query: MedicationReminderListQueryDocument,
    });

    const [, deleteMedicationReminder] = useMutation(DeleteMedicationReminderMutationDocument);

    const handleDelete = (id) => {
        Taro.showModal({
            title: '提示',
            content: '确定要删除吗？',
            success: (res) => {
                if (res.confirm) {
                    deleteMedicationReminder({
                        id,
                    });
                }
            },
        });
    };

    return (
        <View className='flex flex-col gap-40px pt-60px px-40px'>
            <View className='flex flex-col gap-20px'>
                <View className='flex gap-20px items-center'>
                    <View className='w-8px h-30px bg-primary rd-40px'></View>
                    <TaroText className='text-30px fw-400 c-#999999'>用药列表</TaroText>
                </View>
                {data?.medication_reminders.map((item) => (
                    <View key={item.id} className='flex justify-between items-center bg-#F5F6F6 rd-20px px-40px py-30px'>
                        <View className='flex flex-col gap-10px'>
                            <TaroText className='text-30px c-black'>
                                {item.name}
                            </TaroText>
                            <TaroText className='text-24px c-#999999'>
                            用法用量：{item.usage_dosage}
                            </TaroText>
                        </View>
                        <View onClick={() => handleDelete(item.id)}>
                            <NutIconTrash color='#EC6400' size={20} />
                        </View>
                    </View>
                ))}
            </View>
            {data?.medication_reminders.length === 0 && (
                <NutEmpty description='没有用药提醒' />
            )}
            {(data?.medication_reminders.length || 0) < 5 && (
                <View
                    className='w-full text-center bg-#F5F6F6 rd-20px py-26px text-30px c-primary fw-600'
                    onClick={() => Router.toMedicationReminder()}
                >
                ＋ 新增用药
                </View>
            )}
            <View className='text-center text-20px c-#999999'>最多支持 5 个用药提醒</View>
        </View>
    );
}

export default Index;
