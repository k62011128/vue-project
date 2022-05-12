import {createRouter, createWebHashHistory} from 'vue-router'

const routes: any = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/page1',
        name: 'page1',
        component: () => import('@/views/OtherPage1.vue')
    }, {
        path: '/user',
        name: 'user',
        component: () => import('@/views/Home.vue')
    },
    {
        path: '/mall',
        name: 'mall',
        component: () => import('@/components/test.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/Login.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
