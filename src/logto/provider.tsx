import { LogtoProvider as Provider, LogtoConfig, UserScope } from '@logto/react';

const config: LogtoConfig = {
    endpoint: process.env.TARO_APP_LOGTO_ENDPOINT!,
    appId: process.env.TARO_APP_LOGTO_APP_ID!,
    scopes: [UserScope.Phone, UserScope.CustomData, UserScope.Identities],
    resources: [process.env.TARO_APP_HASURA_ENDPOINT!],
};

const LogtoProvider = ({ children }) => {
    return (
        <Provider config={config}>
            { children }
        </Provider>
    );
};

export default LogtoProvider;
