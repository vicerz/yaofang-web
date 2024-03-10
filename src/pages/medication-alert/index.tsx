import './index.scss';

function Index() {
    const [countPikerVisible, setCountPikerVisible] = useState(false);
    const [timePickerVisible, setTimePickerVisible] = useState(false);

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
                        onFinish={(values) => {
                            console.log(values);
                        }}
                        className='s-form'
                    >
                        <NutForm.Item
                            name='name'
                            label='药品名称'
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
                            name='usage'
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
                    <View className='w-full text-center bg-#F5F6F6 rd-20px py-26px text-30px c-primary fw-600'>
                    ＋ 新增用药
                    </View>
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
                            <TaroText className='text-32px c-primary fw-400 ml-auto'>2</TaroText>
                            <NutIconArrowSize8 color='#B3BAC5' />
                        </View>
                        <View
                            className='flex items-center gap-20px py-20px border-b-1px border-b-dashed border-b-#B3BAC5'
                            onClick={() => setTimePickerVisible(true)}
                        >
                            <View className='w-4px h-60px bg-#F5F6F6 rd-2px'></View>
                            <TaroText className='text-30px c-black fw-400'>第一次提醒时间</TaroText>
                            <TaroText className='text-32px c-primary fw-400 ml-auto'>08:00</TaroText>
                            <NutIconArrowSize8 color='#B3BAC5' />
                        </View>
                    </View>
                </View>
            </View>
            <NutPicker
                visible={countPikerVisible}
                options={countPikerOptions}
                threeDimensional={false}
                duration={1000}
                onConfirm={(list, values) => console.log(list, values)}
                onClose={() => setCountPikerVisible(false)}
            />
            <NutDatePicker
                type='hour-minutes'
                visible={timePickerVisible}
                onClose={() => setTimePickerVisible(false)}
                onConfirm={(options, values) => console.log(values,options)}
            />
        </>
    );
}

export default Index;
