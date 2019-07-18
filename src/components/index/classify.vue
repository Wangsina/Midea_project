<template>
	<main id="classify">
		<div id="classify_header">
			<p>商品分类</p>
		</div>
		<aside id="classify_navSide">
			<ul id="classify_navSide_ul">
				<li @click="msg='airConditioning'" :class="{active:msg=='airConditioning'}" class="classify_navSide_li">
					<span class="cf_navSide_icon midea-icon icon_category_hover icon-air_conditioner"></span>
					<span class="cf_navSide_iconText">空调</span>
				</li>
				<li @click="msg='refrigerator'" :class="{active:msg=='refrigerator'}" class="classify_navSide_li">
					<span class="cf_navSide_icon midea-icon icon_category icon-refrigerator"></span>
					<span class="cf_navSide_iconText">冰箱</span>
				</li>
				<li @click="msg='washingMachine'" :class="{active:msg=='washingMachine'}" class="classify_navSide_li">
					<span class="cf_navSide_icon midea-icon icon_category icon-washing_machine"></span>
					<span class="cf_navSide_iconText">洗衣机</span>
				</li>
				<li @click="msg='smallAppliances'" :class="{active:msg=='smallAppliances'}" class="classify_navSide_li">
					<span class="cf_navSide_icon midea-icon icon_category icon-kitchen_small_appliances"></span>
					<span class="cf_navSide_iconText">厨房小电器</span>
				</li>
				<li @click="msg='bigAppliances'" :class="{active:msg=='bigAppliances'}" class="classify_navSide_li">
					<span class="cf_navSide_icon midea-icon icon_category icon-kitchen_major_appliances"></span>
					<span class="cf_navSide_iconText">厨房大电器</span>
				</li>
				<li @click="msg='lifeAppliances'" :class="{active:msg=='lifeAppliances'}" class="classify_navSide_li">
					<span class="cf_navSide_icon midea-icon icon_category icon-home_appliances"></span>
					<span class="cf_navSide_iconText">生活家电</span>
				</li>
				<li @click="msg='hotAndpurific'" :class="{active:msg=='hotAndpurific'}" class="classify_navSide_li">
					<span class="cf_navSide_icon midea-icon icon_category_hover icon-calorifier"></span>
					<span class="cf_navSide_iconText">热水/净水</span>
				</li>
				<li @click="msg='accessoriesAndperipherals'" :class="{active:msg=='accessoriesAndperipherals'}" class="classify_navSide_li">
					<span class="cf_navSide_icon midea-icon icon_category icon-fittings"></span>
					<span class="cf_navSide_iconText">配件及周边</span>
				</li>
			</ul>
		</aside>
		<section id="classify_right">
			<component :is="msg"></component>
		</section>
	</main>
</template>

<script>
	import airConditioning from '../classify/airConditioning.vue'
	import refrigerator from '../classify/refrigerator.vue'
	import washingMachine from '../classify/washingMachine.vue'
	import smallAppliances from '../classify/smallAppliances.vue'
	import bigAppliances from '../classify/bigAppliances.vue'
	import lifeAppliances from '../classify/lifeAppliances.vue'
	import hotAndpurific from '../classify/hotAndpurific.vue'
	import accessoriesAndperipherals from '../classify/accessoriesAndperipherals.vue'
	export default{
		data(){
			return{
				msg:'airConditioning'
			}
		},
		components:{
			'airConditioning': airConditioning,
			'refrigerator': refrigerator,
			'washingMachine': washingMachine,
			'smallAppliances': smallAppliances,
			'bigAppliances': bigAppliances,
			'lifeAppliances': lifeAppliances,
			'hotAndpurific': hotAndpurific,
			'accessoriesAndperipherals': accessoriesAndperipherals
		}
	}
</script>

<style scoped>
	#classify{
		/*border: 1px solid black;*/
		/*position: relative;*/
		overflow: hidden;
		/*border: 1px solid #eee;*/
		background-color: white;
	}
	#classify_header{
		width: 100%;
		height: 44px;
		border: 1px solid #eee;
		background-color: white;
		float: left;
		/*max-width: 750px;*/
		position: fixed;
		top: 0;
	}
	#classify_header p{
		display: block;
		font-size: 18px;
	    line-height: 44px;
	    color: #0093d5;
	    font-weight: normal;
	    text-align: center;
	}
	/*#bigbox{
		display: flex;
	}*/
	#classify_navSide{
		width: 75px;
		height: calc(100% - 93px);
		background-color: #f4f4f4;
		float: left;
		position: fixed;
		top: 45px;
	}
	/*菜单栏点击变色*/
	.active{
		color: #0092d8;
	}
	#classify_navSide_ul{
		width: 100%;
		height: 100%;
		overflow: hidden;
		border: 1px solid #eee;
		box-sizing: border-box;
		/*background-color: pink;*/
	}
	.classify_navSide_li{
		width: 100%;
		height: calc((100vh - 93px) / 9);
		border-bottom: 1px solid #eee;
		text-align: center;
		overflow: hidden;
		box-sizing: border-box;
		/*background-color: #006FA3;*/
	}
	.classify_navSide_li:nth-child(8){
		border: none;
	}
	.cf_navSide_icon{
		display: block;
		font-size: 3vh;
		margin-top: 1.8vh;
	}
	.cf_navSide_iconText{
		display: block;
		font-size: 1vh;
		margin-top: 0.5vh;
	}
	#classify_right{
		width: calc(100% - 75px);
		/*width: auto;*/
		/*height: 2000px;*/
		float: right;
		margin-top: 45px;
		/*background-color: skyblue;*/
	}
</style>