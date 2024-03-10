import Taro from '@tarojs/taro';
import './index.scss';

const CholesterolStandardsQueryDocument = graphql(`
    query CholesterolStandardsQuery {
        cholesterol_standards {
            diastolic_pressure
            systolic_pressure
            id
        }
        user_cholesterol_standards {
            diastolic_pressure
            systolic_pressure
            id
        }
    }
`);

const InsertUserCholesterolStandardsMutationDocument = graphql(`
    mutation InsertUserCholesterolStandardsMutation($object: user_cholesterol_standards_insert_input!) {
        insert_user_cholesterol_standards_one(object: $object) {
            id
        }
    }
`);

const UpdateUserCholesterolStandardsMutationDocument = graphql(`
    mutation UpdateUserCholesterolStandardsMutation($id: uuid = "", $_set: user_cholesterol_standards_set_input!) {
        update_user_cholesterol_standards_by_pk(pk_columns: {id: $id}, _set: $_set) {
            id
        }
    }
`);

function Index() {
    const [rangePopupVisible, setRangePopupVisible] = useState(false);
    const [userStandardValue, setUserStandardValue] = useState<any>();

    const [{ data }] = useQuery({
        query: CholesterolStandardsQueryDocument,
    });
    const [, insertUserCholesterolStandards] = useMutation(InsertUserCholesterolStandardsMutationDocument);
    const [, updateUserCholesterolStandards] = useMutation(UpdateUserCholesterolStandardsMutationDocument);

    const defaultStandard = useMemo(() => {
        return userStandardValue?.diastolic_pressure && userStandardValue?.systolic_pressure
            ?
            [userStandardValue.diastolic_pressure, userStandardValue.systolic_pressure]
            :
            [data?.cholesterol_standards[0].diastolic_pressure, data?.cholesterol_standards[0].systolic_pressure];
    }, [data, userStandardValue]);

    const restUserStandardValue = useCallback(() => {
        setUserStandardValue({
            diastolic_pressure: data?.user_cholesterol_standards[0]?.diastolic_pressure,
            systolic_pressure: data?.user_cholesterol_standards[0]?.systolic_pressure,
        });
    }, [data]);

    const save = () => {
        if (userStandardValue?.id) {
            updateUserCholesterolStandards({
                id: userStandardValue.id,
                _set: {
                    diastolic_pressure: userStandardValue.diastolic_pressure,
                    systolic_pressure: userStandardValue.systolic_pressure,
                },
            }).then(handleResult);
        } else {
            insertUserCholesterolStandards({
                object: userStandardValue,
            }).then(handleResult);
        }
    };

    const handleResult = (result) => {
        if (result?.error) {
            Taro.showToast({
                title: '保存失败',
                icon: 'none',
            });
        } else {
            Taro.showToast({
                title: '保存成功',
                icon: 'success',
            });
            Router.toMine({
                type: NavigateType.redirectTo,
            });
        }
    };

    useEffect(() => {
        if (data?.user_cholesterol_standards) {
            setUserStandardValue(data.user_cholesterol_standards[0]);
        }
    }, [data]);

    return (
        <>
            <View className='flex flex-col gap-20px pt-80px px-40px'>
                <SharpItem title='降压目标数值'>
                    <View
                        className='flex justify-between items-center'
                        onClick={() => {
                            setUserStandardValue({
                                ...userStandardValue,
                                diastolic_pressure: defaultStandard[0],
                                systolic_pressure: defaultStandard[1],
                            });
                            setRangePopupVisible(true);
                        }}
                    >
                        <TaroText className='text-30px c-black fw-400'>
                            推荐值：{data?.cholesterol_standards[0].diastolic_pressure}-{data?.cholesterol_standards[0].systolic_pressure}
                        </TaroText>
                        <View className='flex gap-20px items-center'>
                            <TaroText className='text-34px c-#EC6400 fw-600 font-italic'>
                                {
                                    userStandardValue?.diastolic_pressure
                                }-{
                                    userStandardValue?.systolic_pressure
                                }
                            </TaroText>
                            <NutIconArrowRight />
                        </View>
                    </View>
                </SharpItem>

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
                            setRangePopupVisible(false);
                        }}
                    >完成</View>
                </View>
                <View className='px-40px mt-100px'>
                    {rangePopupVisible && (
                        <NutRange
                            defaultValue={defaultStandard}
                            range
                            max={200}
                            min={0}
                            marks={[
                                { value: 0, label: '舒张压(低压)' },
                                { value: 200, label: '收缩压(高压)' },
                            ]}
                            onEnd={(val) => {
                                setUserStandardValue({
                                    ...userStandardValue,
                                    diastolic_pressure: val[0],
                                    systolic_pressure: val[1],
                                });
                            }}
                        />
                    )}
                </View>
            </NutPopup>
        </>
    );
}

export default Index;
