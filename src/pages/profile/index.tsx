import { useLogto } from '@logto/react';
import Taro from '@tarojs/taro';
import './index.scss';

const UpdateUserInfoMutationDocument = graphql(`
    mutation UpdateUserInfoMutation($id: String!, $object: users_set_input!) {
        update_users_by_pk(pk_columns: {id: $id}, _set: $object) {
            id
        }
    }
`);

const InsertSmsCodeMutationDocument = graphql(`
    mutation InsertSmsCodeMutation($object: sms_codes_insert_input!) {
        insert_sms_codes_one(object: $object) {
            created_at
        }
    }
`);

const SmsCodeQueryDocument = graphql(`
    query SmsCodeQuery($phone_number: String!, $captcha: String!) {
        sms_codes(where: {phone_number: {_eq: $phone_number}, captcha: {_eq: $captcha}}, order_by: {created_at: desc}, limit: 1) {
            id
        }
    }
`);

function Index() {
    const [form] = NutForm.useForm();
    const { fetchUserInfo } = useLogto();

    const [bindPhoneVisible, setBindPhoneVisible] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userInfo, setUserInfo] = useState<any>({});
    const [phoneNumber, setPhoneNumber] = useState<string>('');
    const [captcha, setCaptcha] = useState<string>('');
    const [isCountDown, setIsCountDown] = useState(false);

    const [,update] = useMutation(UpdateUserInfoMutationDocument);
    const [, insertSmsCode] = useMutation(InsertSmsCodeMutationDocument);
    const [{ data: smsCodeData }] = useQuery({
        query: SmsCodeQueryDocument,
        variables: {
            phone_number: phoneNumber,
            captcha: captcha,
        },
        pause: !phoneNumber || !captcha,
    });

    const save = (values: any) => {
        if (!isSubmitting) {
            return;
        }
        const { avatar, name, primary_phone, ...custom_data } = values;
        update({
            id: userInfo.sub,
            object: {
                avatar: avatar[0]?.responseText ? JSON.parse(avatar[0]?.responseText || {}).Location : avatar[0]?.url,
                name: name,
                primary_phone: primary_phone,
                custom_data,
            }
        }).then(({ error }) => {
            if (error) {
                Taro.showToast({
                    title: '保存失败',
                    icon: 'none',
                });
            } else {
                Taro.showToast({
                    title: '保存成功',
                    icon: 'success',
                });
                Router.back();
            }
        });
    };

    const sendSmsCode = () => {
        if (!phoneNumber) {
            Taro.showToast({
                title: '请输入手机号',
                icon: 'none',
            });
            return;
        }
        if (!/^1[3-9]\d{9}$/.test(phoneNumber)) {
            Taro.showToast({
                title: '请输入正确的手机号',
                icon: 'none',
            });
            return;
        }

        insertSmsCode({
            object: {
                phone_number: phoneNumber,
            }
        }).then(({ error }) => {
            if (error) {
                Taro.showToast({
                    title: '发送失败',
                    icon: 'none',
                });
            } else {
                Taro.showToast({
                    title: '发送成功',
                    icon: 'success',
                });
                setIsCountDown(true);
            }
        });
    };

    const verifyCaptcha = () => {
        if (!captcha) {
            Taro.showToast({
                title: '请输入短信验证码',
                icon: 'none',
            });
            return;
        }
        if (smsCodeData?.sms_codes?.length === 0) {
            Taro.showToast({
                title: '验证码错误',
                icon: 'none',
            });
            return;
        }
        form.setFieldsValue({
            primary_phone: phoneNumber,
        });
        setBindPhoneVisible(false);
    };

    useEffect(() => {
        Taro.showLoading({
            title: '加载中',
        });

        fetchUserInfo().then((res) => {
            setUserInfo(res);
            form.setFieldsValue({
                ...res?.custom_data || {},
                primary_phone: res?.phone_number || '',
                name: res?.name || '',
                avatar: [{
                    url: res?.picture || '',
                    status: 'success',
                    type: 'image',
                }]
            });
            Taro.hideLoading();
        });
    }, []);

    return (
        <>
            <View className='flex flex-col gap-25px pt-80px px-40px'>
                <NutForm
                    form={form}
                    labelPosition='left'
                    onFinish={save}
                    className='s-form'
                >
                    <NutForm.Item
                        name='avatar'
                        label='头像'
                        className='s-form-item-end'
                    >
                        <NutUploader
                            accept={'image/*'}
                            url='https://s.manbingjiluben.com'
                        />
                    </NutForm.Item>
                    <NutForm.Item
                        name='name'
                        label='昵称'
                        rules={[{ required: true, message: '请输入昵称' }]}
                    >
                        <NutInput
                            placeholder='请输入昵称'
                            align='right'
                        />
                    </NutForm.Item>
                    <NutForm.Item
                        name='primary_phone'
                        label='手机号码'
                        rules={[{ required: true, message: '请绑定手机号码' }]}
                    >
                        <NutInput
                            placeholder='绑定手机号'
                            type='number'
                            maxLength={11}
                            align='right'
                            onClick={() => {
                                setPhoneNumber('');
                                setCaptcha('');
                                setIsCountDown(false);
                                setBindPhoneVisible(true);
                            }}
                        />
                    </NutForm.Item>
                    <TaroText className='text-30px c-primary'>个人信息</TaroText>
                    <NutForm.Item
                        name='realName'
                        label='姓名'
                    >
                        <NutInput
                            placeholder='请输入姓名'
                            align='right'
                        />
                    </NutForm.Item>
                    <NutForm.Item
                        name='gender'
                        label='性别'
                    >
                        <NutRadio.Group direction='horizontal' className='flex justify-end items-center gap-20px'>
                            <NutRadio value={1}>男</NutRadio>
                            <NutRadio value={2}>女</NutRadio>
                        </NutRadio.Group>
                    </NutForm.Item>
                    <NutForm.Item
                        name='age'
                        label='年龄'
                    >
                        <NutInput
                            placeholder='请输入年龄'
                            type='number'
                            align='right'
                        />
                    </NutForm.Item>
                    <NutForm.Item
                        name='height'
                        label='身高'
                    >
                        <NutInput
                            placeholder='身高 cm'
                            type='number'
                            align='right'
                        />
                    </NutForm.Item>
                    <NutForm.Item
                        name='weight'
                        label='体重'
                    >
                        <NutInput
                            placeholder='体重 kg'
                            type='number'
                            align='right'
                        />
                    </NutForm.Item>
                </NutForm>
                <View className='flex gap-30px mt-50px pb-60px'>
                    <SharpButton.Outline
                        onClick={() => {
                            Router.toMine({
                                type: NavigateType.redirectTo,
                            });
                        }}
                    >
                    取消
                    </SharpButton.Outline>
                    <SharpButton.Primary
                        onClick={() => {
                            setIsSubmitting(true);
                            form.submit();
                        }}
                    >
                    保存
                    </SharpButton.Primary>
                </View>
            </View>

            <NutDialog
                title='绑定手机号'
                visible={bindPhoneVisible}
                onConfirm={verifyCaptcha}
                onCancel={() => setBindPhoneVisible(false)}
            >
                <View className='mt-20px'>
                    <NutInput
                        placeholder='请输入手机号'
                        type='number'
                        maxLength={11}
                        value={phoneNumber}
                        onChange={(val) => setPhoneNumber(val)}
                    />
                </View>
                <View className='flex items-center'>
                    <NutInput
                        placeholder='请输入验证码'
                        value={captcha}
                        onChange={(val) => setCaptcha(val)}
                    />
                    {!isCountDown ? (
                        <NutButton
                            className='ml-20px'
                            size='small'
                            onClick={sendSmsCode}
                        >
                            获取验证码
                        </NutButton>
                    ) : (
                        <NutCountDown
                            remainingTime={60 * 1000}
                            format='ss 后重新获取'
                            onEnd={() => setIsCountDown(false)}
                        />
                    )}
                </View>
            </NutDialog>
        </>
    );
}

export default Index;
