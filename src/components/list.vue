<template>
  <div class="hello">
    <h1>列表页</h1>
    <ul>
      <li><router-link :to="{name:'list',params:{id:1}}">列表1</router-link></li>
      <li><router-link :to="{name:'list',params:{id:2}}">列表2</router-link></li>
      <li><router-link :to="{name:'list',params:{id:3}}">列表3</router-link></li>
      <li><router-link :to="{name:'list',params:{id:4}}">列表4</router-link></li>
    </ul>
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


</style>
