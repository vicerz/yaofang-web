
const SharpFixedNav: React.FC = () => {
    const list = [
        {
            id: 'index',
            text: '回首页',
        },
    ];

    const handleSelect = (item) => {
        Router.navigate({
            url: `/pages/${item.id}/index`,
        }, {
            type: NavigateType.redirectTo,
        });
    };

    return (
        <NutDrag direction='y' className='drag' style={{ right: '0px', bottom: '80px' }}>
            <View className='w-100px h-80px shadow-xl bg-primary pr-10px rd-l-full text-white text-26px flex items-center justify-end' onClick={() => handleSelect(list[0])}>
                {list[0].text}
            </View>
        </NutDrag>
    );
};

export default SharpFixedNav;
