<template>
	<main id="refrigerator">
		<router-link to=""><img id="rf_headerPic" src="../../assets/img/rf_headerPic.webp.jpg"/></router-link>
		<p id="rf_PopularCategory">热门品类</p>
		<ul id="rf_ul">
			<li>
				<router-link to="">
					<img src="../../assets/img/rf_PopularCategory1.webp.jpg"/>
					<P>单门冰箱</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/rf_PopularCategory2.webp.jpg"/>
					<P>双门冰箱</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/rf_PopularCategory3.webp.jpg"/>
					<P>多门冰箱</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/rf_PopularCategory4.webp.jpg"/>
					<P>对开门冰箱</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/rf_PopularCategory5.webp.jpg"/>
					<P>三门冰箱</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/rf_PopularCategory6.webp.jpg"/>
					<P>冷柜</P>
				</router-link>
			</li>
		</ul>
		<p id="rf_hotItem">热门单品</p>
	    <ul id="rf_ul2">
	    	<li>
				<router-link to="">
					<div class="rf_hotItem_info">
						<img src="../../assets/img/rf_hotItem1.webp.jpg"/>
						<p class="rf_hotItem_name">【新品推荐】美的（Midea） 三门冰箱 风冷无霜家用节能电冰箱 BCD-258WTM(E)阳光米</p>
						<span class="rf_th">限时特惠</span>
						<p class="rf_hotItem_elseInfo">
							<span class="rf_hotItem_price">
								￥2099.00
							</span>
							<span class="rf_hotItem_proprice">
								￥1999
							</span>
							<span class="rf_hotItem_pro"><em>PRO</em></span>
							<span class="rf_hotItem_comments">评论2255条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="rf_hotItem_info">
						<img src="../../assets/img/rf_hotItem2.webp.jpg"/>
						<p class="rf_hotItem_name">【新品推荐】美的 621升双门电冰箱 智能变频风冷无霜 对开门冰箱BCD-621WKPZM(E）</p>
						<span class="rf_th">限时特惠</span>
						<span class="rf_news">新品</span>
						<p class="rf_hotItem_elseInfo">
							<span class="rf_hotItem_price">
								￥3099.00
							</span>
							<span class="rf_hotItem_proprice">
								￥2899
							</span>
							<span class="rf_hotItem_pro"><em>PRO</em></span>
							<span class="rf_hotItem_comments">评论2255条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="rf_hotItem_info">
						<img src="../../assets/img/rf_hotItem3.webp.jpg"/>
						<p class="rf_hotItem_name">[热卖]美的冰箱 468升 十字对开门冰箱 风冷无霜 电脑控温 BCD-468WTPM(E)冰箱</p>
						<span class="rf_th">限时特惠</span>
						<span class="rf_news">新品</span>
						<p class="rf_hotItem_elseInfo">
							<span class="rf_hotItem_price">
								￥3299.00
							</span>
							<span class="rf_hotItem_proprice">
								￥3099
							</span>
							<span class="rf_hotItem_pro"><em>PRO</em></span>
							<span class="rf_hotItem_comments">评论2255条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="rf_hotItem_info">
						<img src="../../assets/img/rf_hotItem4.webp.jpg"/>
						<p class="rf_hotItem_name">【新品推荐】美的（Midea） 318升多门冰箱风冷无霜智能变频BCD-318WTPZM(E)爵士棕 </p>
						<span class="rf_th">限时特惠</span>
						<span class="rf_news">新品</span>
						<p class="rf_hotItem_elseInfo">
							<span class="rf_hotItem_price">
								￥2699.00
							</span>
							<span class="rf_hotItem_comments">评论2255条</span>
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
	#refrigerator{
		width: 100%;
		overflow: hidden;
	}
	#rf_headerPic{
		width: 100%;
	}
	#rf_PopularCategory{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
	}
	#rf_ul{
		width: 100%;
		height: 254px;
	}
	#rf_ul li{
		width: calc(100% / 3);
		box-sizing:border-box;
		height: 127px;
		border: 1px solid #eee;
		text-align: center;
		float: left;
	}
	#rf_ul p{
		font-size: 12px;
   		color: #333;
		margin-top: 5px;
	}
	#rf_ul img{
		width: 78px;
		height: 78px;
		margin: 0 auto;
		margin-top: 15px;
	}
	#rf_hotItem{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
        border-bottom: 1px solid #eee;
	}
	#rf_ul2{
		width: 100%;
	}
	#rf_ul2 li{
		width: 100%;
		height: 120px;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	.rf_hotItem_info{
		width: 100%;
		height: 75px;
		margin-top: 22.5px;
		/*background-color: pink;*/
	}
	.rf_hotItem_info img{
		width: 75px;
		height: 75px;
		padding-left: 15px;
		padding-right: 15px;
		float: left;
	}
	.rf_hotItem_name{
		color: #333;
		font-size: 12px;
    	line-height: 18px;
    	display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.rf_th{
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
	.rf_news{
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
	.rf_hotItem_elseInfo{
		/*padding-top: 2px;*/
	}
	.rf_hotItem_price{
	    color: #ff3300;
	    font-size: 16px;
	}
	.rf_hotItem_proprice{
		color: dimgray;
		margin-left: 3px;
	    font-size: 13px;
	}
	.rf_hotItem_pro{
		display: inline-block;
		width: 28px;
		height: 13px;
		/*float: left;*/
		background-color: #242733;
		margin-left: 5px;
		margin-top: 5px;
	}
	.rf_hotItem_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 0.664rem;
		line-height: 13px;
		text-align: center;
	}
	.rf_hotItem_comments{
		float: right;
		color: #999;
    	font-size: 12px;
    	padding-right: 10px;
	}
</style>
