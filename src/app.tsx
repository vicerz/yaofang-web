import { useEffect } from 'react';
import 'uno.css';

import UrqlProvider from './urql/provider';
import LogtoProvider from './logto/provider';

// 全局样式
import './app.scss';

function App(props) {
    // 可以使用所有的 React Hooks
    useEffect(() => {
    });
    // 对应 onShow
    useDidShow(() => {
        window.history.replaceState(null, '', window.location.href);
    });

    // 对应 onHide
    useDidHide(() => { });

    return (
        <UrqlProvider>
            <LogtoProvider>
                {props.children}
            </LogtoProvider>
        </UrqlProvider>
    );
}

export default App;
