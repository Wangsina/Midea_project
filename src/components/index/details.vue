<template>
	<main id="details">
		<div id="details_check">
			<div @click="back()" id="details_goback">
				<img src="../../assets/img/zuojiantou.svg"/>
			</div>
			<ul id="details_choose">
				<li @click="page1.msg='details_commodity'" :class="{details_active:page1.msg=='details_commodity'}">
					<span class="details_choose_span">商品</span>
				</li>
				<li @click="page1.msg='details_details'" :class="{details_active:page1.msg=='details_details'}">
					<span class="details_choose_span">详情</span>
				</li>
				<li @click="page1.msg='details_evaluate'" :class="{details_active:page1.msg=='details_evaluate'}">
					<span class="details_choose_span">评价</span>
				</li>
			</ul>
			<span class="details_share midea-icon icon-share"></span>
		</div>
		<section id="details_choosebox">
			<component :is="page1.msg" :a="goods" :b="page1"></component>
		</section>
		<div id="details_footer">
			<ul id="details_footer_ul">	
				<li>
					<router-link to="/">
					<span class="details_footer_icon midea-icon font_icon_buy icon-service"></span>
					<span class="details_footer_iconText">客服</span>
					</router-link>
				</li>
				<li>
					<router-link to="/">
					<span class="details_footer_icon midea-icon font_icon_buy icon-star_fav_stroke"></span>
					<span class="details_footer_iconText">收藏</span>
					</router-link>
				</li>
				<li>
					<router-link to="/buyCar">
					<span :class="{shopNum:shopNum==1}">{{shopNum}}</span>	
					<span class="details_footer_icon midea-icon font_icon_buy icon-cart_stroke"></span>
					<span class="details_footer_iconText">购物</span>
					</router-link>
				</li>
			</ul>
			<div class="details_footer_btn1">
				<span @click="appearR1()">加入购物车</span>
			</div>
			<div class="details_footer_btn2">
				<span @click="appearR2()">立即购买</span>
			</div>
		</div>
		
		
		<!--点击购物车-->
		<section v-show="noshow1" @click="appearR1()" id="dc_selected_motai"></section>
		<section v-show="noshow1" id="dc_selected_box">
			<div class="dc_selected_sbox">
				<h3>颜色</h3> 
				<span>静谧蓝</span>
			</div>
			<div class="dc_selected_sbox">
				<h3>规格</h3> 
				<span>25L</span>
			</div>
			<div class="dc_selected_numbox">
				<h3>数量</h3>
				<span @click="sub()" class="marl">-</span>
				<input type="text" v-model="goods.goodsNum"/>
				<span @click="add()">+</span>
			</div>
			<div class="dc_selected_btn">
				<span @click="appear1()">加入购物车</span>
			</div>
		</section>
		<!--点击立即购买-->
		<section v-show="noshow2" @click="appearR2()" id="dc_selected_motai"></section>
		<section v-show="noshow2" id="dc_selected_box">
			<div class="ddc_selected_sbox">
				<h3>颜色</h3> 
				<span>静谧蓝</span>
			</div>
			<div class="ddc_selected_sbox">
				<h3>规格</h3> 
				<span>25L</span>
			</div>
			<div class="ddc_selected_numbox">
				<h3>数量</h3>
				<span @click="sub()" class="marl">-</span>
				<input type="text" v-model="goods.goodsNum"/>
				<span @click="add()">+</span>
			</div>
			<router-link to="/buyCar">
				<div class="ddc_selected_btn">
					<span @click="appear2()">立即购买</span>	
				</div>
			</router-link>
		</section>
	</main>
</template>

