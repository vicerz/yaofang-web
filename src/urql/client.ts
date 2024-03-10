import { Client, cacheExchange, fetchExchange, mapExchange } from 'urql';
import { authExchange, AuthUtilities } from '@urql/exchange-auth';
import Taro from '@tarojs/taro';
import { fetch } from './fetch';

const client = new Client({
    url: `${process.env.TARO_APP_HASURA_ENDPOINT}/v1/graphql`,
    exchanges: [
        cacheExchange,
        mapExchange({
            onError(error, operation) {
                if (error.graphQLErrors.length > 0) {
                    if (
                        error.graphQLErrors.some(
                            e => e.extensions?.code === 'access-denied'
                        )
                    ){
                        return Taro.showModal({
                            title: '提示',
                            content: '您还未登录，请先登录',
                            showCancel: false,
                            confirmText: '去登录',
                            confirmColor: '#EC6400',
                            success: () => {
                                Taro.clearStorageSync();
                                Taro.navigateTo({
                                    url: '/pages/sign-in/index'
                                });
                            }
                        });
                    }
                }
                Taro.showToast({
                    title: error.message,
                    icon: 'none',
                });
            }
        }),
        authExchange(async (utils: AuthUtilities) => {
            return {
                addAuthToOperation(operation) {
                    const token = Taro.getStorageSync('token');
                    // if (!token) return operation;

                    return utils.appendHeaders(operation, {
                        Authorization: `Bearer ${token}`,
                        'Expected-Role': !!token ? 'user' : 'anonymous',
                    });
                },
                didAuthError(error) {
                    return error.graphQLErrors.some(e => e.extensions?.code === 'access-denied');
                },
                async refreshAuth() {

                },
            };
        }),
        fetchExchange,
    ],
    fetch,
    fetchOptions: {
        headers: {}
    }
});


export default client;
