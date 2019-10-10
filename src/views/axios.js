import Axios from 'axios'
import qs from 'qs'
import store from '../store'
// Add a request interceptor
Axios.interceptors.request.use(function(config) {
    // Do something before request is sent
    console.log(config, '请求拦截器')
        // 全局api添加token 

    // config.data.token = localStorage.getItem('info') ? JSON.parse(localStorage.getItem('info')).token : null
    // console.log(config.data)
    let data = qs.stringify(config.data)
    config.data = data
        // console.log(config)
    return config;
}, function(error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function(response) {
    // Do something with response data
    if (response.data.err === -999 || response.data.err === -998) {
        // token 没用 没有登录状态 模态框
        // store.commit('changeModel',true)

    }
    return response.data;
}, function(error) {
    // Do something with response error
    return Promise.reject(error);
});
export default Axios