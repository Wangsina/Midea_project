<template>
	<main id="login_account">
		<div class="login_accountNum">
			<input id="login_accountNum_input1" type="text" placeholder="请输入手机号" maxlength="11">
		</div>
		<div class="login_accountNum">
			<div class="login_getCode">
				<span>获取验证码</span>
			</div>
			<input id="login_accountNum_input2" type="text" placeholder="验证码" maxlength="11">
		</div>
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
				if(document.getElementById('login_accountNum_input1').value=='') {
  					alert('手机号不能为空！');
				};
				if(document.getElementById('login_accountNum_input2').value=='') {
  					alert('验证码不能为空！');
				};
			}
		}
	}
</script>

<style scoped>
	#login_account_leftbox{
		width: 20px;
		height: 60px;
		float: left;
		position: relative;
 		background-color: white;
	}
	.login_accountNum{
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		background-color: white;
		float: left;
	}
	#login_accountNum_input1{
		padding-left: 5%;
		width: 65%;
		height: 40px;
		margin-top: 10px;
		font-size: 16px;
	    border: none;
	    outline: none;
	    float: left;
	}
	#login_accountNum_input2{
		/*padding-left: 30px;*/
		width: 65%;
		height: 40px;
		margin-top: 10px;
		font-size: 16px;
	    border: none;
	    outline: none;
	    float: right;
	    /*background-color: palegoldenrod;*/
	}
	.login_getCode{
		width: 30%;
		height: 100%;
		border-left: 1px solid #eee;
		box-sizing: border-box;
		/*background-color: antiquewhite;*/
		float: right;
		text-align: center;
	}
	.login_getCode span{
		line-height: 60px;
		color: #0092d8;
		font-size: 0.976rem;
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