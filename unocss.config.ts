import { defineConfig } from 'unocss';

import { presetWeapp } from 'unocss-preset-weapp';
import { transformerClass, transformerAttributify } from 'unocss-preset-weapp/transformer';

const isApplet = process.env.TARO_ENV !== 'h5' ?? false;

const transformRules = {
    '.': '-d111-',
    '/': '-s111-',
    ':': '-c111-',
    '%': '-p111-',
    '!': '-e111-',
    '#': '-w111-',
    '(': '-b111l-',
    ')': '-b111r-',
    '[': '-f111l-',
    ']': '-f111r-',
    '$': '-r111-',
    ',': '-r222-',
};

export default defineConfig({
    presets: [
        presetWeapp({
            platform: 'taro',
            transform: true,
            designWidth: 750,
            deviceRatio: {
                640: 2.34 / 2,
                750: 1,
                828: 1.81 / 2,
                375: 2 / 1
            },
            taroWebpack: 'webpack5',
            transformRules,
            isH5: !isApplet,
        }) as any,
    ],
    transformers: [
        transformerClass({
            transformRules,
        }) as any,
        transformerAttributify({
            transformRules,
        }),
    ],
    theme: {
        colors: {
            primary: '#EC6400',
            npblack: '#333333',
            npgrey: '#1A1D25',
            nplightgrey: '#B3BAC5',
        },
    },
    rules: [
        [/^i-p-(\w+)$/, ([, w]) => ({ padding: `${w} !important` })],
    ]
});
