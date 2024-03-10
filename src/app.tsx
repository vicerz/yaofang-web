import { useEffect } from 'react';
import { useDidShow, useDidHide } from '@tarojs/taro';
import 'uno.css';

import UrqlProvider from './urql/provider';
import LogtoProvider from './logto/provider';

// 全局样式
import './app.scss';

function App(props) {
    // 可以使用所有的 React Hooks
    useEffect(() => {
        // sigIn();
    });
    // 对应 onShow
    useDidShow(() => {});

    // 对应 onHide
    useDidHide(() => { });

    return (
        <LogtoProvider>
            <UrqlProvider>
                {props.children}
            </UrqlProvider>
        </LogtoProvider>
    );
}

export default App;
