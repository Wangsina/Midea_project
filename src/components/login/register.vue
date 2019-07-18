<template>
	<main id="register">
		<div id="register_check">
			<div @click="back()" id="register_goback">
				<img src="../../assets/img/zuojiantou.svg"/>
			</div>
			<span>注册</span>
		</div>
		<div class="register_accountNum margin">
			<input id="register_accountNum_input1" type="text" placeholder="请输入手机号" maxlength="11">
		</div>
		<div class="register_accountNum">
			<div class="register_getCode">
				<span>获取验证码</span>
			</div>
			<input id="register_accountNum_input2" type="text" placeholder="验证码" maxlength="11">
		</div>
		<div class="register_accountNum margin">
			<input id="register_accountNum_input3" type="password" placeholder="输入新密码" maxlength="11">
		</div>
		<div class="register_accountNum">
			<input id="register_accountNum_input4" type="password" placeholder="确认新密码" maxlength="11">
		</div>
		<span class="register_text">密码由6-20位英文字母、数字或符号组成</span>
		<div @click="verifyRegister()" id="register_register">
			<span>注册</span>
		</div>
		<p class="register_admin">注册即为同意&nbsp;<router-link to="/">用户使用协议</router-link></p>
	</main>
</template>

<script>
	export default{
		methods:{
			back(){
				this.$router.go(-1)
			},
			verifyRegister(){
				if(document.getElementById('register_accountNum_input1').value=='') {
  					alert('手机号不能为空！');
				};
				if(document.getElementById('register_accountNum_input2').value=='') {
  					alert('验证码不能为空！');
				};
				if(document.getElementById('register_accountNum_input3').value=='') {
  					alert('新密码不能为空！');
				};
				if(document.getElementById('register_accountNum_input4').value=='') {
  					alert('确认密码不能为空！');
				};
			}
		}
	}
</script>

<style scoped>
	#register{
		width: 100%;
		/*max-width: 750px;*/
		min-height: 100vh;
		/*border: 1px solid #eee;*/
		background-color: #eef3fa;
	}
	#register_check{
		width: 100%;
		height: 44px;
		background-color: white;
		/*border: 1px solid #eee;*/
		text-align: center;
		position: relative;
	}
	#register_goback{
		width: 50px;
		height: 100%;
		float: left;
		/*background-color: #A7D1E4;*/
	}
	#register_goback img{
		width: 25px;
		height: 20px;
		margin-left: 12.5px;
		margin-top: 12px;
	}
	#register_check span{
		display: block;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1rem;
	    line-height: 44px;
	    color: #0093d5;
	    font-weight: normal;
	}
	.register_accountNum{
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #eee;
		box-sizing: border-box;
		background-color: white;
		float: left;
	}
	.margin{
		margin-top: 20px;
	}
	#register_accountNum_input1{
		padding-left: 5%;
		width: 65%;
		height: 40px;
		margin-top: 10px;
		font-size: 16px;
	    border: none;
	    outline: none;
	    float: left;
	}
	#register_accountNum_input2{
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
	#register_accountNum_input3{
		padding-left: 5%;
		width: 65%;
		height: 40px;
		margin-top: 10px;
		font-size: 16px;
	    border: none;
	    outline: none;
	    float: left;
	}
	#register_accountNum_input4{
		padding-left: 5%;
		width: 65%;
		height: 40px;
		margin-top: 10px;
		font-size: 16px;
	    border: none;
	    outline: none;
	    float: left;
	}
	.register_getCode{
		width: 30%;
		height: 100%;
		border-left: 1px solid #eee;
		box-sizing: border-box;
		/*background-color: antiquewhite;*/
		float: right;
		text-align: center;
	}
	.register_getCode span{
		line-height: 60px;
		color: #0092d8;
		font-size: 0.976rem;
	}
	.register_text{
		display: block;
		font-size: 12px;
	    padding-left: 15px;
	    margin-top: 290px;
	    color: #ccc;
	}
	#register_register{
		width: 95%;
		margin-left: 2.5%;
		height: 60px;
		background-color: #0086E6;
	    border: #0086E6 solid 1px;
	    text-align: center;
	    margin-top: 30px;
	    float: left;
	}
	#register_register span{
		cursor: pointer;
		display: block;
	    height: 60px;
	    color: #fff !important;
	    line-height: 60px;
	    font-size: 1rem;
	}
	.register_admin{
		margin-top: 180px;
		text-align: center;
		font-size: 12px;
   		color: #ccc;
	}
	.register_admin a{
		color: #333;
		font-size: 12px;
	}
</style>