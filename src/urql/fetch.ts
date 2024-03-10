import Taro from "@tarojs/taro";

export const fetch = (url: RequestInfo | URL, options: RequestInit): Promise<Response> => {
    options = options || {};
    return new Promise((resolve, reject) => {
        Taro.showLoading({
            title: '加载中...'
        });

        const headers = {};

        Taro.request({
            url: url.toString(),
            method: (options.method || 'GET') as keyof Taro.request.Method,
            data: options.body || {},
            header: options.headers || {},
            dataType: 'json',
            success: res => {
                const response = () => ({
                    ok: ((res.statusCode / 100) | 0) == 2, // 200-299
                    statusText: res.errMsg,
                    status: res.statusCode,
                    url: url,
                    text: () => Promise.resolve(JSON.stringify(res.data)),
                    json: () => Promise.resolve(res.data),
                    blob: () => Promise.resolve(new Blob([res.data])),
                    clone: response,
                    headers: {
                        keys: () => Object.keys(headers),
                        entries: () => Object.keys(headers).map((n) => [n, headers[n]]),
                        get: (n) => headers[n],
                        has: (n) => headers[n] != null,
                    },
                });
                resolve(response() as unknown as Response);
            },
            fail: err => {
                reject(err);
            },
            complete: () => {
                Taro.hideLoading();
            }
        });
    });
};
