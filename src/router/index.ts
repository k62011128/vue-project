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
        component: () => import('@/components/todolist/ToDoList.vue')
    }, {
        path: '/addProduct',
        name: 'addProduct',
        component: () => import('@/views/AddProduct.vue')
    },
    {
        path: '/introduce',
        name: 'introduce',
        component: () => import('@/views/Introduce.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/Login.vue')
    },
    {
        path: '/clients',
        name: 'clients',
        component: () => import('@/views/Client.vue')
    },
    {
        path: '/goods',
        name: 'goods',
        component: () => import('@/views/GoodsPictures.vue')
    },
    {
        path: '/carousel',
        name: 'carousel',
        component: () => import('@/views/Carousel.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
