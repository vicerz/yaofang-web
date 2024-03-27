
const SharpFixedNav: React.FC = () => {
    const [fixedNavVisible, setFixedNavVisible] = useState(false);
    const list = [
        {
            id: 'index',
            text: '首页',
            icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png',
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
        <NutDrag direction='y' className='drag' style={{ right: '0px', bottom: '20px' }}>
            <NutFixedNav
                list={list}
                inactiveText='快捷导航'
                visible={fixedNavVisible}
                onChange={(visible) => setFixedNavVisible(visible)}
                onSelect={handleSelect}
            />
        </NutDrag>
    );
};

export default SharpFixedNav;
