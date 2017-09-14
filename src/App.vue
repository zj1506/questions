<template>
  <div id="app">
    <router-link :to="{name:'index'}">首页</router-link>
    <router-link :to="{name:'list'}">列表页</router-link>
    <router-link :to="{name:'detail'}">详情页</router-link>
    <router-view></router-view>
    
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul{
  list-style:none;
  float:left;
}
</style>
