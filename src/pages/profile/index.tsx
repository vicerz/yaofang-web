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

function Index() {
    const [form] = NutForm.useForm();
    const { fetchUserInfo } = useLogto();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [userInfo, setUserInfo] = useState<any>({});
    const [,update] = useMutation(UpdateUserInfoMutationDocument);

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
                Router.toMine({
                    type: NavigateType.redirectTo,
                });
            }
        });
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
                >
                    <NutInput
                        placeholder='请输入昵称'
                        align='right'
                    />
                </NutForm.Item>
                <NutForm.Item
                    name='primary_phone'
                    label='手机号码'
                >
                    <NutInput
                        placeholder='请输入手机号'
                        type='number'
                        maxLength={11}
                        align='right'
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
    );
}

export default Index;
