import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/base.less'
import axios from './views/axios' //拦截器
import Axios from 'axios' //全局axios请求

Vue.prototype.$Axios = Axios
Vue.prototype.$axios = axios
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')