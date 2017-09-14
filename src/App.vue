<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import reset from './css/reset.css'
export default {

}
</script>

<style>
body{
  background:url(../static/imgs/bg.jpg) no-repeat;
  background-size:cover;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: .2rem;
  width:100%;
  height:100%;
  
}
</style>
