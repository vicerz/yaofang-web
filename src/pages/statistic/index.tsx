import statisticBg1 from '@/assets/statistic-bg1.png';
import statisticBg2 from '@/assets/statistic-bg2.png';
import statisticBg3 from '@/assets/statistic-bg3.png';
import statisticBg4 from '@/assets/statistic-bg4.png';

import './index.scss';

function Index() {
    return (
        <View className='flex flex-col px-40px gap-38px pt-60px'>
            <View
                className='relative h-220px bg-contain bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url(${statisticBg1})`,
                }}
                onClick={() => Router.toGlucoseStatistics()}
            >
                <View className='absolute top-60px left-115px flex flex-col gap-10px'>
                    <TaroText className='text-34px fw-600 text-white'>血糖统计</TaroText>
                    <TaroText className='text-24px fw-400 text-white'>查看血糖统计情况</TaroText>
                </View>
            </View>
            <View
                className='relative h-220px bg-contain bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url(${statisticBg2})`,
                }}
                onClick={() => Router.toCholesterolStatistics()}
            >
                <View className='absolute top-60px left-115px flex flex-col gap-10px'>
                    <TaroText className='text-34px fw-600 text-white'>血压统计</TaroText>
                    <TaroText className='text-24px fw-400 text-white'>查看血压统计情况</TaroText>
                </View>
            </View>
            <View
                className='relative h-220px bg-contain bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url(${statisticBg3})`,
                }}
            >
                <View className='absolute top-60px left-115px flex flex-col gap-10px'>
                    <TaroText className='text-34px fw-600 text-white'>化验报告管理</TaroText>
                    <TaroText className='text-24px fw-400 text-white'>查看化验报告照片</TaroText>
                </View>
            </View>
            <View
                className='relative h-220px bg-contain bg-center bg-no-repeat'
                style={{
                    backgroundImage: `url(${statisticBg4})`,
                }}
            >
                <View className='absolute top-60px left-115px flex flex-col gap-10px'>
                    <TaroText className='text-34px fw-600 text-white'>体检报告管理</TaroText>
                    <TaroText className='text-24px fw-400 text-white'>查看体检报告照片</TaroText>
                </View>
            </View>
        </View>
    );
}

export default Index;
