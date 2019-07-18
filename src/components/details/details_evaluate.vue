<template>
	<main id="details_evaluate">
		<div id="de_discuss">
			<h4>总体评价</h4>
			<img src="../../assets/img/detials_evaluate_pic.png"/>
		    <h4 class="margint">用户印象</h4>
		    <h4 class="margintt">商品评价</h4>
		</div>
		<div id="dc_evaluate_box">
			<img src="../../assets/img/details_commodity_touxiang.jpeg"/>
			<span class="dc_eb_span1">0***0</span>
			<span class="dc_eb_span2">2019-7-14</span>
			<p>很满意</p>
		</div>
		<div id="dc_evaluate_box" class="margint">
			<img src="../../assets/img/details_commodity_touxiang2.jpeg"/>
			<span class="dc_eb_span1">小***虾</span>
			<span class="dc_eb_span2">2019-7-13</span>
			<p>外观很漂亮，还没来得及用！</p>
		</div>
	</main>
</template>

<script>
</script>

<style scoped>
	.margint{
		margin-top: 20px;
	}
	.margintt{
		margin-top: 30px;
	}
	#details_evaluate{
		width: 100%;
		height: 820px;
		background-color: #f4f4f4;
	}
	#de_discuss{
		padding: 25px 15px 20px;
		background-color: white;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
	}
	#de_discuss h4{
		font-size: 14px;
	    line-height: 14px;
	    color: #000;
	}
	#de_discuss img{
		height: 24px;
	    width: 122px;
	    margin-top: 10px;
	}
	#dc_evaluate_box{
		padding: 15px 20px 15px 5%;
		background-color: white;
		overflow: hidden;
		border-bottom: 1px solid #f4f4f4;
	}
	#dc_evaluate_box img{
		width: 32px;
	    height: 32px;
	    border-radius: 15px;
	    float: left;
	    border-bottom: 1px solid #eee;
	}
	.dc_eb_span1{
		display: block;
		float: left;
		height: 32px;
		line-height: 32px;
		color: #666;
		font-size: 12px;
		margin-left: 15px;
	}
	.dc_eb_span2{
		display: block;
		float: right;
		height: 32px;
		color: #666;
		font-size: 15px;
	}
	#dc_evaluate_box p{
		font-size: 12px;
	    color: #747474;
	    margin-top: 45px;
	}
</style>