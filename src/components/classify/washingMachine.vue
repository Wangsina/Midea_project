<template>
	<main id="washingMachine">
		<router-link to=""><img id="wM_headerPic" src="../../assets/img/wM_headerPic.webp.jpg"/></router-link>
		<p id="wM_PopularCategory">热门品类</p>
		<ul id="wM_ul">
			<li>
				<router-link to="">
					<img src="../../assets/img/wM_PopularCategory1.webp.jpg"/>
					<P>滚筒洗衣机</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/wM_PopularCategory2.webp.jpg"/>
					<P>波轮洗衣机</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/wM_PopularCategory3.webp.jpg"/>
					<P>双缸洗衣机</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/wM_PopularCategory4.webp.jpg"/>
					<P>干衣机</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/wM_PopularCategory5.webp.jpg"/>
					<P>单脱机</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/wM_PopularCategory6.webp.jpg"/>
					<P>复式洗衣机</P>
				</router-link>
			</li>
		</ul>
		<p id="wM_hotItem">热门单品</p>
	    <ul id="wM_ul2">
	    	<li>
				<router-link to="">
					<div class="wM_hotItem_info">
						<img src="../../assets/img/wM_hotItem1.webp.jpg"/>
						<p class="wM_hotItem_name">滚筒洗衣机 8KG  新风祛味  溶旋风科技 蓝牙配网  MG80T1WD</p>
						<span class="wM_th">限时特惠</span>
						<span class="wM_news">新品</span>
						<p class="wM_hotItem_elseInfo">
							<span class="wM_hotItem_price">
								￥3199.00
							</span>
							<span class="wM_hotItem_comments">评论33条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="wM_hotItem_info">
						<img src="../../assets/img/wM_hotItem2.webp.jpg"/>
						<p class="wM_hotItem_name">洗烘一体机 10KG变频 深层除螨 全智能烘干 MD100V332DG5</p>
						<span class="wM_th">限时特惠</span>
						<p class="wM_hotItem_elseInfo">
							<span class="wM_hotItem_price">
								￥3099.00
							</span>
							<span class="wM_hotItem_proprice">
								￥2799
							</span>
							<span class="wM_hotItem_pro"><em>PRO</em></span>
							<span class="wM_hotItem_comments">评论107条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="wM_hotItem_info">
						<img src="../../assets/img/wM_hotItem3.webp.jpg"/>
						<p class="wM_hotItem_name">滚筒洗衣机 8KG变频 一级能效  wifi控制 MG80V330WDX</p>
						<span class="wM_th">限时特惠</span>
						<span class="wM_news">新品</span>
						<p class="wM_hotItem_elseInfo">
							<span class="wM_hotItem_price">
								￥1699.00
							</span>
							<span class="wM_hotItem_proprice">
								￥1599
							</span>
							<span class="wM_hotItem_pro"><em>PRO</em></span>
							<span class="wM_hotItem_comments">评论2827条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="wM_hotItem_info">
						<img src="../../assets/img/wM_hotItem4.webp.jpg"/>
						<p class="wM_hotItem_name">波轮洗衣机 10KG 喷瀑水流 8大程序 MB100V31</p>
						<span class="wM_th">限时特惠</span>
						<span class="wM_news">新品</span>
						<p class="wM_hotItem_elseInfo">
							<span class="wM_hotItem_price">
								￥1399.00
							</span>
							<span class="wM_hotItem_proprice">
								￥1299
							</span>
							<span class="wM_hotItem_pro"><em>PRO</em></span>
							<span class="wM_hotItem_comments">评论281条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="wM_hotItem_info">
						<img src="../../assets/img/wM_hotItem5.webp.jpg"/>
						<p class="wM_hotItem_name">波轮洗衣机  9KG 智能三水位 8段水位选择  MB90V31D</p>
						<span class="wM_th">限时特惠</span>
						<span class="wM_news">新品</span>
						<p class="wM_hotItem_elseInfo">
							<span class="wM_hotItem_price">
								￥1399.00
							</span>
							<span class="wM_hotItem_proprice">
								￥1299
							</span>
							<span class="wM_hotItem_pro"><em>PRO</em></span>
							<span class="wM_hotItem_comments">评论355条</span>
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
	#washingMachine{
		width: 100%;
		overflow: hidden;
	}
	#wM_headerPic{
		width: 100%;
	}
	#wM_PopularCategory{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
	}
	#wM_ul{
		width: 100%;
		height: 254px;
	}
	#wM_ul li{
		width: calc(100% / 3);
		box-sizing:border-box;
		height: 127px;
		border: 1px solid #eee;
		text-align: center;
		float: left;
	}
	#wM_ul p{
		font-size: 12px;
   		color: #333;
		margin-top: 5px;
	}
	#wM_ul img{
		width: 78px;
		height: 78px;
		margin: 0 auto;
		margin-top: 15px;
	}
	#wM_hotItem{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
        border-bottom: 1px solid #eee;
	}
	#wM_ul2{
		width: 100%;
	}
	#wM_ul2 li{
		width: 100%;
		height: 120px;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	.wM_hotItem_info{
		width: 100%;
		height: 75px;
		margin-top: 22.5px;
		/*background-color: pink;*/
	}
	.wM_hotItem_info img{
		width: 75px;
		height: 75px;
		padding-left: 15px;
		padding-right: 15px;
		float: left;
	}
	.wM_hotItem_name{
		color: #333;
		font-size: 12px;
    	line-height: 18px;
    	display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.wM_th{
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
	.wM_news{
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
	.wM_hotItem_elseInfo{
		/*padding-top: 2px;*/
	}
	.wM_hotItem_price{
	    color: #ff3300;
	    font-size: 16px;
	}
	.wM_hotItem_proprice{
		color: dimgray;
		margin-left: 3px;
	    font-size: 13px;
	}
	.wM_hotItem_pro{
		display: inline-block;
		width: 28px;
		height: 13px;
		/*float: left;*/
		background-color: #242733;
		margin-left: 5px;
		margin-top: 5px;
	}
	.wM_hotItem_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 0.664rem;
		line-height: 13px;
		text-align: center;
	}
	.wM_hotItem_comments{
		float: right;
		color: #999;
    	font-size: 12px;
    	padding-right: 10px;
	}
</style>
