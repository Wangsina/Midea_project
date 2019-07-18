<template>
	<main id="airConditioning">
		<router-link to=""><img id="aC_headerPic" src="../../assets/img/airConditioning_headerPic.webp.jpg"/></router-link>
		<p id="aC_PopularCategory">热门品类</p>
		<ul id="aC_ul">
			<li>
				<router-link to="">
					<img src="../../assets/img/aC_PopularCategory1.webp.jpg"/>
					<P>壁挂式空调</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aC_PopularCategory2.webp.jpg"/>
					<P>立柜式空调</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aC_PopularCategory3.webp.jpg"/>
					<P>中央空调</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aC_PopularCategory4.jpg"/>
					<P>移动空调</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
				</router-link>
			</li>
			<li>
				<router-link to="">
				</router-link>
			</li>
		</ul>
		<p id="aC_hotItem">热门单品</p>
	    <ul id="aC_ul2">
	    	<li>
				<router-link to="">
					<div class="aC_hotItem_info">
						<img src="../../assets/img/aC_hotItem1.webp.jpg"/>
						<p class="aC_hotItem_name">【预售】大1.5匹 变频空调挂机 冷暖壁挂式 智能云控  KFR-35GW/WDBN8A3@</p>
						<span class="aC_th">限时特惠</span>
						<span class="aC_news">新品</span>
						<p class="aC_hotItem_elseInfo">
							<span class="aC_hotItem_price">
								￥2399.00
							</span>
							<span class="aC_hotItem_proprice">
								￥2299
							</span>
							<span class="aC_hotItem_pro"><em>PRO</em></span>
							<span class="aC_hotItem_comments">评论2255条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="aC_hotItem_info">
						<img src="../../assets/img/aC_hotItem2.webp.jpg"/>
						<p class="aC_hotItem_name">空调大1.5匹定速挂机 智能冷暖壁挂式 KFR-35GW/WDAD3@</p>
						<span class="aC_th">限时特惠</span>
						<span class="aC_news">新品</span>
						<p class="aC_hotItem_elseInfo">
							<span class="aC_hotItem_price">
								￥2099.00
							</span>
							<span class="aC_hotItem_proprice">
								￥2029
							</span>
							<span class="aC_hotItem_pro"><em>PRO</em></span>
							<span class="aC_hotItem_comments">评论1409条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="aC_hotItem_info">
						<img src="../../assets/img/aC_hotItem2.webp.jpg"/>
						<p class="aC_hotItem_name">【预售】空调大1匹定速挂机 智能冷暖壁挂式 KFR-26GW/WDAD3@</p>
						<span class="aC_th">限时特惠</span>
						<span class="aC_news">新品</span>
						<p class="aC_hotItem_elseInfo">
							<span class="aC_hotItem_price">
								￥1899.00
							</span>
							<span class="aC_hotItem_proprice">
								￥1829
							</span>
							<span class="aC_hotItem_pro"><em>PRO</em></span>
							<span class="aC_hotItem_comments">评论1668条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="aC_hotItem_info">
						<img src="../../assets/img/aC_hotItem4.webp.jpg"/>
						<p class="aC_hotItem_name">【预售】空调 变频大1匹 智能冷暖挂机 KFR-26GW/WDAA3@ </p>
						<span class="aC_th">限时特惠</span>
						<span class="aC_news">新品</span>
						<p class="aC_hotItem_elseInfo">
							<span class="aC_hotItem_price">
								￥1999.00
							</span>
							<span class="aC_hotItem_proprice">
								￥1929
							</span>
							<span class="aC_hotItem_pro"><em>PRO</em></span>
							<span class="aC_hotItem_comments">评论3100条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li></li>
	    </ul>
	</main>
</template>

<script>
</script>

<style scoped>
	#airConditioning{
		width: 100%;
		overflow: hidden;
	}
	#aC_headerPic{
		width: 100%;
	}
	#aC_PopularCategory{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
	}
	#aC_ul{
		width: 100%;
		height: 254px;
	}
	#aC_ul li{
		width: calc(100% / 3);
		box-sizing:border-box;
		height: 127px;
		border: 1px solid #eee;
		text-align: center;
		float: left;
	}
	#aC_ul p{
		font-size: 12px;
   		color: #333;
		margin-top: 5px;
	}
	#aC_ul img{
		width: 78px;
		height: 78px;
		margin: 0 auto;
		margin-top: 15px;
	}
	#aC_hotItem{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
        border-bottom: 1px solid #eee;
	}
	#aC_ul2{
		width: 100%;
	}
	#aC_ul2 li{
		width: 100%;
		height: 120px;
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
    	display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
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
	    color: #ff3300;
	    font-size: 16px;
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
		margin-top: 5px;
	}
	.aC_hotItem_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 0.664rem;
		line-height: 13px;
		text-align: center;
	}
	.aC_hotItem_comments{
		float: right;
		color: #999;
    	font-size: 12px;
    	padding-right: 10px;
	}
</style>
