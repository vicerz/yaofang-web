import { useLogto } from '@logto/react';
import mineBg from '@/assets/mine-bg.png';
import './index.scss';

function Index() {
    const { fetchUserInfo, isAuthenticated } = useLogto();
    const [userInfo, setUserInfo] = useState<any>({});

    const navigation = [
        {
            icon: 'alert',
            text: '用药提醒',
            url: '/pages/medication-reminder-list/index',
        },
        {
            icon: 'profile',
            text: '个人信息',
            url: '/pages/profile/index',
        },
        {
            icon: 'contact',
            text: '联系我们',
            url: '',
        },
        {
            icon: 'about',
            text: '关于我们',
            url: '/pages/about-us/index',
        },
    ];

    useEffect(() => {
        if (!isAuthenticated) {
            Router.toSignIn();
            return;
        }

        fetchUserInfo().then((res) => {
            setUserInfo(res);
        });
    }, []);

    return (
        <View>
            <View
                className='relative top-0 left-0 z--1 flex flex-col items-center gap-20px px-40px pt-60px pb-40px bg-no-repeat h-546px'
                style={{
                    backgroundImage: `url(${mineBg})`,
                    backgroundSize: '100% 100%',
                }}
            >
                <TaroImage className='w-180px h-180px rd-full' src={userInfo.picture} />
                <View className='flex items-center gap-10px'>
                    <TaroText className='text-30px'>{userInfo.name}</TaroText>
                    <TaroImage className='w-32px h-32px' src='../../assets/icons/edit.png' />
                </View>
            </View>
            <View className='flex flex-col px-40px mt--250px gap-100px'>
                <View className='flex justify-between'>
                    <View className='w-318px h-162px' onClick={() => Router.toGlucoseStandards()}>
                        <TaroImage src='../../assets/mine-card-1.png' className='w-full h-full' />
                    </View>
                    <View className='w-318px h-162px' onClick={() => Router.toCholesterolStandards()}>
                        <TaroImage src='../../assets/mine-card-2.png' className='w-full h-full' />
                    </View>
                </View>
                <View className='flex flex-col'>
                    {navigation.map((item, index) =>
                        <View
                            key={index}
                            className='flex items-center py-44px border-b-1px border-b-dashed border-b-#B3BAC5'
                            onClick={() => Router.navigate({ url: item.url })}
                        >
                            <TaroImage src={`../../assets/icons/${item.icon}.png`} className='w-42px h-42px' />
                            <TaroText className='text-30px fw-600 ml-20px'>{item.text}</TaroText>
                            <NutIconArrowSize8 className='ml-auto' />
                        </View>
                    )}
                </View>
            </View>
        </View>
    );
}

export default Index;
