<template>
	<main id="accessoriesAndperipherals">
		<router-link to=""><img id="aAp_headerPic" src="../../assets/img/aAp_headerPic.webp.jpg"/></router-link>
		<p id="aAp_PopularCategory">热门品类</p>
		<ul id="aAp_ul">
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory1.webp.jpg"/>
					<P>Abiu生活周边</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory2.webp.jpg"/>
					<P>礼品卡</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory3.webp.jpg"/>
					<P>清洗服务</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory4.webp.jpg"/>
					<P>插座</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory5.webp.jpg"/>
					<P>灯</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory6.webp.jpg"/>
					<P>红酒</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory7.webp.jpg"/>
					<P>智能门锁</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory8.webp.jpg"/>
					<P>路由器</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory9.webp.jpg"/>
					<P>咖啡机胶囊</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory10.jpg"/>
					<P>洗碗机洗涤剂</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/aAp_PopularCategory11.jpg"/>
					<P>空调遥控器</P>
				</router-link>
			</li>
			<li></li>
		</ul>
		<p id="aAp_hotItem">热门单品</p>
	    <ul id="aAp_ul2">
	    	<li>
				<router-link to="">
					<div class="aAp_hotItem_info">
						<img src="../../assets/img/aAp_hotItem1.webp.jpg"/>
						<p class="aAp_hotItem_name">智悦 LED台灯 五档调光 充电款 MTD5-M/K-02</p>
						<p class="aAp_hotItem_elseInfo">
							<span class="aAp_hotItem_price">
								￥159.00
							</span>
							<span class="aAp_hotItem_proprice">
								￥156
							</span>
							<span class="aAp_hotItem_pro"><em>PRO</em></span>
							<span class="aAp_hotItem_comments">评论5条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="aAp_hotItem_info">
						<img src="../../assets/img/aAp_hotItem2.webp.jpg"/>
						<p class="aAp_hotItem_name">洗碗机洗涤剂 水卫仕洗涤套装 洗碗粉+漂洗剂+软水盐</p>
						<span class="aAp_th">限时特惠</span>
						<p class="aAp_hotItem_elseInfo">
							<span class="aAp_hotItem_price">
								￥99.00
							</span>
							<span class="aAp_hotItem_comments">评论6条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="aAp_hotItem_info">
						<img src="../../assets/img/aAp_hotItem3.webp.jpg"/>
						<p class="aAp_hotItem_name">【不限品牌】清洗服务 空调挂机深度清洗上门服务</p>
						<span class="aAp_th">限时特惠</span>
						<p class="aAp_hotItem_elseInfo">
							<span class="aAp_hotItem_price">
								￥89.00
							</span>
							<span class="aAp_hotItem_proprice">
								￥78
							</span>
							<span class="aAp_hotItem_pro"><em>PRO</em></span>
							<span class="aAp_hotItem_comments">评论448条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="aAp_hotItem_info">
						<img src="../../assets/img/aAp_hotItem4.webp.jpg"/>
						<p class="aAp_hotItem_name">【不限品牌】清洗服务 油烟机深度清洗上门服务 </p>
						<span class="aAp_th">限时特惠</span>
						<p class="aAp_hotItem_elseInfo">
							<span class="aAp_hotItem_price">
								￥169.00
							</span>
							<span class="aAp_hotItem_proprice">
								￥149
							</span>
							<span class="aAp_hotItem_pro"><em>PRO</em></span>
							<span class="aAp_hotItem_comments">评论243条</span>
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
	#accessoriesAndperipherals{
		width: 100%;
		overflow: hidden;
	}
	#aAp_headerPic{
		width: 100%;
	}
	#aAp_PopularCategory{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
	}
	#aAp_ul{
		width: 100%;
		height: 508px;
	}
	#aAp_ul li{
		width: calc(100% / 3);
		box-sizing:border-box;
		height: 127px;
		border: 1px solid #eee;
		text-align: center;
		float: left;
	}
	#aAp_ul p{
		font-size: 12px;
   		color: #333;
		margin-top: 5px;
	}
	#aAp_ul img{
		width: 78px;
		height: 78px;
		margin: 0 auto;
		margin-top: 15px;
	}
	#aAp_hotItem{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
        border-bottom: 1px solid #eee;
	}
	#aAp_ul2{
		width: 100%;
	}
	#aAp_ul2 li{
		width: 100%;
		height: 120px;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	.aAp_hotItem_info{
		width: 100%;
		height: 75px;
		margin-top: 22.5px;
		/*background-color: pink;*/
	}
	.aAp_hotItem_info img{
		width: 75px;
		height: 75px;
		padding-left: 15px;
		padding-right: 15px;
		float: left;
	}
	.aAp_hotItem_name{
		color: #333;
		font-size: 12px;
    	line-height: 18px;
    	display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.aAp_th{
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
	.aAp_news{
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
	.aAp_hotItem_elseInfo{
		/*padding-top: 2px;*/
	}
	.aAp_hotItem_price{
	    color: #ff3300;
	    font-size: 16px;
	}
	.aAp_hotItem_proprice{
		color: dimgray;
		margin-left: 3px;
	    font-size: 13px;
	}
	.aAp_hotItem_pro{
		display: inline-block;
		width: 28px;
		height: 13px;
		/*float: left;*/
		background-color: #242733;
		margin-left: 5px;
		margin-top: 5px;
	}
	.aAp_hotItem_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 0.664rem;
		line-height: 13px;
		text-align: center;
	}
	.aAp_hotItem_comments{
		float: right;
		color: #999;
    	font-size: 12px;
    	padding-right: 10px;
	}
</style>
