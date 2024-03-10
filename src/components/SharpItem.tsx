interface SharpItemProps {
    title: string;
    children: React.ReactNode;
}

const SharpItem: React.FC<SharpItemProps> = (props) => {
    return (
        <View className='flex flex-col py-20px px-10px border-b-1px border-b-dashed border-b-#B3BAC5'>
            <View className='flex gap-20px items-center'>
                <View className='w-8px h-30px bg-primary rd-40px'></View>
                <TaroText className='text-30px fw-400 c-#999999'>{props.title}</TaroText>
            </View>
            <View className='px-30px'>
                {props.children}
            </View>
        </View>
    );
};

export default SharpItem;
