<template>
	<main id="my">
		<div id="my_userCard">
			<div id="my_userCard_top">
				<img id="my_userHead" src="../../assets/img/my_userHead.png"/>
				<span id="my_name">Sna</span>
				<img id="my_userMember" src="../../assets/img/my_userMember.png"/>
			</div>
			<ul id="my_userCard_ul">
				<li class="my_userCard_li">
					<p class="my_userCard_liNum">0</p>
					<p class="my_userCard_liText">收藏</p>
				</li>
				<li class="my_userCard_li">
					<p class="my_userCard_liNum">20</p>
					<p class="my_userCard_liText">积分</p>
				</li>
				<li class="my_userCard_li">
					<p class="my_userCard_liNum">2</p>
					<p class="my_userCard_liText">优惠卷</p>
				</li>
				<li class="my_userCard_li">
					<p class="my_userCard_liNum">0</p>
					<p class="my_userCard_liText">礼品卡</p>
				</li>
			</ul>
			<div id="my_userMemberBox">
				<div class="my_userMember_tag1">
					<img src="../../assets/img/my_userMember_tag1Pic.png"/>
					<p>开卡即享7大特权</p>
				</div>
				<div class="my_userMember_tag2">
					<p>限时开卡送270元卷</p>
					<p>购物返10倍积分</p>
				</div>
				<div class="my_userMember_tag3">
					<p>
					   <router-link to="">
						立即开卡  
						<i class="midea-icon icon-right_arrows"></i>
					   </router-link>
					</p>
				</div>
			</div>
		</div>
		<div id="my_Allorders">
			<span class="my_Allorders_span1">全部订单</span>
			<router-link to="">
				<span class="my_Allorders_span3 midea-icon icon-right_arrows"></span>
				<span class="my_Allorders_span2">查看详情</span>				
			</router-link>
		</div>
		<ul id="my_ul">
			<li>
				<router-link to="">
					<span class="my_li_icon icon-order midea-icon icon-pending_pay"></span>
					<span class="my_li_text">待支付</span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span class="my_li_icon icon-order midea-icon icon-pending_post"></span>
					<span class="my_li_text">待发货</span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span class="my_li_icon icon-order midea-icon icon-pending_receive"></span>
					<span class="my_li_text">待收货</span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span class="my_li_icon icon-order midea-icon icon-comment_manage"></span>
					<span class="my_li_text">评价管理</span>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<span class="my_li_icon icon-order midea-icon icon-after_sale"></span>
					<span class="my_li_text">售后/退款</span>
				</router-link>
			</li>
		</ul>
		<ul id="my_nav">
			<li>
				<span class="my_nav_span4 icon-btn midea-icon icon-member_benefit"></span>
				<span class="my_nav_span1">会员福利社</span>
				<router-link to="">
					<span class="my_nav_span3 midea-icon icon-right_arrows"></span>
					<span class="my_nav_span2">签到送积分</span>				
				</router-link>
			</li>
			<li>
				<span class="my_nav_span4 icon-btn midea-icon icon-price_protect"></span>
				<span class="my_nav_span1">极速保价</span>
				<router-link to="">
					<span class="my_nav_span3 midea-icon icon-right_arrows"></span>				
				</router-link>
			</li>
			<li>
				<span class="my_nav_span4 icon-btn midea-icon icon-my_product"></span>
				<span class="my_nav_span1">我的产品库</span>
				<router-link to="">
					<span class="my_nav_span3 midea-icon icon-right_arrows"></span>			
				</router-link>
			</li>
			<li>
				<span class="my_nav_span4 icon-btn midea-icon icon-exchange"></span>
				<span class="my_nav_span1">我的兑换</span>
				<router-link to="">
					<span class="my_nav_span3 midea-icon icon-right_arrows"></span>			
				</router-link>
			</li>
		</ul>
		<ul id="my_nav">
			<li>
				<span class="my_nav_span4 icon-btn midea-icon icon-help_center"></span>
				<span class="my_nav_span1">帮助中心</span>
				<router-link to="">
					<span class="my_nav_span3 midea-icon icon-right_arrows"></span>				
				</router-link>
			</li>
			<li>
				<span class="my_nav_span4 icon-btn midea-icon icon-setting"></span>
				<span class="my_nav_span1">设置</span>
				<router-link to="">
					<span class="my_nav_span3 midea-icon icon-right_arrows"></span>	
					<span class="my_nav_span2">账户设置、地址</span>
				</router-link>
			</li>
		</ul>
		<div id="my_outSign">
			<router-link to="/login"><span>退出登录</span></router-link>
		</div>
	</main>
</template>

<script>
</script>