<script>
	import details_commodity from '../details/details_commodity.vue'
	import details_details from '../details/details_details.vue'
	import details_evaluate from '../details/details_evaluate.vue'
	export default{
		data(){
			return{
				page1:{
					msg:'details_commodity'
				},	
				noshow1:false,
				noshow2:false,
				goods:{
					goodsNum:1,
					goodsMaxNum:730
				},
				shopNum:''
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			appear1(){
				this.noshow1=!this.noshow1;
				if(this.goods.goodsNum>this.goods.goodsMaxNum){
					this.noshow1=true;
				}		
				this.shopNum=1;
			},
			appearR1(){
				this.noshow1=!this.noshow1;
				this.goods.goodsNum=1;
			},
			appear2(){
				this.noshow2=!this.noshow2;
				if(this.goods.goodsNum>this.goods.goodsMaxNum){
					this.noshow2=true;
				}		
			},
			appearR2(){
				this.noshow2=!this.noshow2;
				this.goods.goodsNum=1;
			},
			add(){
				this.goods.goodsNum++;
				if(this.goods.goodsNum>this.goods.goodsMaxNum){
					this.goods.goodsNum=this.goods.goodsMaxNum;
				}
			},
			sub(){
				this.goods.goodsNum--;
				if(this.goods.goodsNum<1){
					this.goods.goodsNum=1;
				}
			}
		},
		components:{
			'details_commodity': details_commodity,
			'details_details': details_details,
			'details_evaluate': details_evaluate
		}
	}
</script>

<style scoped>
	#details{
		width: 100%;
	}
	#details_check{
		width: 100%;
		height: 44px;
		background-color: white;
		text-align: center;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
	}
	#details_goback{
		width: 50px;
		height: 100%;
		float: left;
		/*background-color: #A7D1E4;*/
	}
	#details_goback img{
		width: 25px;
		height: 20px;
		margin-left: 12.5px;
		margin-top: 12px;
	}
	.details_share{
		display: block;
		font-size: 25px;
		line-height: 44px;
		float: right;
		margin-right: 20px;
	}
	#details_choose{
		width: 180px;
		height: 100%;
		/*background-color: skyblue;*/
		position: absolute;
		left: 50%;
		transform: translateX(-40%);
	}
	#details_choose li{
		width: calc(180px / 3);
		height: 100%;
		text-align: center;
		float: left;
		line-height: 44px;
		color: #999;
		font-size: 14px;
	}
	.details_choose_span{
		display: block;
		width: 33px;
		letter-spacing: 2px;
		height: 44px;
	}
	.details_active span{
	  	border-bottom: 2px solid #0092d8;
	  	color: #0093d5;
	}
	#details_choosebox{
		width: 100%;
		margin-top: 44px;
		margin-bottom: 50px;
		/*height: 6000px;*/
		/*background-color: antiquewhite;*/
	}
	#details_footer{
		width: 100%;
		height: 50px;
		background-color: white;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	#details_footer_ul{
		width: 150px;
		height: 100%;
		/*background-color: skyblue;*/
		float: left;
	}
	#details_footer_ul a{
		overflow: hidden;
	}
	#details_footer_ul li{
		width: 50px;
		height: 100%;
		border-right: 1px solid #eee;
		box-sizing: border-box;
		float: left;
		text-align: center;
	}
	.details_footer_icon{
		display: block;
		font-size: 18px;
		margin-top: 8px;
	    color: #666;
	}
	.details_footer_iconText{
		display: block;
	    color: #999999;
    	font-size: 9px;
    	margin-top: 4px;
	}
	.details_footer_btn1{
		width: calc( (100% - 150px) / 2);
		height: 100%;
		float: left;
		background-color: #0092d8;
		text-align: center;
	}
	.details_footer_btn1 span{
		display: block;
	    height: 50px;
	    line-height: 50px;
	    font-size: 16px;
	    color: #fff;
	}
	.details_footer_btn2{
		width: calc( (100% - 150px) / 2);
		height: 100%;
		float: left;
		background-color: #f60;
		text-align: center;
	}
	.details_footer_btn2 span{
		display: block;
	    height: 50px;
	    line-height: 50px;
	    font-size: 16px;
	    color: #fff;
	}
	#dc_selected_motai{
		width: 100%;
		height: 100%;
		z-index: 3;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.5);
	}
	#dc_selected_box{
		width: 100%;
		height: 289px;
		z-index: 4;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: white;
	}
	/*点击加入购物车的样式*/
	.dc_selected_sbox{
		width: 100%;
		height: 55px;
		padding-top: 25px;
	    margin-left: 15px;
	    border-bottom: 1px solid #f4f4f4;
	    /*background-color: pink;*/
	}
	.dc_selected_sbox h3{
		float: left;
		height: 30px;
        line-height: 30px;
	    font-size: 15px;
	    letter-spacing: 2px;
	    color: #666;
	}
	.dc_selected_sbox span{
		display: block;
		height: 30px;
        line-height: 30px;
		margin-left: 10px;
		float: left;
		background-color: #0092d8;
	    border: 1px solid #0092d8;
	    color: #fff;
	    font-size: 12px;
	    text-align: center;
	    padding: 0 15px;
	}
	.dc_selected_numbox{
		width: 100%;
		height: 55px;
		padding-top: 25px;
	    margin-left: 15px;
	    border-bottom: 1px solid #f4f4f4;
	    /*background-color: pink;*/
	}
	.dc_selected_numbox h3{
		float: left;
		height: 30px;
        line-height: 30px;
	    font-size: 15px;
	    letter-spacing: 2px;
	    color: #666;
	}
	.dc_selected_numbox input{
		float: left;
		width: 40px;
		height: 30px;
		text-align: center;
		border: 1px solid #E3E3E3;
	}
	.dc_selected_numbox span{
		display: block;
		float: left;
		width: 30px;
		height: 30px;
		border: 1px solid #E3E3E3;
		font-size: 20px;
		font-weight: bold;
		text-align: center;	
	}
	.dc_selected_btn{
		width: 100%;
		height: 46px;
		background-color: #0092d8;
		text-align: center;
	}
	.dc_selected_btn span{
		line-height: 46px;
		font-size: 16px;
		color: #FFFFFF;
	}
	/*点击立即购买的样式*/
	.ddc_selected_sbox{
		width: 100%;
		height: 55px;
		padding-top: 25px;
	    margin-left: 15px;
	    border-bottom: 1px solid #f4f4f4;
	    /*background-color: pink;*/
	}
	.ddc_selected_sbox h3{
		float: left;
		height: 30px;
        line-height: 30px;
	    font-size: 15px;
	    letter-spacing: 2px;
	    color: #666;
	}
	.ddc_selected_sbox span{
		display: block;
		height: 30px;
        line-height: 30px;
		margin-left: 10px;
		float: left;
		background-color: #f60;
	    border: 1px solid #f60;
	    color: #fff;
	    font-size: 12px;
	    text-align: center;
	    padding: 0 15px;
	}
	.ddc_selected_numbox{
		width: 100%;
		height: 55px;
		padding-top: 25px;
	    margin-left: 15px;
	    border-bottom: 1px solid #f4f4f4;
	    /*background-color: pink;*/
	}
	.ddc_selected_numbox h3{
		float: left;
		height: 30px;
        line-height: 30px;
	    font-size: 15px;
	    letter-spacing: 2px;
	    color: #666;
	}
	.ddc_selected_numbox input{
		float: left;
		width: 40px;
		height: 30px;
		text-align: center;
		border: 1px solid #E3E3E3;
	}
	.ddc_selected_numbox span{
		display: block;
		float: left;
		width: 30px;
		height: 30px;
		border: 1px solid #E3E3E3;
		font-size: 20px;
		font-weight: bold;
		text-align: center;	
	}
	.ddc_selected_btn{
		width: 100%;
		height: 46px;
		background-color: #f60;
		text-align: center;
	}
	.ddc_selected_btn span{
		line-height: 46px;
		font-size: 16px;
		color: #FFFFFF;
	}
	#details_footer_ul li:nth-child(3){
		position: relative;
	}
	.shopNum{
		position: absolute;
		top: 0;
		right: 0;
		width: 20px;
		height: 20px;
		background-color: #f60;
		border-radius: 100%;
		color: white;
	}
</style>