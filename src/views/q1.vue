<template>
	<div class="q1">
		<div class="box">
			<div class="title">化学题  第1题/共4题</div>
			<div class="con">
				<p>
					{{question_name}}
				</p>
			</div>		
			<div class="xia">
				<ul>
					<li @click="changebg(0)" :class="{bg:arr[0]}"><b class="a"></b><span>{{an1}}</span></li>
					<li @click="changebg(1)" :class="{bg:arr[1]}"><b class="b"></b><span>{{an2}}</span></li>
					<li @click="changebg(2)" :class="{bg:arr[2]}"><b class="c"></b><span>{{an3}}</span></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        isbg: null,
        arr: [false, false, false],
        data:null,
        question_name:"",
        an1:"",
        an2:"",
        an3:""
      }
    },
    watch:{
    	'$route':function(n,o){
	    	let step=this.$route.params.step*1//获取路由参数
	    	console.log(this.$store.state.selected_question[step-1])
    		let {title,answers}=this.$store.state.selected_question[step-1]
		    this.question_name=title
		    this.an1=answers[0]
		    this.an2=answers[1]
		    this.an3=answers[2]
    	}
    },
    methods: {
      changebg (i) {
        this.arr = [false, false, false]
        this.arr[i] = true
        //更换路由
       	
       	if(this.$route.params.step*1<4){      		
       		setTimeout(()=>{
       			this.arr = [false, false, false]
       			this.$router.push("/q1/"+(this.$route.params.step*1+1))
       		},1000)
       		
       	}else{
       		setTimeout(()=>{
       			this.$router.push("/result")
       		},1000)
       		
       	}
     	
      }
    },
    created (){

    	if(this.$route.query.type==1){//根据路由参数设置文理
    		this.data=this.$store.commit('questions','like')
    	}
    	if(this.$route.query.type==0){
    		this.data=this.$store.commit('questions','wenke')
    	}
    	let step=this.$route.params.step*1
    	//获取路由参数
		   let {title,answers}=this.$store.state.selected_question[step-1]
		    this.question_name=title
		    this.an1=answers[0]
		    this.an2=answers[1]
		    this.an3=answers[2]
    }
    
  }
</script>

<style>
	.q1{
		width:100%;
		height:100%;
	}
	.box{
		width:90%;
		margin:0 auto;
		overflow: hidden;
	}
	.title{
		width:100%;
		height:1rem;
		background: url(../../static/imgs/bg-qustion-top.png) no-repeat;
		background-size:100%;
		margin-top:0.4rem;
		text-align: center;
		color:forestgreen;
		line-height:0.6rem;
	}
	.con{
		width:100%;
		height:auto;
		background: url(../../static/imgs/bg-question-center.png) no-repeat;
		background-size:100% 100%;
	}
	.con p{
		width:80%;
		margin:0 auto;
		font-size:0.28rem;
		padding:0.2rem 0;
	}
	.xia{
		width:100%;
		min-height:8.5rem;
		background: url(../../static/imgs/bg-question-bottom.png) no-repeat;
		background-size:100% 100%;
		overflow: hidden;
	}
	.xia ul{
		width:90%;
		height:100%;
		margin:0 auto;
	}
	.xia ul li{
		list-style: none;
		width:100%;
		min-height:1rem;
		margin-top:0.4rem;
		line-height:1rem;
		color:white;
		display: flex;
		align-items: center;
		background: url(../../static/imgs/btn-bg-select.png) no-repeat;
		background-size:100%;
	}
	.xia ul li b{
		display: inline-block;
		width:1rem;
		height:1rem;
		
	}
	.xia ul li.bg{
		background-position: 0 -1rem;
	}
	.a{
		background: url(../../static/imgs/a.png) no-repeat;
		background-position:center center;
		background-size:70%;
	}
	.c{
		background: url(../../static/imgs/c.png) no-repeat;
		background-position:center center;
		background-size:70%;
	}
	.b{
		background: url(../../static/imgs/b.png) no-repeat;
		background-position:center center;
		background-size:70%;
	}
</style>