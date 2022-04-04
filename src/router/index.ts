import {createRouter, createWebHashHistory} from 'vue-router'

const routes: any = [
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
        component: () => import('@/components/todolist/ToDoList.vue')
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router
