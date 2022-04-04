import {
    HomeFilled,
    VideoPlay,
    User,
    Location,
    Setting
} from '@element-plus/icons-vue'

const menu: any = [
    {
        path: '/home',
        name: 'home',
        label: '首页',
        icon: HomeFilled,
        url: ''
    },
    {
        path: '/mall',
        name: 'mall',
        label: '商品管理',
        icon: VideoPlay,
        url: ''
    },
    {
        path: '/user',
        name: 'user',
        label: '用户管理',
        icon: User,
        url: ''
    },
    {
        path: '/other',
        name: 'other',
        label: '其他',
        icon: Location,
        children: [
            {
                path: '/page1',
                name: 'page1',
                label: '页面1',
                icon: Setting,
                url: ''
            },
            {
                path: '/page2',
                name: 'page2',
                label: '页面2',
                icon: Setting,
                url: ''
            }
        ]
    },
]
export default menu
