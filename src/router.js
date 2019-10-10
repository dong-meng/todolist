import Vue from 'vue'
import Router from 'vue-router'
import Input from './views/input.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/input',
            name: 'input',
            component: Input,
            // beforeEnter(to, from, next) {
            //     console.log('路由独享守卫')
            //     console.log('to', to)
            //     console.log(from)
            //     next()
            // }
        },
        {
            path: '/login',
            name: 'Login',
            component: () =>
                import ( /* webpackChunkName: "login" */ './views/login.vue')
        }
    ]
})
router.beforeResolve((to, from, next) => {
    console.log('全局解析守卫')
    console.log('to', to)
    console.log('from', from)
    next()
})
export default router