import Axios from 'axios'
import qs from 'qs'
export const Add = (list, input) => {
        //添加操作
        let url = '/suiyi/v1/matter/add'
        console.log(input)
        Axios({
            method: 'post',
            url: url,
            data: qs.stringify({
                token: window.localStorage.getItem("token"),
                matter: input,
                uid: '',
                flag: false,
                del: '删除',
            }),
        }).then((data) => {
            console.log(123)
            console.log(data)
        })
        let obj = { matter: input, flag: false, del: "删除" }
        list.push(obj)
    }
    //删除操作
export const Del = (item, index) => {
        let url = '/suiyi/v1/matter/del'
        Axios({
                method: 'post',
                url: url,
                data: {
                    token: window.localStorage.getItem("token"),
                    uid: item.i,
                },
            }).then((data) => {
                console.log(data)
            })
            // this.list.splice(index, 1)
    }
    //查看已完成的项
export const cg = (list) => {
    let arr = []
    for (let i = 0; i < list.length; i++) {
        if (list[i].flag === false) {
            arr.push(list[i])
        }
    }
    if (arr) {
        list = arr
    }
}