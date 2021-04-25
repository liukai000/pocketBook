import {createRouter, createWebHistory} from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/client/index.vue')
    },
    {
        path: '/manage/index',
        name: 'index',
        component: () => import('../views/layout/index.vue')
    }
]
export default createRouter({
    history: createWebHistory('/'),
    routes
})