import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home'
import q1 from '../views/q1'
import result from '../views/result'

Vue.use(Router)

let router=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
    	path:'/q1/:step',
    	name:'q1',
    	component:q1
    },
    {
      path: '/result',
      name: 'result',
      component: result
    }
  ]
})

export default router;
