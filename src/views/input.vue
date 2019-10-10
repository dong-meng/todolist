<template>
  <div class="box">
    <form class="head">
      <input type="text" placeholder="请输入事件..." v-model="input"> 
      <div @touchend="add" class="add">添加</div>
    </form>
    <div class="input-table">
      <ul class="input-box">
        <li v-for="(item,index) in updateList" :key="index">
          <p>{{item.matter}}</p>
          <span @touchend="tog(item)">{{item.state? '已完成':'待完成'}}</span>
          <span @touchend="del(item)">删除</span>
        </li>
      </ul>
    </div>

    <div class="foot">
      <p @touchend="finish(1)">已完成</p>
      <p @touchend="finish(-1)">未完成</p>
      <p @touchend="finish(0)">全部</p>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import qs from 'qs'
import {mapMutations,mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return {
      input:'',
      list:[],
    }
  },
  computed:{
    ...mapGetters(['updateList']), //直接获得 vuex 的list
  },
  methods:{
    ...mapActions(['getList']),
    add(){
      //添加操作
      let url='/suiyi/v1/matter/add'
      Axios({
       method: 'post',
       url: url,
       data: {
          token: window.localStorage.getItem("token"),
          uid: window.localStorage.getItem("_id"),
          matter: this.input,
          },
       }).then((data)=>{
         console.log(data.msg)
         if(data.err===0){
          this.getList()
         }else{
           alert(data.msg)
         }
       })
    },
    //删除操作
    del(item){
      let url='/suiyi/v1/matter/del'
      Axios({
       method: 'post',
       url: url,
       data: {
          token: window.localStorage.getItem("token"),
          _id:item._id
           },
       }).then((data)=>{
          console.log(data.msg)
          this.getList()
       })
    },
    tog(item){
      //改变是否完成
      let url='/suiyi/v1/matter/update'
      Axios({
        method:'post',
        url:url,
        data:{
          token:window.localStorage.getItem('token'),
          _id:item._id,
        }
      }).then((data)=>{
        console.log(data.msg)
        if(data.err==0){
          this.getList()
        }else{
          alert('网络信号差或内部错误!请重试或反馈客服')
        }
      })
    },
    //查看是否完成的项
    finish(type){
      this.$store.state.type=type
    }
  },
  created(){
    this.getList()
  }
}
</script>
<style lang="less" scoped>
@import '../style/index.less';
.box{
  width: 100%;
  .head{
  .h(40);
    width: 100%;
    text-align: center;
    position: fixed;
    .top(50);
    >input{
      height: 100%;
      .w(240);
      text-indent: 20px;
      .margin(0,10);
    }
    >div{
      display: inline-block;
      .w(70);
      height: 100%;
      background: olivedrab;
      border-radius: 50%;
      line-height: 40px;
    }
  }

  .input-table{
    font-size: @fs-l;
    position: absolute;
    overflow: auto;
    .top(110);
    .bottom(40);
    .w(375);
    ul{
      width: 100%;
      box-sizing: border-box;
      .padding(0,10);
      >li{
        width: 100%;
        .h(40);
        line-height: 40px;
        .margin(5,0);
        border: 1px solid saddlebrown;
        p{
          .w(200);
          height: 100%;
          text-indent: 10px;
          margin-right:10px;
          display: inline-block;
        }
        span{
          .w(70);
          height: 100%;
          display: inline-block;
          // .margin(0,5);
        }
      } 
    }
  }
.foot{
  width: 100%;
  .h(40);
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  .bottom(0);
  p{
    flex: 1;
    text-align: center;
    line-height: 40px;
    background: orchid;
  }
}
}
</style>
