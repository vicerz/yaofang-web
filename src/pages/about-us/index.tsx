import './index.scss';

function Index() {
    return (
        <View className='flex flex-col gap-30px px-40px pt-80px'>
            <TaroText className='text-30px c-black fw-400'>企业名称：曜方慢病记录本</TaroText>
            <TaroText className='text-30px c-black fw-400'>负责人：</TaroText>
            <TaroText className='text-30px c-black fw-400'>所在地：</TaroText>
        </View>
    );
}

export default Index;
