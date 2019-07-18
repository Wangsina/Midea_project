<template>
	<main>
	      <router-view></router-view>
	      <ul>
	        <li>
	          <router-link to="/index"><span class="icon midea-icon icon-home_stroke  icon_global_index icon_indexpage"></span><span class="text">首页</span></router-link>
	        </li>
	        <li>
	          <router-link to="/classify"><span class="icon midea-icon icon-sort_stroke icon_global_index icon_category"></span><span class="text">分类</span></router-link>
	        </li>
	        <li>
	          <router-link to="/activity"><span class="icon midea-icon icon-pending_post icon_global_index icon_act"></span><span class="text">活动</span></router-link>
	        </li>
	        <li>
	          <router-link to="/buyCar"><span class="icon midea-icon icon-cart_stroke icon_global_index icon_shopcart"></span><span class="text">购物车</span></router-link>
	        </li>
	        <li>	          
	          <router-link to="/my"><span class="icon midea-icon icon-user_stroke icon_global_index icon_user"></span><span class="text">我的</span></router-link>
	        </li>
	      </ul>
	</main>
</template>

<script>
	
</script>

<style scoped>
	ul{
		position: fixed;
		
		bottom: 0;
		list-style: none;
		left: 50%;
		width: 100%;
		height: 47px;
		/*max-width: 750px;*/
		transform: translateX(-50%);
		background-color: white;
		border: 1px solid #eee;
	}
	li{
		width: 20%;
		height: 100%;
		text-align: center;
		float: left;
	}
	.icon{
		display: block;
		margin-top: 5px;
	    font-size: 25px;
		color: #929292;
	}
	.text{
		display: block;
		color: #929292;
		font-size: 10px;
	}
	.router-link-exact-active span{
		color: #0092d8;
	}
	.router-link-exact-active span::before{
		color: #0092d8;
	}
</style>

