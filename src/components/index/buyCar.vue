<template>
	<main id="buyCar">
		<div id="buyCar_check">
			<div @click="back()" id="buyCar_goback">
				<img src="../../assets/img/zuojiantou.svg"/>
			</div>
			<span>购物车</span>
		</div>
		<!--<img class="buyCar_pic" src="../../assets/img/buyCar_pic1.jpg"/>-->
		<!--<p class="buyCar_text">购物车还是空的，快去挑选商品吧~</p>-->
		<div id="buyCar_address">
			<i class="midea-icon icon-express_address addr_icon"></i>
			<span>广东省广州市</span>
		</div>
		<div id="buyCar_goodslist">
			<i :class="{icon_click:noshow1,dui:noshow1}" @click="change1()" class="midea-icon icon-circle noselect_icon js_shop_select"></i>
			<i class="midea-icon icon-official_shop midea_icon"></i>
			<span class="goodslist_span1">美的官网商城</span>
			<span v-show="show" @click="change()" class="goodslist_span2">{{dd}}</span>
			<span v-show="noshow" @click="change()" class="goodslist_span2">{{cc}}</span>
		</div>
		<div class="buyCar_goods">
			<i :class="{icon_click:noshow2}" @click="change2()" class="midea-icon icon-circle noselect_icon js_shop_select"></i>
			<router-link to="/">
				<img class="buyCar_goodsImg" src="../../../data/images/activity_oven_right_pic1.jpg"/>
			</router-link>
			<p class="buyCar_goodsTitle">
				【上下独立控温】高颜值小烤箱 简易操作 随意定时 PT2531			
			</p>
			<p class="buyCar_goodsSize">
				静谧蓝/25L
			</p>
			<p v-show="noshow" class="buyCar_goodsSum">
				<span @click="sub()">-</span>
				<input type="text" v-model="goodsNum"/>
				<span @click="add()">+</span>
			</p>
			<span class="buyCar_goodsPrice">￥{{goodsPrice}}</span>
			<span class="buyCar_goodsActivity">限时特惠</span>
			<span class="buyCar_goodsNum">x{{goodsNum}}</span>
		</div>
		<div class="buyCar_goods">
			<i :class="{icon_click:noshow3}" @click="change3()" class="midea-icon icon-circle noselect_icon js_shop_select"></i>
			<router-link to="/">
				<img class="buyCar_goodsImg" src="../../../data/images/activity_oven_right_pic2.jpg"/>
			</router-link>
			<p class="buyCar_goodsTitle">
				小烤箱 简易操作 随意定时 PT2669			
			</p>
			<p class="buyCar_goodsSize">
				高雅黑/25L
			</p>
			<p v-show="noshow" class="buyCar_goodsSum">
				<span @click="sub1()">-</span>
				<input type="text" v-model="goodsNum1"/>
				<span @click="add1()">+</span>
			</p>
			<span class="buyCar_goodsPrice">￥{{goodsPrice1}}</span>
			<span class="buyCar_goodsActivity">限时特惠</span>
			<span class="buyCar_goodsNum">x{{goodsNum1}}</span>
		</div>
		<div class="buyCar_probox">
			<span class="buyCar_pro"><em>PRO</em></span>
			<span class="buyCar_proText">开通PRO会员，立享全场家电270元券礼包</span>
			<router-link to="/">
				立即开卡
				<span class="midea-icon icon-right_arrows"></span>
			</router-link>
		</div>
		<div id="buyCar_footerbox">
			<i :class="{icon_click:noshow1}" @click="change1()" class="buyCar_footerbox_i midea-icon icon-circle noselect_icon js_shop_select"></i>
			<span class="buyCar_footerbox_span1 goodslist_span1">全选</span>
			<span :class="{color1:noshow1,color2:noshow2,color3:noshow3}" class="buyCar_footerbox_span2">结算</span>
			<p class="buyCar_footerbox_p">合计:&nbsp;<span>￥{{sum}}.00</span></p>
			<p class="buyCar_footerbox_p1">不含运费</p>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				show:true,
				noshow:false,
				noshow1:false,
				noshow2:false,
				noshow3:false,
			    dd:'编辑',
			    cc:'完成',
			    goodsNum:1,
			    goodsPrice:179,
			    goodsNum1:1,
			    goodsPrice1:258,
			    sum:0
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			change(){
				this.show=!this.show;
				this.noshow=!this.noshow;
				if(this.noshow2==true&&this.noshow3==true){
					this.sum=this.goodsPrice*this.goodsNum+this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==false&&this.noshow3==true){
					this.sum=this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==true&&this.noshow3==false){
					this.sum=this.goodsPrice*this.goodsNum;
				}else{
					this.sum=0;
				}
			},
			change1(){
				this.noshow1=!this.noshow1;
				if(this.noshow1==true){
					this.noshow2=true;
					this.noshow3=true;
					this.sum=this.goodsPrice*this.goodsNum+this.goodsPrice1*this.goodsNum1;
				}else{
					this.noshow2=false;
					this.noshow3=false;
					this.sum=0;
				}
			},
			change2(){
				this.noshow2=!this.noshow2;
				if(this.noshow2==true){
					if(this.noshow3==true){
						this.noshow1=true;
						this.sum=this.goodsPrice*this.goodsNum+this.goodsPrice1*this.goodsNum1;
					}else{
						this.sum=this.goodsPrice*this.goodsNum;
					}
				}else if(this.noshow3==false){
					this.noshow1=false;
					this.sum=0;
				}else{
					this.noshow1=false;
					this.sum=this.goodsPrice1*this.goodsNum1;
				}
			},
			change3(){
				this.noshow3=!this.noshow3;
				if(this.noshow3==true){
					if(this.noshow2==true){
						this.noshow1=true;
						this.sum=this.goodsPrice*this.goodsNum+this.goodsPrice1*this.goodsNum1;
					}else{
						this.sum=this.goodsPrice1*this.goodsNum1;
					}
				}else if(this.noshow2==false){
					this.noshow1=false;
					this.sum=0;
				}else{
					this.noshow1=false;
					this.sum=this.goodsPrice*this.goodsNum;
				}
			},
			sub(){
				this.goodsNum--;
				if(this.goodsNum<1){
					this.goodsNum=1;
				}
				if(this.noshow2==true&&this.noshow3==true){
					this.sum=this.goodsPrice*this.goodsNum+this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==false&&this.noshow3==true){
					this.sum=this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==true&&this.noshow3==false){
					this.sum=this.goodsPrice*this.goodsNum;
				}else{
					this.sum=0;
				}
			},
			add(){
				this.goodsNum++;
				if(this.noshow2==true&&this.noshow3==true){
					this.sum=this.goodsPrice*this.goodsNum+this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==false&&this.noshow3==true){
					this.sum=this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==true&&this.noshow3==false){
					this.sum=this.goodsPrice*this.goodsNum;
				}else{
					this.sum=0;
				}
			},
			sub1(){
				this.goodsNum1--;
				if(this.goodsNum1<1){
					this.goodsNum1=1;
				}
				if(this.noshow2==true&&this.noshow3==true){
					this.sum=this.goodsPrice*this.goodsNum+this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==false&&this.noshow3==true){
					this.sum=this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==true&&this.noshow3==false){
					this.sum=this.goodsPrice*this.goodsNum;
				}else{
					this.sum=0;
				}
			},
			add1(){
				this.goodsNum1++;
				if(this.noshow2==true&&this.noshow3==true){
					this.sum=this.goodsPrice*this.goodsNum+this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==false&&this.noshow3==true){
					this.sum=this.goodsPrice1*this.goodsNum1;
				}else if(this.noshow2==true&&this.noshow3==false){
					this.sum=this.goodsPrice*this.goodsNum;
				}else{
					this.sum=0;
				}
			}
		}
	}
