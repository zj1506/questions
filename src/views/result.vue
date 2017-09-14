<template>
	<div class="data">
		<h1>{{one.name}}</h1>
		<p class="p1"><b>主修专业:</b>{{one.character}}</p>
    <p class="p2"><b>课程特色:</b>{{one.shareTxt}}</p>
    <div class="pos1"></div>
    <div class="pos2"></div>
	</div>

	
</template>

<script>
  export default {
   	data:function(){
   		return {
   			data:"",
        one:""
   		}
   	},
   	created:function(){
   		this.$http.get("../static/service/school_list.json")
   			.then((data)=>{
   				this.data=Object.values(data.data) 
          this.one=this.ran() 				
   			})
   	},
   	methods:{
   		ran:function(){
   			return this.data[Math.floor(Math.random()*this.data.length)]
   		}
   	}
    
  }
</script>

<style>
  .data{
    width: 90%;
    height: 600px;
    margin-left:5%; 
    margin-top:20px; 
    background: url(../../static/imgs/bg-matriculate.png) no-repeat;
    background-size: contain;
    position: relative;
  }
	h1{
    padding-top:100px; 
		font-size: .5rem;
		text-align: center;
    color:skyblue;
	}
  .p1{
    padding:90px 30px 0; 

  }
  .p2{
    padding:20px 30px 0; 

  }
  .pos1{
    width: 50%;
    height: 60px;
    background: url(../../static/imgs/btn-intr.png) no-repeat;
    background-size: contain;
    position: absolute;
    left:10%;
    top:400px;
  }
  .pos2{
    width: 30%;
    height: 60px;
    background: url(../../static/imgs/btn-share.png) no-repeat;
    background-size: contain;
    position: absolute;
    right:10%;
    top:400px;
  }

</style>