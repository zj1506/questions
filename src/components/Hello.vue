<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <router-link :to="{name:'index'}">首页</router-link>
    <router-link :to="{name:'list'}">列表页</router-link>
    <router-link :to="{name:'detail'}">详情页</router-link>
    <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
