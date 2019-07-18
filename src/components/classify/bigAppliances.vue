<template>
	<main id="bigAppliances">
		<router-link to=""><img id="bA_headerPic" src="../../assets/img/bA_headerPic.webp.jpg"/></router-link>
		<p id="bA_PopularCategory">热门品类</p>
		<ul id="bA_ul">
			<li>
				<router-link to="">
					<img src="../../assets/img/bA_PopularCategory1.webp.jpg"/>
					<P>吸油烟机</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/bA_PopularCategory2.webp.jpg"/>
					<P>消毒柜</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/bA_PopularCategory3.webp.jpg"/>
					<P>燃气灶</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/bA_PopularCategory4.webp.jpg"/>
					<P>烟灶套装</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/bA_PopularCategory5.webp.jpg"/>
					<P>洗碗机</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/bA_PopularCategory6.webp.jpg"/>
					<P>蒸汽灶</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/bA_PopularCategory7.webp.jpg"/>
					<P>嵌入式厨电</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/bA_PopularCategory8.webp.jpg"/>
					<P>厨房垃圾处理器</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
				</router-link>
			</li>
		</ul>
		<p id="bA_hotItem">热门单品</p>
	    <ul id="bA_ul2">
	    	<li>
				<router-link to="">
					<div class="bA_hotItem_info">
						<img src="../../assets/img/bA_hotItem1.webp.jpg"/>
						<p class="bA_hotItem_name">【热销款自清洗】烟灶套装 简约百搭 20m³大吸力+大火力 开合拢烟板 J57+Q216B</p>
						<span class="bA_th">清凉节</span>
						<span class="bA_news">满赠</span>
						<p class="bA_hotItem_elseInfo">
							<span class="bA_hotItem_price">
								￥2599.00
							</span>
							<span class="bA_hotItem_proprice">
								￥2521
							</span>
							<span class="bA_hotItem_pro"><em>PRO</em></span>
							<span class="bA_hotItem_comments">评论36条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="bA_hotItem_info">
						<img src="../../assets/img/bA_hotItem2.webp.jpg"/>
						<p class="bA_hotItem_name">【高端自动感应】烟灶套装 21m³拢烟大吸力 自清洗 全程零手动 4.5KW火力 T59c+Q39</p>
						<span class="bA_th">清凉节</span>
						<span class="bA_news">满赠</span>
						<p class="bA_hotItem_elseInfo">
							<span class="bA_hotItem_price">
								￥3199.00
							</span>
							<span class="bA_hotItem_comments">评论0条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="bA_hotItem_info">
						<img src="../../assets/img/bA_hotItem3.webp.jpg"/>
						<p class="bA_hotItem_name">【送洗涤套装】洗碗机 嵌入式 8套餐具 智能感应油污 3.0热风烘干 节能洗 X3-T</p>
						<span class="bA_th">清凉节</span>
						<p class="bA_hotItem_elseInfo">
							<span class="bA_hotItem_price">
								￥3299.00
							</span>
							<span class="bA_hotItem_proprice">
								￥3200
							</span>
							<span class="bA_hotItem_pro"><em>PRO</em></span>
							<span class="bA_hotItem_comments">评论125条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="bA_hotItem_info">
						<img src="../../assets/img/bA_hotItem4.webp.jpg"/>
						<p class="bA_hotItem_name">【自清洗】吸油烟机 18m³大吸力 玄武黑外观 宽屏拢烟 自动清洗 CXW-268-T39</p>
						<span class="bA_th">惊爆价</span>
						<span class="bA_news">满赠</span>
						<p class="bA_hotItem_elseInfo">
							<span class="bA_hotItem_price">
								￥1799.00
							</span>
							<span class="bA_hotItem_proprice">
								￥1745
							</span>
							<span class="bA_hotItem_pro"><em>PRO</em></span>
							<span class="bA_hotItem_comments">评论49条</span>
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
	#bigAppliances{
		width: 100%;
		overflow: hidden;
	}
	#bA_headerPic{
		width: 100%;
	}
	#bA_PopularCategory{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
	}
	#bA_ul{
		width: 100%;
		height: 381px;
	}
	#bA_ul li{
		width: calc(100% / 3);
		box-sizing:border-box;
		height: 127px;
		border: 1px solid #eee;
		text-align: center;
		float: left;
	}
	#bA_ul p{
		font-size: 12px;
   		color: #333;
		margin-top: 5px;
	}
	#bA_ul img{
		width: 78px;
		height: 78px;
		margin: 0 auto;
		margin-top: 15px;
	}
	#bA_hotItem{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
        border-bottom: 1px solid #eee;
	}
	#bA_ul2{
		width: 100%;
	}
	#bA_ul2 li{
		width: 100%;
		height: 120px;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	.bA_hotItem_info{
		width: 100%;
		height: 75px;
		margin-top: 22.5px;
		/*background-color: pink;*/
	}
	.bA_hotItem_info img{
		width: 75px;
		height: 75px;
		padding-left: 15px;
		padding-right: 15px;
		float: left;
	}
	.bA_hotItem_name{
		color: #333;
		font-size: 12px;
    	line-height: 18px;
    	display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.bA_th{
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
	.bA_news{
		display: inline-block;
		width: 30px;
		height: 15px;
		background-color: #ff6600;
		color: #fff;
    	font-size: 11px;
    	line-height: 15px;
    	text-align: center;
    	margin-top: 5px;
    	margin-left: 3px;
	}
	.bA_hotItem_elseInfo{
		/*padding-top: 2px;*/
	}
	.bA_hotItem_price{
	    color: #ff3300;
	    font-size: 16px;
	}
	.bA_hotItem_proprice{
		color: dimgray;
		margin-left: 3px;
	    font-size: 13px;
	}
	.bA_hotItem_pro{
		display: inline-block;
		width: 28px;
		height: 13px;
		/*float: left;*/
		background-color: #242733;
		margin-left: 5px;
		margin-top: 5px;
	}
	.bA_hotItem_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 0.664rem;
		line-height: 13px;
		text-align: center;
	}
	.bA_hotItem_comments{
		float: right;
		color: #999;
    	font-size: 12px;
    	padding-right: 10px;
	}
</style>
