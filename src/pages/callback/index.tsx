import { useHandleSignInCallback, useLogto } from '@logto/react';
import Taro from '@tarojs/taro';
import './index.scss';

function Index() {
    const { getAccessToken, error } = useLogto();
    const { isLoading } = useHandleSignInCallback(async () => {
        const token = await getAccessToken(process.env.TARO_APP_HASURA_ENDPOINT);
        Taro.setStorageSync('token', token);

        // Navigate to root path when finished
        Router.toIndex({
            type: NavigateType.redirectTo
        });
    });

    if (error) {
        return <View className='w-full mt-80px flex justify-center'>登录失败 { error.message }</View>;
    }

    if (isLoading) {
        return <View className='w-full mt-80px flex justify-center'>正在跳转...</View>;
    }
}

export default Index;