<style>
	#my{
		background-color: #f4f4f4;
		/*border: 1px solid #eee;*/
		height: 800px;
	}
	#my_userCard{
		width: 100%;
		height: 160px;
		background-image: url(../../assets/img/my_userCard.png);
	}
	#my_userCard_top{
		width: 100%;
		height: 64px;
        margin-bottom: 18px;
        overflow: hidden;
        margin-bottom: 18px;
		/*background-color: pink;*/
	}
	#my_userHead{
		width: 46px;
		height: 46px;
		margin-top: 15px;
	    margin-left: 35px;
	    border: 1px solid #ccc;
	    border-radius: 50%;
	    float: left;
	}
	#my_name{
		display: inline-block;
		margin-left: 8px;
		margin-top: 25px;
		font-size: 16px;
		line-height: 22px;
		color: #FFF;
		float: left;
	}
	#my_userMember{
		width: 66px;
		height: 15px;
		float: left;
		margin-left: 8px;
		margin-top: 29px;
	}
	#my_userCard_ul{
		width: 100%;
		height: 40px;
		/*background-color: pink;*/
	}
	.my_userCard_li{
		width: 25%;
		height: 100%;
		float: left;
		text-align: center;
	}
	.my_userCard_liNum{
		font-size: 16px;
   		line-height: 22px;
   		color: #FFF;
	}
	.my_userCard_liText{
		font-size: 12px;
   		line-height: 17px;
   		color: #FFF;
	}
	#my_userMemberBox{
	    width: 89.6%;
	    height: 45px;
	    padding: 24px 7px 0 8px;
	    margin: 0 auto;
	    background: #fff;
	    /*background-color: palegoldenrod;*/
	    border-radius: 10px;
	    margin-top: 5px;
	}
	.my_userMember_tag1{
		width: 25vw;
		height: 40px;
		/*background-color: aqua;*/
		color: #333;
		margin-top: -10px;
		border-right: 2px solid #F4F4F4;
		float: left;
	}
	.my_userMember_tag1 p{
		font-size: 0.565rem;
    	line-height: 14px;
    	margin-top: 3px;
	}
	.my_userMember_tag2{
		width: 40vw;
		height: 40px;
		margin-top: -10px;
		/*background-color: antiquewhite;*/
		color: #333;
		float: left;
	}
	.my_userMember_tag2 p{
		font-size: 0.565rem;
    	line-height: 20px;
    	margin-left: 10px;
	}
	.my_userMember_tag3{
		width: 20vw;
		height: 40px;
		margin-top: -10px;
		/*background-color: #006FA3;*/
		float: left;
	}
	.my_userMember_tag3 p{
		width: 20vw;
		max-width: 80px;
	    height: 22px;
	    line-height: 22px;
	    text-align: center;
	    font-size: 0.465rem;
	    color: #604B22;
	    background: linear-gradient(130deg, #E1D0AB, #C2A671);
	    border-radius: 11px;
	}
	.my_userMember_tag3 i{
		width: 0.465rem;
		height: 0.465rem;
	}
	#my_Allorders{
		width: 100%;
		height: 45px;
		background-color: white;
		margin-top: 60px;
	}
	.my_Allorders_span1{
		display: block;
		float: left;
	    width: auto;
	    color: #333;
	    font-size: 14px;
	    padding-left: 14px;
	    line-height: 42px;
	    height: 42px;
	    font-weight: 700;
	}
	.my_Allorders_span2{
		display: block;
		float: right;
		font-size: 14px;
	    color: #999;  
	    line-height: 42px;
	    height: 42px;
	    width: 60px;
	    text-align: right;
	    font-weight: 400;
	}
	.my_Allorders_span3{
		display: block;
		float: right;
		margin-right: 10px;
		font-size: 16px;
	    color: #999;
	    line-height: 42px;
	    height: 42px;
	    width: 20px;
	    text-align: right;
	    font-weight: 400;
	}
	#my_Allorders a{
		cursor: pointer;
	}
	#my_ul{
		width: 100%;
		height: 80px;
		background-color: white;
		border-top: 1px solid #eee;
	}
	#my_ul li{
		width: 20%;
		height: 100%;
		float: left;
		text-align: center;
	}
	.my_li_icon{
		width: 40px;
	    height: 40px;
	    display: block;
	    line-height: 40px;
	    font-size: 20px;
	    font-weight: bold;
	    margin: 8px auto 0 auto;
	}
	.my_li_text{
		font-size: 12px;
	    line-height: 12px;
	    height: 12px;
	    color: #666;
	}
	#my_nav{
		width: 100%;
		margin-top: 20px;
	}
	#my_nav li{ 
		width: 100%;
		height: 42px;
		background-color: white;
		border-bottom: 1px solid #eee;
	}
	.my_nav_span4{
		width: 40px;
	    height: 43px;
	    float: left;
	    /*position: absolute;
	    left: 6px;
	    top: 1px;*/
	    text-align: center;
	    line-height: 42px;
	    font-size: 20px;
	}
	.my_nav_span1{
		display: block;
		float: left;
	    width: auto;
	    color: #333;
	    font-size: 14px;
	    line-height: 42px;
	    height: 42px;
	}
	.my_nav_span2{
		display: block;
		float: right;
		font-size: 14px;
	    color: #999;  
	    line-height: 42px;
	    height: 42px;
	    text-align: right;
	    font-weight: 400;
	}
	.my_nav_span3{
		display: block;
		float: right;
		margin-right: 10px;
		font-size: 16px;
	    color: #999;
	    line-height: 42px;
	    height: 42px;
	    width: 20px;
	    text-align: right;
	    font-weight: 400;
	}
	#my_nav a{
		cursor: pointer;
	}
	#my_outSign{
		width: 100%;
		height: 42px;
		background-color: white;
		margin-top: 20px;
		text-align: center;
	}
	#my_outSign{
		/*color: #0092d8;*/
		color: #3860ab;
		font-size: 1rem;
		line-height: 42px;
		letter-spacing: 3px;
	}
</style>