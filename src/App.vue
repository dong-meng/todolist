<template>
  <div id="app">
    <div id="nav">
      <router-link active-class="active" to="/input">Input</router-link> |
      <router-link active-class="active" to="/login">注册/登陆</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less" scoped>
@import './style/index.less';
#app {
  .w(375);
  box-sizing: border-box;
  font-size: @fs-m;
}
#nav {
  width: 100%;
  .h(40);
  position: fixed;
  .top(10);
  display: flex;
  justify-content: center;
  .active{
    color: orangered;
  }
}
</style>
