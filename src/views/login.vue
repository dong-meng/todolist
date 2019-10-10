<template>
    <div class="login" >
        <div class="head">
            <p @touchstart='login' >登陆</p>
            <p @touchend='reg' >注册</p>
        </div>
        <form action=""  method="GET">
            <p>账号:</p>
            <input type="text" placeholder="请输入账号..."  v-model="usename"><br/>
            <p>密码:</p>
            <input type="password" placeholder="请输入密码..." v-model="password"><br>
            <p>验证码:</p>
            <input type="text" placeholder="请输入验证码..."  v-model="incode">

            <!-- <button @touchend="mail">獲取驗證碼</button> -->
            <button @touchend='but("login")' v-if="flag">登陆</button>
            <button @touchend='but("reg")' v-else="" class="reg">注册</button>
        </form>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import Axios from 'axios'
import qs from 'qs'
export default {
    data(){
        return{
            usename : '',
            password : '',
            incode : '',
            flag : true,
        } 
    },   
    methods:{
        login(){
            this.flag=true
        },
        reg(){
            this.flag=false
        },
        but(msg){
            //obj 和请求的数据进行对比
            if(msg=='login'){
                let url ='/suiyi/v1/user/login'
                Axios({
                    method: 'post',
                    url: url,
                    data: {
                        us: this.usename,
                        ps: this.password
                        },
                    }).then((data)=>{
                        console.log(data.msg)
                        if(data.err==0){
                        localStorage.setItem("token",data.info.token)
                        localStorage.setItem("_id",data.info._id)
                        localStorage.setItem("info",data.info)
                        alert('登陆成功')
                        this.$router.push('/')
                        }else{
                            alert('信息有误')
                        }
                    })
            }
            if(msg=='reg'){
                let url ='/suiyi/v1/user/reg'
                Axios({
                    method: 'post',
                    url: url,
                    data: {
                        us: this.usename,
                        ps: this.password,
                        },
                    }).then((data)=>{
                        console.log(data.msg)
                        if(data.err==0){
                            setCookie(this.usename,this.usename)
                            alert('恭喜注册成功')
                            this.flag=true 
                        }else{
                            alert('账户已被占用,请另外输入')
                        }
                    })
            }
        }
    },
}
</script>

<style lang="less" scoped>
@import '../style/index.less';
.login{
    .w(375);
    font-size: @fs-l;
    position: absolute;
    .top(50);
    box-sizing: border-box;
    padding: 15px;
    .head{
        display: flex;
        justify-content: center;
        >p{
            .w(60);
            .margin(0,10);
            background: olive;
            border-radius: 10px;
            text-align: center;
        }
    }
    form{
        >input{
        width: 100%;
        .h(40);
        text-indent: 10px;
        .margin(20,0);
        }
        div{
            span{
                float:right;
            }
        }
    button{
        .w(70);
        .h(60);
        border-radius: 50%;
        margin-top: 20px;
        }
        .reg{
            background: orange;
        }
    }
}
</style>


