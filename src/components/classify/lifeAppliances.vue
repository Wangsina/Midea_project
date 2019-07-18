<template>
	<main id="lifeAppliances">
		<router-link to=""><img id="lA_headerPic" src="../../assets/img/lA_headerPic.webp.jpg"/></router-link>
		<p id="lA_PopularCategory">热门品类</p>
		<ul id="lA_ul">
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory1.webp.jpg"/>
					<P>电风扇</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory2.webp.jpg"/>
					<P>空调扇/塔扇</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory3.webp.jpg"/>
					<P>除湿机</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory4.webp.jpg"/>
					<P>电水壶</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory5.webp.jpg"/>
					<P>电热水瓶</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory6.webp.jpg"/>
					<P>空气净化器</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory7.webp.jpg"/>
					<P>挂烫机</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory8.webp.jpg"/>
					<P>吸尘器</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory9.webp.jpg"/>
					<P>扫地机器人</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory10.webp.jpg"/>
					<P>加湿器</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory11.webp.jpg"/>
					<P>电暖器</P>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<img src="../../assets/img/lA_PopularCategory12.webp.jpg"/>
					<P>净化器滤网</P>
				</router-link>
			</li>
		</ul>
		<p id="lA_hotItem">热门单品</p>
	    <ul id="lA_ul2">
	    	<li>
				<router-link to="">
					<div class="lA_hotItem_info">
						<img src="../../assets/img/lA_hotItem1.webp.jpg"/>
						<p class="lA_hotItem_name">电风扇 家用五叶静音落地扇 八档风速 无线遥控SAB40BR</p>
						<span class="lA_th">限时特惠</span>
						<span class="aC_news">新品</span>
						<p class="lA_hotItem_elseInfo">
							<span class="lA_hotItem_price">
								￥229.00
							</span>
							<span class="lA_hotItem_proprice">
								￥218
							</span>
							<span class="lA_hotItem_pro"><em>PRO</em></span>
							<span class="lA_hotItem_comments">评论1124条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="lA_hotItem_info">
						<img src="../../assets/img/lA_hotItem2.webp.jpg"/>
						<p class="lA_hotItem_name">养生壶 1.5L 304不锈钢 底盘+滤网 智能防溢出 MK-GE1703</p>
						<span class="lA_th">狂暑季</span>
						<span class="aC_news">新品</span>
						<p class="lA_hotItem_elseInfo">
							<span class="lA_hotItem_price">
								￥169.00
							</span>
							<span class="lA_hotItem_proprice">
								￥161
							</span>
							<span class="lA_hotItem_pro"><em>PRO</em></span>
							<span class="lA_hotItem_comments">评论1820条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="lA_hotItem_info">
						<img src="../../assets/img/lA_hotItem3.webp.jpg"/>
						<p class="lA_hotItem_name">除螨仪 滚刷拍打 四重过滤 紫外线杀菌  B5（VM1712）</p>
						<span class="lA_th">热卖</span>
						<p class="lA_hotItem_elseInfo">
							<span class="lA_hotItem_price">
								￥599.00
							</span>
							<span class="lA_hotItem_comments">评论414条</span>
						</p>
					</div>
				</router-link>
			</li>
			<li>
				<router-link to="">
					<div class="lA_hotItem_info">
						<img src="../../assets/img/lA_hotItem4.webp.jpg"/>
						<p class="lA_hotItem_name"> 吸尘器 低噪强力除尘无耗材 C3-L148B红色</p>
						<p class="lA_hotItem_elseInfo">
							<span class="lA_hotItem_price">
								￥399.00
							</span>
							<span class="lA_hotItem_comments">评论683条</span>
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
	#lifeAppliances{
		width: 100%;
		overflow: hidden;
	}
	#lA_headerPic{
		width: 100%;
	}
	#lA_PopularCategory{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
	}
	#lA_ul{
		width: 100%;
		height: 508px;
	}
	#lA_ul li{
		width: calc(100% / 3);
		box-sizing:border-box;
		height: 127px;
		border: 1px solid #eee;
		text-align: center;
		float: left;
	}
	#lA_ul p{
		font-size: 12px;
   		color: #333;
		margin-top: 5px;
	}
	#lA_ul img{
		width: 78px;
		height: 78px;
		margin: 0 auto;
		margin-top: 15px;
	}
	#lA_hotItem{
		display: block;
		width: 100%;
		height: 44px;
		line-height: 44px;
		color: #999;
        font-size: 12px;
        padding-left: 30px;
        border-bottom: 1px solid #eee;
	}
	#lA_ul2{
		width: 100%;
	}
	#lA_ul2 li{
		width: 100%;
		height: 120px;
		border-bottom: 1px solid #eee;
		overflow: hidden;
	}
	.lA_hotItem_info{
		width: 100%;
		height: 75px;
		margin-top: 22.5px;
		/*background-color: pink;*/
	}
	.lA_hotItem_info img{
		width: 75px;
		height: 75px;
		padding-left: 15px;
		padding-right: 15px;
		float: left;
	}
	.lA_hotItem_name{
		color: #333;
		font-size: 12px;
    	line-height: 18px;
    	display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
	}
	.lA_th{
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
	.lA_news{
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
	.lA_hotItem_elseInfo{
		/*padding-top: 2px;*/
	}
	.lA_hotItem_price{
	    color: #ff3300;
	    font-size: 16px;
	}
	.lA_hotItem_proprice{
		color: dimgray;
		margin-left: 3px;
	    font-size: 13px;
	}
	.lA_hotItem_pro{
		display: inline-block;
		width: 28px;
		height: 13px;
		/*float: left;*/
		background-color: #242733;
		margin-left: 5px;
		margin-top: 5px;
	}
	.lA_hotItem_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 0.664rem;
		line-height: 13px;
		text-align: center;
	}
	.lA_hotItem_comments{
		float: right;
		color: #999;
    	font-size: 12px;
    	padding-right: 10px;
	}
</style>