</script>

<style scoped>
	#buyCar{
		width: 100%;
		min-height: 100vh;
		background-color: #f4f4f4;
		position: relative;
	}
	#buyCar_check{
		width: 100%;
		height: 44px;
		background-color: white;
		/*border: 1px solid #eee;*/
		text-align: center;
		position: relative;
	}
	#buyCar_goback{
		width: 50px;
		height: 100%;
		float: left;
		/*background-color: #A7D1E4;*/
	}
	#buyCar_goback img{
		width: 25px;
		height: 20px;
		margin-left: 12.5px;
		margin-top: 12px;
	}
	#buyCar_check span{
		font-size: 1rem;
	    line-height: 44px;
	    color: #333;
	    font-weight: normal;
	    position: absolute;
	    left: 50%;
	    transform: translateX(-50%);
	}
	.buyCar_pic{
		width: 100px;
		height: 100px;
		padding-top: 50px;
		padding-bottom: 20px;
		position: relative;
		left: 50%;
		transform: translateX(-50%);
	}
	.buyCar_text{
		color: #ccc;
   		font-size: 12px;
   		text-align: center;
	}
	.buyCar_probox{
		width: 100%;
		height: 40px;
		position: fixed;
    	bottom: 49px;
    	font-size: 12px;
	    line-height: 40px;
	    background: #fff3db;
	    padding: 0 15px;
	    overflow: hidden;
	    z-index: 10;
	}
	.buyCar_pro{
		display: block;
		float: left;
		width: 35px;
		height: 20px;
		float: left;
		background-color: #242733;	
		border-radius: 5px;
		text-align: center;
		margin-top: 10px;
	}
	.buyCar_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 8px;
		margin-top: -10px;
		font-weight: bold;
	}
	.buyCar_proText{
		display: block;
		float: left;
		line-height: 40px;
		margin-left: 10px;
		font-size: 12px;
		color: #666;
	}
	.buyCar_probox a{
		display: block;
		float: right;
		margin-right: 30px;
		color: #706f6d;
		cursor: pointer;
	}
	#buyCar_address{
		height: 42px;
	    line-height: 42px;
	    padding-left: 12px;
	    padding-right: 12px;
	    font-size: 12px;
	    color: #999;
	}
	#buyCar_address i{
		font-size: 16px;
	}
	#buyCar_goodslist{
		width: calc(100% - 24px);
		height: 44px;
		background-color: white;
		padding: 0 12px 0 12px;
	}
	#buyCar_goodslist i{
		display: block;
		float: left;
		font-size: 16px;
		margin-left: 10px;
		line-height: 44px;
	}
	.goodslist_span1{
		display: block;
		float: left;
		margin-left: 10px;
		line-height: 44px;
		font-size: 14px;
		color: #333;
	}
	.goodslist_span2{
		display: block;
		float: right;
		margin-right: 10px;
		line-height: 44px;
		font-size: 12px;
   	 	color: #999;
	}
	.buyCar_goods{
		padding: 12px 12px;
    	background: white;
    	width: calc(100% - 24px);
    	height: 92px;
    	border-top: 1px solid #EFEFEF;
    	position: relative;
    	overflow: hidden;
	}
	.buyCar_goods i{
		display: block;
		float: left;
		font-size: 16px;
		line-height: 92px;
		margin-left: 10px;
	}
	.buyCar_goods a{
		float: left;
		margin-left: 20px;
	    width: 80px;
	    height: 80px;
	    line-height: 92px;
	    border: 1px solid #eee;
	    margin-top: 6px;
	}
	.buyCar_goodsImg{
		width: 80px;
	    height: 80px;
	    margin-top: -15px;
	}
	.buyCar_goodsTitle{
		margin-top: 6px;
		padding-left: 10px;
		font-size: 12px;
		width: 35%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.buyCar_goodsSize{
		/*float: left;*/
		padding-left: 145px;
		font-size: 12px;
    	color: #999;
    	margin-top: 10px;
	}
	.buyCar_goodsPrice{
		position: absolute;
		top: 16px;
		right: 20px;
		font-size: 12px;
        color: #f60;
        z-index: 2;
	}
	.buyCar_goodsActivity{
		color: #fff;
	    font-size: 11px;
	    display: inline;
	    padding: 2px 4px 1px;
	    position: absolute;
		top: 36px;
		right: 20px;
		background-color: #FF6600;
		z-index: 2;
	}
	.buyCar_goodsNum{
		position: absolute;
		top: 66px;
		right: 20px;
		font-size: 11px;
		color: #999;
		z-index: 2;
	}
	#buyCar_footerbox{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 50px;
		border-top: 1px solid #EFEFEF;
		background-color: white;
	}
	.buyCar_footerbox_i{
		display: block;
		float: left;
		font-size: 16px;
		margin-left: 10px;
		line-height: 50px;
	}
	.icon_click::after{
		content: "\e927";
    	color: #1b89c9;
    	margin-left: -16px;
	}
	.dui::after{
		content: "\e927";
    	color: #1b89c9;
    	margin-left: -16px;
	}
	.buyCar_footerbox_span1{
		display: block;
		float: left;
		margin-left: 10px;
		line-height: 50px;
		font-size: 14px;
		color: #333;
	}
	.buyCar_footerbox_span2{
		display: block;
		float: right;
		width: 100px;
		height: 50px;
	    text-align: center;
	    line-height: 50px;     
	    color: #ffffff;
    	font-size: 17px;
    	background-color: #999;
	}
	.color1{
		background-color: #f60;
	}
	.color2{
		background-color: #f60;
	}
	.color3{
		background-color: #f60;
	}
	.buyCar_footerbox_p{
		margin-right: 20px;
	    font-size: 15px;
	    color: #333;
	    position: absolute;
	    top: 8px;
	    right: 100px;
	}
	.buyCar_footerbox_p span{
		font-weight: bold;
        color: #f60;
	}
	.buyCar_footerbox_p1{
		margin-right: 20px;
	    font-size: 10px;
    	color: #999;
    	position: absolute;
	    top: 30px;
	    right: 100px;
	}
	.buyCar_goodsSum{
		margin-top: 10px;
		padding-left: 145px;
	}
	.buyCar_goodsSum input{
		float: left;
		width: 30px;
		height: 20px;
		text-align: center;
		border: 1px solid #E3E3E3;
		line-height: 20px;
	}
	.buyCar_goodsSum span{
		display: block;
		float: left;
		width: 20px;
		height: 20px;
		border: 1px solid #E3E3E3;
		font-size: 20px;
		font-weight: bold;
		text-align: center;	
		line-height: 20px;
	}
</style>