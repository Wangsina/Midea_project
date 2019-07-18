<template>
	<main id="login_account">
		<div id="login_account_leftbox"></div>
		<div id="login_accountNum">
			<input id="account" type="text" placeholder="请输入手机号" maxlength="11">
		</div>
		<div id="login_account_leftbox"></div>
		<div id="login_accountNum">
			<input id="password" type="password" placeholder="密码" maxlength="11">
		</div>
		<span class="find_pass"><router-link to="">找回密码</router-link></span>
		<div @click="verifyLogin()" id="login_login">
			<span>登录</span>
		</div>
		<div id="login_register">
			<router-link to="/register">注册</router-link>
		</div>
	</main>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			verifyLogin(){
				if(document.getElementById('account').value=='') {
  					alert('账号不能为空！');
				};
				if(document.getElementById('password').value=='') {
  					alert('密码不能为空！');
				};
			}
		}
	}
</script>

<style scoped>
	#login_account_leftbox{
		width: 70px;
		height: 60px;
		float: left;
		position: relative;
 		background-color: white;
	}
	#login_accountNum{
		width: calc(100% - 70px);
		height: 60px;
		border-bottom: 1px solid #eee;
		background-color: white;
		float: left;
	}
	#login_accountNum input{
		width: 100%;
		height: 40px;
		margin-top: 10px;
		font-size: 16px;
	    border: none;
	    outline: none;
	}
	.find_pass{
		display: block;
		float: right;
		margin-top: 10px;
		margin-right: 30px;
		font-size: 14px;
		color: black;
	}
	#login_login{
		width: 95%;
		margin-left: 2.5%;
		height: 60px;
		background-color: #0086E6;
	    border: #0086E6 solid 1px;
	    text-align: center;
	    margin-top: 30px;
	    float: left;
	}
	#login_login span{
		cursor: pointer;
		display: block;
	    height: 60px;
	    color: #fff !important;
	    line-height: 60px;
	    font-size: 1rem;
	}
	#login_register{
		width: 95%;
		margin-left: 2.5%;
		height: 60px;
		background-color: #fff;
	    border: #AAAAAA solid 1px;
	    text-align: center;
	    margin-top: 10px;
	    float: left;
	}
	#login_register a{
		cursor: pointer;
		display: block;
	    height: 60px;
	    color: #333;
	    line-height: 60px;
	    font-size: 1rem;
	}
</style>