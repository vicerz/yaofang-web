import VConsole from 'vconsole';
import './index.scss';

function Index() {
    let vConsole;
    let count = 0;
    let timer;

    const enableVConsole = () => {
        // 连续点击5次开启vconsole
        clearTimeout(timer);
        timer = setTimeout(() => {
            count = 0;
        }, 1000);
        count++;
        if (count === 5) {
            vConsole = new VConsole();

            vConsole.show();
        }
    };

    return (
        <View className='flex flex-col gap-30px px-40px pt-80px'>
            <TaroText className='text-30px c-black fw-400' onClick={enableVConsole}>企业名称：曜方慢病记录本</TaroText>
            <TaroText className='text-30px c-black fw-400'>负责人：</TaroText>
            <TaroText className='text-30px c-black fw-400'>所在地：</TaroText>
        </View>
    );
}

export default Index;
