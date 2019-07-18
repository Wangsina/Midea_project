<template>
	<main id="login">
		<div id="login_check">
			<div @click="back()" id="login_goback">
				<img src="../../assets/img/zuojiantou.svg"/>
			</div>
			<ul id="login_checkText">
				<li @click="msg='login_account'" :class="{login_active:msg=='login_account'}">
					<span class="login_checkText_span1">账号密码登录</span>
				</li>
				<li @click="msg='login_phone'" :class="{login_active:msg=='login_phone'}">
					<span class="login_checkText_span1">短信验证码登录</span>
				</li>
			</ul>
		</div>
		<section id="login_choose">
			<component :is="msg"></component>
		</section>
	</main>
</template>

<script>
	import login_account from '../login/login_account.vue'
	import login_phone from '../login/login_phone.vue'
	export default{
		data(){
			return{
				msg:'login_account'
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		},
		components:{
			'login_account': login_account,
			'login_phone': login_phone
		}
	}
</script>

<style scoped>
	#login{
		width: 100%;
		/*max-width: 750px;*/
		min-height: 100vh;
		/*border: 1px solid #eee;*/
		background-color: #eef3fa;
	}
	#login_check{
		width: 100%;
		height: 44px;
		background-color: white;
		border-bottom: 1px solid #eee;
	}
	#login_goback{
		width: 50px;
		height: 100%;
		float: left;
		/*background-color: #A7D1E4;*/
	}
	#login_goback img{
		width: 25px;
		height: 20px;
		margin-left: 12.5px;
		margin-top: 12px;
	}
	#login_checkText{
		width: 80%;
		height: 100%;
		text-align: center;
		float: left;
		/*background-color: antiquewhite;*/
	}
	#login_checkText li{
		width: 50%;
		float: left;
		height: 42px;
    	line-height: 50px;
    	font-size: 0.932rem;
    	/*color: #333;*/
	}
	.login_checkText_span1{
		display: block;
		width: 120px;
		margin: 0 auto;
		height: 100%;
	}
	.login_active span{
	  	border-bottom: 2px solid #0092d8;
	  	color: #0093d5;
	}
	#login_choose{
		width: 100%;
		height: 150px;
		/*background-color: pink;*/
	}
</style>