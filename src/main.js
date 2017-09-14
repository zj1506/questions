// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fontSet from './css/fontSet'
import axios from 'axios'
import Vuex from 'vuex'
// Vue.use(axios)
Vue.use(Vuex)

let store=new Vuex.Store({
	state:{
		question:null,
		selected_question:[]
	},
	mutations:{
		setdata:function(state,data){
			state.question=data
		},
		questions:function(state,type){
			//判断文理
			let arr=[]
			let {question}=state
			if(type=="like"){
				Object.values(question).forEach((val)=>{
					if(val.type !==1){
						arr.push(val)
					}
				})
			}
			if(type=='wenke'){
				Object.values(question).forEach((val)=>{
					if(val.type==1 || val.type==2){
						arr.push(val)
					}
				})
			}
			//重新赋值4个随机值
			state.selected_question=[...get4from(arr)]

			function get4from(arr){
				//console.log(arr)
				let tmp_arr=[]
				for(let i=0;i<4;i++){
					let tmp=arr[random(0,arr.length)];
					if(tmp_arr.indexOf(tmp)==-1){
						//console.log(tmp.title)
						tmp_arr[i]=tmp
					}else{
						i--
					}
				}
				//console.log(tmp_arr)
				return tmp_arr
			}


			function random(n,m){
				return Math.floor(Math.random()*(m-n))
			}
			
			
		}

	},
	actions:{
		getdata:function({commit},data){
			commit('setdata',data)
		}
	}
})


/* eslint-disable no-new */
Vue.prototype.$http=axios
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created (){
  	 console.log(this.$route)
  },
  mounted () {
  	this.$http.get('../static/service/question.json').then((data)=>{
		this.$store.dispatch("getdata",data.data) 
	})
  }


})
