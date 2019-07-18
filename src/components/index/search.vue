<template>
	<main id="search">
		<div id="search_check">
			<div @click="back()" id="search_goback">
				<img src="../../assets/img/zuojiantou.svg"/>
			</div>
			<form id="searchbox">
				<img class="search_pic1" src="../../assets/img/search_pic.png"/>
				<input id="search_input" maxlength="40" v-model="msg"/>
				<img @click="clear()" class="search_pic2" src="../../assets/img/search_pic1.png"/>
			</form>
			<span>搜索</span>
		</div>
		<div id="search_recommend">
			<h4>推荐搜索</h4>
			<span class="marl">空调</span>
			<span>冰箱</span>
			<span>洗衣机</span>
			<span>厨房小电器</span>
			<span>厨房大电器</span>
			<span>生活家电</span>
			<span>热水器</span>
			<span>配件及周边</span>
			<span>PRO会员价</span>
		</div>
		<p id="aC_hotItem"><span>热卖商品</span></p>
	    <ul id="aC_ul2">
	    	<li v-for="(item,index) in hotItem">
				<router-link to="">
					<div class="aC_hotItem_info">
						<img :src="hotItem[index].src"/>
						<p class="aC_hotItem_name">{{hotItem[index].name}}</p>
						<span class="aC_th">限时特惠</span>
						<span class="aC_news">新品</span>
						<p class="aC_hotItem_elseInfo">
							<span class="aC_hotItem_price">
								{{hotItem[index].price}}
							</span>
							<span class="aC_hotItem_proprice">
								{{hotItem[index].realprice}}
							</span>
							<span class="aC_hotItem_pro"><em>PRO</em></span>
							<span class="aC_hotItem_comments">{{hotItem[index].text}}</span>
						</p>
					</div>
				</router-link>
			</li>	
	    </ul>
	</main>
</template>

<script>
	import daoji from '../../assets/js/countDown.js'
	export default{
		data(){
			return{
				hotItem:[],
				msg:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			clear(){
				this.msg=''
			}
		},
		mounted(){
	        var _this=this;
	        this.$http.get('./data/data.json')
	        .then(function (res) {
	          console.log(res);
	          _this.hotItem=res.data.hotItem
	        })
	        .catch(()=>{
	
	        })
	        .then((f)=>{
	            console.log('请求结束了')
	        });  
	    }
	}
	
</script>

<style scoped>
	#search{
		width: 100%;
	}
	#search_check{
		width: 100%;
		height: 50px;
		/*background-color: pink;*/
		border-bottom: 1px solid #eee;
		text-align: center;
	}
	#search_goback{
		width: 50px;
		height: 100%;
		float: left;
		/*background-color: #A7D1E4;*/
	}
	#search_goback img{
		width: 25px;
		height: 20px;
		margin-left: 12.5px;
		margin-top: 15px;
	}
	#search_check span{
		display: block;
		float: right;
		margin-top: 10.5px;
		margin-left: 10px;
		margin-right: 10px;
		border-radius: 2px;
	    background-color: #0092d8;
	    text-align: center;
	    font-size: 12px;
	    color: #fff;
	    border: 1px solid #0092d8;
	    width: 38px;
	    height: 29px;
	    line-height: 29px;
	}
	#searchbox{
		float: left;
		width: calc(100% - 111px);
		height: 100%;
		/*background-color: skyblue;*/
		position: relative;
	}
	#search_input{
		width: calc(100% - 75px);
	    height: 30px;
	    line-height: 30px;
	    padding: 0 28px 0 40px;
	    border: 1px solid #eee;
	    border-radius: 3px;
	    background-color: #eee;
	    color: #333;
	    position: absolute;
	    left: 5px;
	    top: 10px;
	    outline: none;
	}
	.search_pic1{
		width: 20px;
		height: 20px;
		z-index: 3;
		position: absolute;
	    top: 15px;
	    left: 17px;
	}
	.search_pic2{
		width: 20px;
		height: 20px;
		z-index: 3;
		position: absolute;
	    top: 15px;
	    right: 10px;
	}
	#search_recommend{
		background-color: #fff;
	    padding: 14px 0 25px 0;
	    width: 100%;
	    font-size: 12px;
	    /*background-color: pink;*/
	    overflow: hidden;
	}
	#search_recommend h4{
		padding-left: 15px;
	    font-size: 12px;
	    color: #999;
	}
	#search_recommend span{
		display: block;
		float: left;
	    box-sizing: border-box;
	   	padding: 0 14px;
	    margin-top: 20px;
	    margin-left: 15px;
	    font-size: 14px;
	    height: 30px;
	    line-height: 30px;
	    box-sizing: border-box;
	    border: 1px solid #ccc;
	    border-radius: 2px;
	    text-align: center;
	}
	.marl{
		margin-left: 15px;
	}
	#aC_hotItem{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        /*margin-left: 30px;*/
        border-bottom: 1px solid #eee;
	}
	#aC_hotItem span{
		display: block;
		margin-left: 30px;
	}
	#aC_ul2{
		width: 100%;
	}
	#aC_ul2 li{
		width: 100%;
		height: 130px;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	.aC_hotItem_info{
		width: 100%;
		height: 75px;
		margin-top: 22.5px;
		/*background-color: pink;*/
	}
	.aC_hotItem_info img{
		width: 75px;
		height: 75px;
		padding-left: 15px;
		padding-right: 15px;
		float: left;
	}
	.aC_hotItem_name{
		color: #333;
		font-size: 12px;
    	line-height: 18px;
	}
	.aC_th{
		display: inline-block;
		width: 54px;
		height: 15px;
		background-color: #ff6600;
		color: #fff;
    	font-size: 11px;
    	line-height: 15px;
    	text-align: center;
    	margin-top: 5px;
    	margin-left: 5px;
	}
	.aC_news{
		display: inline-block;
		width: 30px;
		height: 15px;
		background-color: #1bce8d;
		color: #fff;
    	font-size: 11px;
    	line-height: 15px;
    	text-align: center;
    	margin-top: 5px;
    	margin-left: 3px;
	}
	.aC_hotItem_elseInfo{
		/*padding-top: 2px;*/
	}
	.aC_hotItem_price{
		display: block;
		float: left;
	    color: #ff3300;
	    font-size: 16px;
	    margin-top: 15px;
	}
	.aC_hotItem_proprice{
		color: dimgray;
		margin-left: 3px;
	    font-size: 13px;
	}
	.aC_hotItem_pro{
		display: inline-block;
		width: 28px;
		height: 13px;
		/*float: left;*/
		background-color: #242733;
		margin-left: 5px;
		margin-top: 20px;
		text-align: center;
	}
	.aC_hotItem_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 8px;
		line-height: 13px;
		/*margin-top: -2px;*/
	}
	.aC_hotItem_comments{
		float: right;
		color: #999;
    	font-size: 12px;
    	padding-right: 10px;
	}
</style>