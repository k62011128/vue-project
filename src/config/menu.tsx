import {
    HomeFilled,
    Location,
    Setting,
    Plus,
    DataLine,
    GoodsFilled,
    UserFilled
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
        path: '/introduce',
        name: 'introduce',
        label: '商品管理',
        icon: DataLine,
        url: ''
    },
    {
        path: '/addProduct',
        name: 'addProduct',
        label: '添加商品',
        icon: Plus,
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
    {
        path: '/clients',
        name: 'clients',
        label: '用户管理',
        icon: UserFilled,
        url: ''
    },
    {
        path: '/goods',
        name: 'goods',
        label: '商品图片',
        icon: GoodsFilled,
        url: ''
    },
]
export default menu
