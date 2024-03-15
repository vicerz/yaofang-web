export default defineAppConfig({
    pages: [
        'pages/index/index',
        'pages/statistic/index',
        'pages/mine/index',
        'pages/medical-report-detail/index',
        'pages/medical-report-list/index',
        'pages/medication-alert/index',
        'pages/profile/index',
        'pages/glucose-statistics/index',
        'pages/sign-in/index',
        'pages/callback/index',
        'pages/glucose-record/index',
        'pages/glucose-record-detail/index',
        'pages/cholesterol-record/index',
        'pages/cholesterol-record-detail/index',
        'pages/lab-report-record/index',
        'pages/lab-report-detail/index',
        'pages/medical-report-record/index',
        'pages/glucose-record-list/index',
        'pages/cholesterol-statistics/index',
        'pages/cholesterol-record-list/index',
        'pages/lab-report-list/index',
        'pages/glucose-standards/index',
        'pages/cholesterol-standards/index',
        'pages/profile/index',
        'pages/about-us/index'
    ],
    window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#fff',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black'
    },
    tabBar: {
        color: '#B3BAC5',
        selectedColor: '#EC6400',
        backgroundColor: '#ffffff',
        borderStyle: 'white',
        list: [
            {
                pagePath: 'pages/index/index',
                text: '记录',
                iconPath: 'assets/tab-bar/record.png',
                selectedIconPath: 'assets/tab-bar/record-active.png'
            },
            {
                pagePath: 'pages/statistic/index',
                text: '统计',
                iconPath: 'assets/tab-bar/statistic.png',
                selectedIconPath: 'assets/tab-bar/statistic-active.png'
            },
            {
                pagePath: 'pages/mine/index',
                text: '我的',
                iconPath: 'assets/tab-bar/mine.png',
                selectedIconPath: 'assets/tab-bar/mine-active.png'
            }
        ]
    }
});
