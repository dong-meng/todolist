import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import qs from 'qs'
Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        list: [],
        flag: true,
        _id: '',
        type: 0,
    },
    getters: {
        updateList(state) {
            let list = state.list
            let data = []
            switch (state.type) {
                case 0:
                    data = list
                    break;
                case 1:
                    data = list.filter((item) => {
                        return item.state
                    })
                    break;
                case -1:
                    data = list.filter((item) => {
                        return !item.state
                    })
                default:
                    break;
            }
            return data
        }
    },
    mutations: {
        togFlag(state) {
            state.flag = !state.flag
        },
        getlist(state, params) {
            state.list = params
        }
    },
    actions: {
        getList({ commit }) {
            let url = '/suiyi/v1/matter/get'
            Axios({
                method: 'post',
                url: url,
                data: {
                    token: window.localStorage.getItem('token'),
                    uid: window.localStorage.getItem("_id"),
                }
            }).then((data) => {
                if (data.err === 0) {
                    commit('getlist', data.list)
                } else {
                    alert(data.msg)
                }
            })
        }
    }
})