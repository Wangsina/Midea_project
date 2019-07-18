<template>
	<main id="activity">
	    <div v-show="show" id="activity_motai"></div>
		<img class="bigPic" src="../../assets/img/activity_Pic1.webp.jpg"/>
		<img class="bigPic" src="../../assets/img/activity_Pic2.webp.jpg"/>
		<div class="activity_Pic3">
			<img src="../../assets/img/activity_Pic3.webp.jpg"/>
			<div @click="appear()" class="Pic3_click"></div>
		</div>
		<div v-show="show" id="activity_getBox">
			<div @click="appear()" class="activity_getBox_close">
				<img class="cuohao" src="../../assets/img/cuohao.svg"/>
			</div>
			<img class="success" src="../../assets/img/Success.svg"/>
			<p>领取成功</p>
			<div class="activity_getBox_btn">
				<span @click="appear()" class="activity_getBox_btn1">我知道了</span>
				<span class="activity_getBox_btn2">我的优惠卷</span>
			</div>
		</div>
		<img class="bigPic" src="../../assets/img/activity_Pic4.webp.jpg"/>
		<ul id="activity_oven">
			<li v-for="(item,index) in oven">
				<div class="oven_left">
					<p class="oven_left_title">{{oven[index].title}}</p>
					<p class="oven_left_name">{{oven[index].name}}</p>
					<div class="oven_left_price">
						<span>{{oven[index].price}}</span>
					    <img src="../../assets/img/activity_oven_proPic.png"/>
					</div>
	                <p class="oven_left_realPrice">活动价:
	                	<span class="realPrice_span1">￥</span>
	                	<span class="realPrice_span2">{{oven[index].realprice}}</span>
	                </p>
	                <router-link to="/details">
		                <div class="oven_left_buy">
		                	<span>立即购买</span>
		                </div>
	                </router-link>
				</div>
				<div class="oven_right">
					<img :src="oven[index].src"/>
				</div>
				<div class="oven_bottom">
					<span>{{oven[index].text}}</span>
				</div>
			</li>
		</ul>
	    <img class="bigPic" src="../../assets/img/activity_Pic5.webp.jpg"/>
	    <ul id="activity_smallOven">
	    	<li v-for="(item,index) in smallOven">
	    		<span class="smallOven_priceDown">
	    			{{smallOven[index].priceDown}}
	    		</span>
	    		<img class="smallOven_pic" :src="smallOven[index].src"/>
	    		<div class="smallOven_text">
	    			<p>{{smallOven[index].text}}</p>
	    		</div>
	    		<div class="smallOven_pricebox">
	    			<span class="smallOven_price">￥<em>{{smallOven[index].price}}</em></span>
	    			<img src="../../assets/img/activity_oven_proPic.png"/>
	    			<span class="smallOven_realprice">{{smallOven[index].realprice}}</span>
	    		</div>
	    		<router-link to="/">
	                <div class="smallOven_buy">
	                	<span>立即购买</span>
	                </div>
                </router-link>
	    	</li>
	        <!--清除浮动，解决ul没高度的问题-->
			<div style="clear:both;"></div>
	    </ul>
	    <img class="bigPic" src="../../assets/img/activity_Pic6.webp.jpg"/>
	    <ul id="activity_smallOven">
	    	<li v-for="(item,index) in microwaveOven">
	    		<span class="smallOven_priceDown">
	    			{{microwaveOven[index].priceDown}}
	    		</span>
	    		<img class="smallOven_pic" :src="microwaveOven[index].src"/>
	    		<div class="smallOven_text">
	    			<p>{{microwaveOven[index].text}}</p>
	    		</div>
	    		<div class="smallOven_pricebox">
	    			<span class="smallOven_price">￥<em>{{microwaveOven[index].price}}</em></span>
	    			<img src="../../assets/img/activity_oven_proPic.png"/>
	    			<span class="smallOven_realprice">{{microwaveOven[index].realprice}}</span>
	    		</div>
	    		<router-link to="/">
	                <div class="smallOven_buy">
	                	<span>立即购买</span>
	                </div>
                </router-link>
	    	</li>
	        <!--清除浮动，解决ul没高度的问题-->
			<div style="clear:both;"></div>
	    </ul>
	    <img class="bigPic" src="../../assets/img/activity_Pic7.webp.jpg"/>
	    <ul id="activity_smallOven">
	    	<li v-for="(item,index) in embeddedOven">
	    		<span class="smallOven_priceDown">
	    			{{embeddedOven[index].priceDown}}
	    		</span>
	    		<img class="smallOven_pic" :src="embeddedOven[index].src"/>
	    		<div class="smallOven_text">
	    			<p>{{embeddedOven[index].text}}</p>
	    		</div>
	    		<div class="smallOven_pricebox">
	    			<span class="smallOven_price">￥<em>{{embeddedOven[index].price}}</em></span>
	    			<img src="../../assets/img/activity_oven_proPic.png"/>
	    			<span class="smallOven_realprice">{{embeddedOven[index].realprice}}</span>
	    		</div>
	    		<router-link to="/">
	                <div class="smallOven_buy">
	                	<span>立即购买</span>
	                </div>
                </router-link>
	    	</li>
	        <!--清除浮动，解决ul没高度的问题-->
			<div style="clear:both;"></div>
	    </ul>
	    <img class="bigPic" src="../../assets/img/activity_Pic8.webp.jpg"/>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				show:false,
				oven:[],
				smallOven:[],
				microwaveOven:[],
				embeddedOven:[]
			}
		},
		methods:{
			appear(){
				this.show=!this.show;
			}
		},
		mounted(){
        this.$http.get('./data/data.json')
        .then((res)=> {
          this.oven=res.data.oven;
          this.smallOven=res.data.smallOven;
          this.microwaveOven=res.data.microwaveOven;
          this.embeddedOven=res.data.embeddedOven;
//        console.log(res.data.smallOven);
          console.log(res);
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
	#activity{
		background-color: #68b7bc;
		position: relative;
		/*height: 200px;*/
	}
	img{
		width: 100%;
		height: auto;
	}
	#activity_motai{
		width: 100%;
		height: 100%;
		z-index: 2;
		position: absolute;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.5);
		/*max-width: 750px;*/
		/*display: none;*/
	}
	#activity_getBox{
		width: 70%;
		height: 50vw;
		z-index: 3;
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		background-color: white;
		border: 5px solid #f43c70;
		max-width: 450px;
		max-height: 330px;
		/*display: none;*/
	}
	.activity_getBox_close{
		width: 8%;
		height: 8%;
	    background: #f43c70;
	    position: absolute;
	    right: 0px;
	    top: 0;
	    cursor: pointer;
	}
	.cuohao{
		width: 100%;
		height: 100%;
	}
	.success{
		width: 30%;
		height: 30%;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin-top: 6%;
	}
	#activity_getBox p{
		text-align: center;
   	    font-size: 6vw;
   	    font-weight: bold;
   	    margin-top: 32%;
   	    color: #393939;;
	}
	.activity_getBox_btn{
		width: 100%;
		height: 8vw;
		/*background-color: antiquewhite;*/
		margin-top: 10%;
	}
	.activity_getBox_btn1{
		display: block;
		width: 35%;
		height: 8vw;
		margin-left: 12%;
		float: left;
		background-color: #f43c70;
		text-align: center;
		font-size: 3vw;
		color: white;
		font-weight: bold;
		line-height: 8vw;
	}
	.activity_getBox_btn2{
		display: block;
		width: 35%;
		height: 8vw;
		margin-right: 12%;
		float: right;
		background-color: #f43c70;
		text-align: center;
		font-size: 3vw;
		color: white;
		font-weight: bold;
		line-height: 8vw;
	}
	.activity_Pic3{
		width: 100%;
		position: relative;
	}
	.Pic3_click{
		width: 35%;
		height: 45%;
		/*background-color: rgba(255,255,0,0.4);*/
		position: absolute;
		right: 0;
		bottom: 0;
	}
	#activity_oven{
		width: 100%;
		/*height: 1000px;*/
		background-color: #68b7bc;
	}
	#activity_oven li{
	    overflow: hidden;
	    background-color: #fff;
	    margin: 0 5% 25px 5%;
	    /*height: 350px;*/
	}
	.oven_left{
		overflow: hidden;
	    padding: 4% 0 5% 8%;
	    float: left;
	    width: 48%;
	    /*height: 300px;*/
	    /*background-color: antiquewhite;*/
	}
	.oven_left_title{
		color: #e43d3f;
		font-size: 4.5vw;
		font-weight: bold;
	}
	.oven_left_name{
		color: #A0A0A0;
		font-size: 2.5vw;
		padding-top: 2%;
	}
	.oven_left_price{
		width: 100%;
		height: 20px;
		padding-top: 20%;
		/*background-color: pink;*/
	}
	.oven_left_price span{
		display: block;
		/*padding-top: 20%;*/
		font-size: 16px;
	    color: #666;
	    float: left;
	}
	.oven_left_price img{
		float: left;
		/*padding-top: 20%;*/
		width: 45px;
		height: 18px;
		margin-left: 5px;
	}
	.oven_left_realPrice{
		color: #666;
		font-size: 3vw;
		padding-top: 2%;
	}
	.realPrice_span1{
		color: #e43d3f;
	}
	.realPrice_span2{
		color: #e43d3f;
		font-weight: 700;
		font-size: 5vw;
	}
	.oven_left_buy{
		width: 25vw;
		height: 7vw;
		background-color: #e43d3f;
		margin-top: 2%;
		font-size: 3vw;
		font-weight: 600;
		color: white;
		text-align: center;
		line-height: 7vw;
	}
	.oven_left a{
		cursor: pointer;
	}
	.oven_right{
		overflow: hidden;
	    padding: 3% 0;
	    float: right;
	    width: 44%;
	    position: relative;
	}
	.oven_right img{
		width: 100%;
		height: 100%;
	}
	.oven_bottom{
		overflow: hidden;
	    padding: 2% 1%;
	    float: left;
	    width: 100%;
		background-color: #e43d3f;
	    text-align: center;
	}
	.oven_bottom span{
		font-size: 3vw;
		color: white;
	}
	#activity_smallOven{
		width: 100%;
		/*height: 1000px;*/
		padding-right: 5%;
		background-color: #68b7bc;
	}
	
	#activity_smallOven li{
		overflow: hidden;
	    background-color: #fff;
	    margin: 0 0 20px 5%;
	    width: 42.5%;
	    float: left;
	    position: relative;
	    /*height: 640px;*/
	}
	.smallOven_priceDown{
		display: block;
		position: absolute;
		top: 3%;
		right: 5%;
		width: 15vw;
		height: 5vw;
		border-radius:100px;
		background-color: #e43d3f;
		color: white;
		text-align: center;
		font-weight: blod;
		font-size: 3vw;
		line-height: 5vw;
	}
	.smallOven_pic{
		width: 90%;
		padding: 5% 5% 0 5%;
	}
	.smallOven_text{
		margin: 0 5%;
		padding: 1% 1%;
		height: 12vw;
		overflow: hidden;
		background-color: #efefef;
	}
	.smallOven_text p{
		color: #333;
		font-size: 3.4vw;
		line-height: 6.2vw;
		letter-spacing: 2px;
	}
	.smallOven_pricebox{
		margin: 15% 5% 0 5%;
		width: 90%;
		/*height: 100px;*/
		/*background-color: pink;*/
		overflow: hidden;
	}
	.smallOven_price{
		display: block;
		float: left;
		font-size: 3vw;
		color: #e43d3f;
		font-weight: blod;
	}
	.smallOven_price em{
		font-size: 5vw;
		color: #e43d3f;
	}
	.smallOven_pricebox img{
		float: right;
		width: 44px;
		height: 20px;
		margin-top: 12%;
	}
	.smallOven_realprice{
		display: block;
		color: #666;
		float: right;
		font-size: 4vw;
		margin-top: 5%;
		margin-right: 2%;
	}
	.smallOven_buy{
		margin: 8% 5% 12% 5%;
		font-size: 3vw;
		font-weight: 600;
		color: white;
		text-align: center;
		line-height: 7vw;
		background-color: #e43d3f;
	}
</style>