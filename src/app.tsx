import { useEffect } from 'react';
import VConsole from 'vconsole';

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
        const isIOS= !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isIOS) {
            // window.history.pushState({}, "title", "");
            window.history.scrollRestoration ='manual';
        }

        const enableVConsole = window.location.search.includes('vn');
        if (enableVConsole) {
            const vConsole = new VConsole();

            vConsole.show();
        }
    });

    // 对应 onHide
    useDidHide(() => { });

    return (
        <>
            <UrqlProvider>
                <LogtoProvider>
                    {props.children}
                </LogtoProvider>
            </UrqlProvider>
        </>
    );
}

export default App;
