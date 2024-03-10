import path from 'path';
import UnoCSS from 'unocss/webpack';
import AutoImport from 'unplugin-auto-import/webpack';

const NutUIResolver = () => {
    return (name) => {
        if (name === 'NutIconFont') {
            return {
                name: 'IconFont',
                from: '@nutui/icons-react-taro',
            };
        } else if (name.startsWith('NutIcon')) {
            const partialName = name.slice(7);
            return {
                name: partialName,
                from: '@nutui/icons-react-taro',
            };
        } else if (name.startsWith('Nut')) {
            const partialName = name.slice(3);
            return {
                name: partialName,
                from: '@nutui/nutui-react-taro',
                sideEffects: `@nutui/nutui-react-taro/dist/esm/${partialName}/style`
            };
        }
    };
};

const TaroComponentResolver = () => {
    return (name) => {
        const taroComponents = ['Block', 'CoverImage', 'CoverView', 'GridView', 'ListView', 'MatchMedia', 'MovableArea', 'MovableView', 'PageContainer', 'RootPortal', 'ScrollView', 'ShareElement', 'StickyHeader', 'StickySection', 'Swiper', 'SwiperItem', 'View', 'Icon', 'Progress', 'RichText', 'TaroText', 'Button', 'Checkbox', 'CheckboxGroup', 'Editor', 'Form', 'Input', 'KeyboardAccessory', 'Label', 'Picker', 'PickerView', 'PickerViewColumn', 'Radio', 'RadioGroup', 'Slider', 'Switch', 'Textarea', 'FunctionalPageNavigator', 'Navigator', 'NavigationBar', 'Tabbar', 'TabbarItem', 'Audio', 'Camera', 'ChannelLive', 'ChannelVideo', 'TaroImage', 'LivePlayer', 'LivePusher', 'Video', 'VoipRoom', 'Lottie', 'TaroMap', 'Canvas', 'Ad', 'AdCustom', 'OfficialAccount', 'OpenData', 'WebView', 'PageMeta', 'CustomWrapper', 'Slot', 'NativeSlot'];
        if (taroComponents.includes(name)) {
            if (name.startsWith('Taro')) {
                return {
                    name: name.replace('Taro', ''),
                    from: '@tarojs/components',
                    as: name,
                };
            } else {
                return {
                    name,
                    from: '@tarojs/components',
                };
            }
        }
    };
};

const webpackChain = (chain) => {
    chain.plugin('unocss').use(UnoCSS());
    chain.plugin('auto-import').use(AutoImport({
        resolvers: [
            TaroComponentResolver(),
            NutUIResolver(),
        ],
        imports: [
            'react',
            {
                'urql': ['useQuery', 'useMutation', 'useSubscription'],
                '@tarojs/taro': [
                    'useDidHide', 'useDidShow', 'usePullDownRefresh', 'useReachBottom', 'usePageScroll', 'useResize', 'useShareAppMessage', 'useTabItemTap', 'useTitleClick', 'useOptionMenuClick', 'usePullIntercept', 'useReady', 'useNavigationBarButtonTap', 'useNavigationBarSearchInputChanged', 'useNavigationBarSearchInputConfirmed', 'useNavigationBarSearchInputClicked', 'useShareTimeline', 'useAddToFavorites', 'useAppShow', 'useAppHide', 'useError', 'useUnhandledRejection', 'useThemeChange', 'useKeyboard',
                ],
                'taro-hooks': ['useAuthorize'],
                'tarojs-router-next': ['Router', 'NavigateType'],
                '@/graphql': ['graphql', 'useFragment'],
            },
            {
                from: '@/graphql',
                imports: ['FragmentType'],
                type: true,
            }
        ],
        dirs: [
            './src/components',
            './src/components/**',
            './src/hooks',
            './src/hooks/**',
        ],
        dts: './auto-imports.d.ts',
        eslintrc: {
            enabled: true,
            filepath: './.eslintrc-auto-import.json',
            globalsPropValue: 'readonly'
        }
    }));
};

const config = {
    projectName: 'chronic-disease-logbook-h5',
    date: '2024-2-24',
    designWidth: 750,
    deviceRatio: {
        640: 2.34 / 2,
        750: 1,
        828: 1.81 / 2,
        375: 2 / 1
    },
    sourceRoot: 'src',
    outputRoot: 'dist',
    alias: {
        '@/components': path.resolve(__dirname, '..', 'src/components'),
        '@/assets': path.resolve(__dirname, '..', 'src/assets'),
        '@/graphql': path.resolve(__dirname, '..', 'src/graphql'),
    },
    plugins: [
        '@tarojs/plugin-html',
        '@taro-hooks/plugin-react',
        'tarojs-router-next-plugin',
    ],
    defineConstants: {
    },
    copy: {
        patterns: [
            { from: 'src/assets', to: 'dist/assets' },
        ],
        options: {
        }
    },
    framework: 'react',
    compiler: {
        type: 'webpack5',
        prebundle: { enable: false }
    },
    sass:{
        data: `@import "@nutui/nutui-react-taro/dist/styles/variables.scss";`
    },
    mini: {
        miniCssExtractPluginOption: {
            ignoreOrder: true,
        },
        postcss: {
            pxtransform: {
                enable: true,
                config: {
                    selectorBlackList: ['nut-']
                }
            },
            url: {
                enable: true,
                config: {
                    limit: 1024 // 设定转换尺寸上限
                }
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        },
        webpackChain,
    },
    h5: {
        publicPath: '/',
        staticDirectory: 'static',
        // esnextModules: ['nutui-react'],
        optimizeMainPackage: {
            enable: true,
        },
        router: {
            mode: 'browser',
        },
        postcss: {
            pxtransform: {
                enable: true,
                config: {
                    selectorBlackList: ['nut-']
                }
            },
            autoprefixer: {
                enable: true,
                config: {
                }
            },
            cssModules: {
                enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
                config: {
                    namingPattern: 'module', // 转换模式，取值为 global/module
                    generateScopedName: '[name]__[local]___[hash:base64:5]'
                }
            }
        },
        webpackChain,
    }
};

module.exports = function (merge) {
    if (process.env.NODE_ENV === 'development') {
        return merge({}, config, require('./dev'));
    }
    return merge({}, config, require('./prod'));
};
