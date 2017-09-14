import Vue from 'vue'
import question from "../src/views/question/index.vue"
import home from "../src/views/home/index.vue"

import VueRouter from 'vue-router'
//console.log(VueRouter)
Vue.use(VueRouter)

const routes=[
	{
		path:"/",
		redirect:"/home"
	},
	{
		path:"/home",
		component:home
	},
	{
		path:"/question",
		component:question
	}
]

let router=new VueRouter({
	routes
})


export default router
