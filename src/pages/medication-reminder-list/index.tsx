import Taro from '@tarojs/taro';
import { useLogto } from '@logto/react';

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
    const { fetchUserInfo } = useLogto();

    const [{ data }, fetch] = useQuery({
        query: MedicationReminderListQueryDocument,
        requestPolicy: 'network-only',
    });

    const [, deleteMedicationReminder] = useMutation(DeleteMedicationReminderMutationDocument);

    const handleDelete = (id) => {
        Taro.showModal({
            title: '提示',
            content: '确定要删除吗？',
            confirmColor: '#EC6400',
            success: (res) => {
                if (res.confirm) {
                    deleteMedicationReminder({
                        id,
                    });
                }
            },
        });
    };

    const handleAdd = async () => {
        Taro.showLoading({
            title: '加载中',
        });
        const userInfo = await fetchUserInfo();
        Taro.hideLoading();
        if (!userInfo?.phone_number) {
            Taro.showModal({
                title: '完善信息',
                content: '请完善您的个人信息，以便我们更好的为您服务。',
                confirmText: '去完善',
                confirmColor: '#EC6400',
                success: (res) => {
                    if (res.confirm) {
                        Router.toProfile();
                    }
                },
            });
            return;
        }

        await Router.toMedicationReminder();
        fetch();
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
                            {item.usage_dosage && (
                                <TaroText className='text-24px c-#999999'>
                                    用法用量：{item.usage_dosage}
                                </TaroText>
                            )}
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
                    onClick={handleAdd}
                >
                    ＋ 新增用药
                </View>
            )}
            <View className='text-center text-20px c-#999999'>最多支持 5 个用药提醒</View>
        </View>
    );
}

export default Index;
