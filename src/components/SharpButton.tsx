interface SharpButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
}

const OutlineButton: React.FC<SharpButtonProps> = ({ children, onClick }) => {
    return (
        <NutButton
            className='flex-1'
            fill='outline'
            size='large'
            style={{
                '--nutui-button-default-border-color': '#B3BAC5',
                '--nutui-button-border-radius': '10px',
            }}
            onClick={onClick}
        >{children}</NutButton>
    );
};

const PrimaryButton: React.FC<SharpButtonProps> = ({ children, onClick }) => {
    return (
        <NutButton
            className='flex-1'
            size='large'
            type='primary'
            style={{
                '--nutui-button-border-radius': '10px',
                background: '#EC6400'
            }}
            onClick={onClick}
        >{children}</NutButton>
    );
};

export const SharpButton = {
    Outline: OutlineButton,
    Primary: PrimaryButton,
};
