import Taro from '@tarojs/taro';
import { useLogto } from '@logto/react';

import './index.scss';

const InsertMedicationReminderMutationDocument = graphql(`
    mutation InsertMedicationReminderMutation($object: medication_reminders_insert_input!) {
        insert_medication_reminders_one(object: $object) {
            id
        }
    }
`);

function Index() {
    const { fetchUserInfo } = useLogto();

    const [countPikerVisible, setCountPikerVisible] = useState(false);
    const [timePickerVisible, setTimePickerVisible] = useState(false);
    const [dosesPerDay, setDosesPerDay] = useState(1);
    const [reminderTimes, setReminderTimes] = useState<string[]>([]);
    const [currentReminderIndex, setCurrentReminderIndex] = useState<number>(0);

    const [, insertMedicationReminder] = useMutation(InsertMedicationReminderMutationDocument);

    const [form] = NutForm.useForm();

    const countPikerOptions = [
        [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
            { text: '6', value: 6 },
            { text: '7', value: 7 },
            { text: '8', value: 8 },
            { text: '9', value: 9 },
            { text: '10', value: 10 },
        ],
    ];

    const getDefaultDate = () => {
        const now = new Date();
        const [hour, minute] = reminderTimes[currentReminderIndex].split(':');
        if (hour === undefined || minute === undefined) {
            return now;
        }
        now.setHours(Number(hour));
        now.setMinutes(Number(minute));
        return now;
    };

    const save = async (values) => {
        if (!dosesPerDay) {
            Taro.showToast({
                title: '请选择每天用药次数',
                icon: 'none',
            });
            return;
        }

        if (reminderTimes.some((item) => !item)) {
            Taro.showToast({
                title: '请选择用药提醒时间',
                icon: 'none',
            });
            return;
        }

        const userInfo = await fetchUserInfo();

        insertMedicationReminder({
            object: {
                ...values,
                reminder_times: reminderTimes,
                doses_per_day: dosesPerDay,
                phone_number: userInfo?.phone_number,
            },
        }).then(({ error }) => {
            if (!error) {
                Taro.showToast({
                    title: '保存成功',
                    icon: 'none',
                });
                Router.back();
                return;
            }
            Taro.showToast({
                title: '保存失败，请重试',
                icon: 'none',
            });
        });
    };

    useEffect(() => {
        if (dosesPerDay) {
            setReminderTimes(Array.from({ length: dosesPerDay }).map(() => ''));
        }
    }, [dosesPerDay]);

    return (
        <>
            <View className='flex flex-col gap-40px pt-80px px-40px'>
                <View className='flex flex-col gap-10px'>
                    <View className='flex gap-20px items-center'>
                        <View className='w-8px h-30px bg-primary rd-40px'></View>
                        <TaroText className='text-30px fw-400 c-#999999'>用药情况</TaroText>
                    </View>
                    <NutForm
                        form={form}
                        labelPosition='left'
                        onFinish={save}
                        className='s-form'
                    >
                        <NutForm.Item
                            name='name'
                            label='药品名称'
                            rules={[{
                                required: true,
                                message: '请输入药品名称',
                            }]}
                        >
                            <NutInput align='right' placeholder='请输入药品名称' />
                        </NutForm.Item>
                        <NutForm.Item
                            name='spec'
                            label='药品规格'
                        >
                            <NutInput align='right' placeholder='请输入药品规格' />
                        </NutForm.Item>
                        <NutForm.Item
                            name='usage_dosage'
                            label='用法用量'
                        >
                            <NutInput align='right' placeholder='请输入用法用量' />
                        </NutForm.Item>
                        <NutForm.Item
                            name='manufacturer'
                            label='生产厂家'
                        >
                            <NutInput align='right' placeholder='请输入生产厂家' />
                        </NutForm.Item>
                    </NutForm>
                </View>
                <View className='flex flex-col gap-10px'>
                    <View className='flex gap-20px items-center'>
                        <View className='w-8px h-30px bg-primary rd-40px'></View>
                        <TaroText className='text-30px fw-400 c-#999999'>用药提醒</TaroText>
                    </View>
                    <View className='flex flex-col gap-10px'>
                        <View
                            className='flex items-center gap-20px py-20px border-b-1px border-b-dashed border-b-#B3BAC5'
                            onClick={() => setCountPikerVisible(true)}
                        >
                            <View className='w-4px h-60px bg-#F5F6F6 rd-2px'></View>
                            <TaroText className='text-30px c-black fw-400'>每天用药次数</TaroText>
                            <TaroText className='text-32px c-primary fw-400 ml-auto'>{ dosesPerDay }</TaroText>
                            <NutIconArrowSize8 color='#B3BAC5' />
                        </View>
                        {reminderTimes.map((time, index) => (
                            <View
                                key={index}
                                className='flex items-center gap-20px py-20px border-b-1px border-b-dashed border-b-#B3BAC5'
                                onClick={() => {
                                    setCurrentReminderIndex(index);
                                    setTimePickerVisible(true);
                                }}
                            >
                                <View className='w-4px h-60px bg-#F5F6F6 rd-2px'></View>
                                <TaroText className='text-30px c-black fw-400'>第 { index + 1 } 次提醒时间</TaroText>
                                <TaroText className='text-32px c-primary fw-400 ml-auto'>{ time }</TaroText>
                                <NutIconArrowSize8 color='#B3BAC5' />
                            </View>
                        ))}
                    </View>
                </View>
                <View className='flex gap-30px mt-50px pb-60px'>
                    <SharpButton.Outline
                        onClick={() => {
                            Router.back();
                        }}
                    >
                        取消
                    </SharpButton.Outline>
                    <SharpButton.Primary
                        onClick={() => {
                            form.submit();
                        }}
                    >
                        保存
                    </SharpButton.Primary>
                </View>
            </View>

            <NutPicker
                visible={countPikerVisible}
                options={countPikerOptions}
                threeDimensional={false}
                duration={1000}
                onConfirm={(_, values: number[]) => {
                    setDosesPerDay(values[0]);
                    setCountPikerVisible(false);
                }}
                onClose={() => setCountPikerVisible(false)}
            />

            {timePickerVisible && (
                <NutDatePicker
                    type='hour-minutes'
                    defaultValue={getDefaultDate()}
                    visible={timePickerVisible}
                    onClose={() => setTimePickerVisible(false)}
                    onConfirm={(options, values: string[]) => {
                        const newReminderTimes = [...reminderTimes];
                        newReminderTimes[currentReminderIndex] = values.join(':');
                        setReminderTimes(newReminderTimes);
                        setTimePickerVisible(false);
                    }}
                />
            )}
        </>
    );
}

export default Index;
