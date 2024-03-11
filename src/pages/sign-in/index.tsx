import { useLogto } from '@logto/react';
import './index.scss';

function Index() {
    const { signIn } = useLogto();

    useDidShow(() => {
        signIn(`${window.location.origin}/pages/callback/index`);
    });

    return <View className='w-full mt-80px flex justify-center'>正在跳转...</View>;
}

export default Index;
