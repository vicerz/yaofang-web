import Taro from '@tarojs/taro';
import './index.scss';

const GlucoseStandardsQueryDocument = graphql(`
    query GlucoseStandardsQuery {
        glucose_standards(order_by: {type: asc}) {
            max
            min
            title
            type
        }
        user_glucose_standards(order_by: {type: asc}) {
            id
            max
            min
            title
            type
        }
    }
`);

const InsertUserGlucoseStandardsMutationDocument = graphql(`
    mutation InsertUserGlucoseStandardsMutation($objects: [user_glucose_standards_insert_input!]!) {
        insert_user_glucose_standards(objects: $objects) {
            affected_rows
        }
    }
`);

const UpdateUserGlucoseStandardsMutationDocument = graphql(`
    mutation UpdateUserGlucoseStandardsMutation($updates: [user_glucose_standards_updates!]!) {
        update_user_glucose_standards_many(updates: $updates) {
            affected_rows
        }
    }
`);

function Index() {
    const [typePickerVisible, setTypePickerVisible] = useState(false);
    const [rangePopupVisible, setRangePopupVisible] = useState(false);
    const [type, setType] = useState(1);
    const [standardType, setStandardType] = useState(0);
    const [currentStandard, setCurrentStandard] = useState('');
    const [userStandardValue, setUserStandardValue] = useState<any>();

    const [{ data }] = useQuery({
        query: GlucoseStandardsQueryDocument,
    });
    const [, insertUserGlucoseStandards] = useMutation(InsertUserGlucoseStandardsMutationDocument);
    const [, updateUserGlucoseStandards] = useMutation(UpdateUserGlucoseStandardsMutationDocument);

    const typeList = [[
        {
            text: 'I 型',
            value: 1,
        },
        {
            text: 'II 型',
            value: 2,
        },
    ]];

    const defaultStandard = useMemo(() => {
        const userStandard = userStandardValue?.find((item) => item.type === standardType);
        if (userStandard) {
            return [userStandard.min, userStandard.max];
        }
        const standard = data?.glucose_standards?.find((item) => item.type === standardType);
        return [standard?.min, standard?.max];
    }, [data, standardType, userStandardValue]);

    const restUserStandardValue = useCallback(() => {
        setUserStandardValue(data?.user_glucose_standards);
    }, [data]);

    const save = () => {
        const insertData = userStandardValue?.filter((item) => !item.id).map((item) => ({
            ...item,
        }));
        const updateData = userStandardValue?.filter((item) => item.id).map((item) => ({
            where: {
                id: { _eq: item.id },
            },
            _set: {
                min: item.min,
                max: item.max,
            },
        }));

        Promise.all([
            !!insertData.length && insertUserGlucoseStandards({
                objects: insertData,
            }),
            !!updateData.length && updateUserGlucoseStandards({
                updates: updateData,
            }),
        ]).then(() => {
            Taro.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 2000,
            });
            Router.toMine({
                type: NavigateType.redirectTo,
            });
        });
    };

    useEffect(() => {
        if (data?.user_glucose_standards) {
            setUserStandardValue(data.user_glucose_standards);
        }
    }, [data]);

    return (
        <>
            <View className='flex flex-col gap-20px pt-80px px-40px'>
                <View
                    className='flex justify-end items-center gap-20px bg-#F5F6F6 py-30px px-40px rd-10px'
                    onClick={() => setTypePickerVisible(true)}
                >
                    <TaroText className='text-30px c-black fw-400 mr-auto'>糖尿病类型</TaroText>
                    <TaroText className='text-30px c-black fw-400'>{
                        typeList[0].find((item) => item.value === type)?.text
                    }</TaroText>
                    <NutIconArrowRight />
                </View>

                {data?.glucose_standards.map((item) => (
                    <SharpItem
                        key={item.type}
                        title={item.title}
                    >
                        <View
                            className='flex justify-between items-center'
                            onClick={() => {
                                setStandardType(item.type);

                                setRangePopupVisible(true);
                            }}
                        >
                            <TaroText className='text-30px c-black fw-400'>推荐值：{item.min}-{item.max}</TaroText>
                            <View className='flex gap-20px items-center'>
                                <TaroText className='text-34px c-#EC6400 fw-600 font-italic'>
                                    {
                                        userStandardValue?.find((userItem) => userItem.type === item.type)
                                            ?.min
                                    }-{
                                        userStandardValue?.find((userItem) => userItem.type === item.type)
                                            ?.max
                                    }
                                </TaroText>
                                <NutIconArrowRight />
                            </View>
                        </View>
                    </SharpItem>
                ))}

                <View className='flex gap-30px mt-100px'>
                    <SharpButton.Outline
                        onClick={restUserStandardValue}
                    >
                        重置
                    </SharpButton.Outline>
                    <SharpButton.Primary
                        onClick={save}
                    >
                        保存
                    </SharpButton.Primary>
                </View>
            </View>

            <NutPicker
                visible={typePickerVisible}
                onClose={() => setTypePickerVisible(false)}
                onConfirm={(_, values) => {
                    setType(Number(values[0]));
                    setTypePickerVisible(false);
                }}
                defaultValue={[type]}
                options={typeList}
            />

            <NutPopup
                title='设置目标'
                visible={rangePopupVisible}
                position='bottom'
                closeable
                onClose={() => setRangePopupVisible(false)}
            >
                <View className='flex justify-end px-40px'>
                    <View
                        className='text-28px c-black'
                        onClick={() => {
                            const userStandard = userStandardValue?.find((item) => item.type === standardType) || {
                                type: standardType,
                                title: data?.glucose_standards?.find((item) => item.type === standardType)?.title,
                            };

                            const values = currentStandard ? currentStandard.split(',') : defaultStandard;
                            setUserStandardValue([
                                ...userStandardValue?.filter((item) => item.type !== standardType),
                                {
                                    ...userStandard,
                                    min: parseFloat(values[0]).toFixed(1),
                                    max: parseFloat(values[1]).toFixed(1),
                                },
                            ]);
                            setRangePopupVisible(false);
                        }}
                    >完成</View>
                </View>
                <View className='px-40px mt-100px'>
                    {rangePopupVisible && (
                        <NutRange
                            defaultValue={defaultStandard}
                            range
                            max={10}
                            min={0}
                            step={0.1}
                            currentDescription={(val) => parseFloat(String(val)).toFixed(1)}
                            onEnd={(val) => {
                                setCurrentStandard(String(val));
                            }}
                        />
                    )}
                </View>
            </NutPopup>
        </>
    );
}

export default Index;
