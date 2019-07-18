<template>
	<main id="index">
		<div id="index_header">
			<img id="index_header_icon1" src="../../assets/img/zaixiankefu.svg"/>
			<img id="index_header_logo" src="../../assets/img/index_midea_logo.png">
			<router-link to="/search">
				<img id="index_header_icon2" src="../../assets/img/iconset0157.svg"/>
			</router-link>
		</div> 
		<div id="index_header_tips">
			<p>通知：新疆区域由于交通管制无法正常发货，恢复时间待定。</p>			
		</div>
		<div id="index_lunbo">
			<mt-swipe :auto="4000">
			  <mt-swipe-item><img src="../../assets/img/index_lunbopic2.webp.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/index_lunbopic3.webp.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/index_lunbopic4.webp.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/index_lunbopic5.webp.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/index_lunbopic6.webp.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>
		<ul id="index_type">
			<li><router-link to="/classify"><P>空调</P><img src="../../assets/img/index_type1.webp.jpg"/></router-link></li>
			<li><router-link to="/classify"><P>冰箱</P><img src="../../assets/img/index_type2.webp.jpg"/></router-link></li>
			<li><router-link to="/classify"><P>洗衣机</P><img src="../../assets/img/index_type3.webp.jpg"/></router-link></li>
			<li><router-link to="/classify"><P>厨房小电器</P><img src="../../assets/img/index_type4.webp.jpg"/></router-link></li>
			<li><router-link to="/classify"><P>厨房大电器</P><img src="../../assets/img/index_type5.webp.jpg"/></router-link></li>
			<li><router-link to="/classify"><P>生活家电</P><img src="../../assets/img/index_type6.webp.jpg"/></router-link></li>
			<li><router-link to="/classify"><P>热水器/净水机</P><img src="../../assets/img/index_type7.webp.jpg"/></router-link></li>
			<li><router-link to="/classify"><P>配件及周边</P><img src="../../assets/img/index_type8.webp.jpg"/></router-link></li>
		</ul>
		<ul id="index_menberAndnews">
			<li><router-link to=""><img src="../../assets/img/index_member.webp.jpg"/></router-link></li>
			<li><router-link to=""><img src="../../assets/img/index_news.webp.jpg"/></router-link></li>
			<!--清除浮动，解决ul没高度的问题-->
			<div style="clear:both;"></div>
		</ul>
		<div id="index_preferentialGoods">
			<router-link to="">
				<div class="index_product">
					<img class="index_preferentialGoods_img" src="../../assets/img/index_lunbopic4.webp.jpg"/>
					<div id="index_saveMoney_info">
						<p class="saveMoney_info1">买家电更省钱</p>
						<p class="saveMoney_info2">开通PRO会员送270元家电品类券</p>
					</div>
				</div>
			</router-link>
			<router-link to="">
				<div class="index_product">
					<img class="index_preferentialGoods_img" src="../../assets/img/index_preferentialGoods1.webp.jpg"/>
		            <div class="index_preferential_type">
		            	<div class="pf_type">限时特惠</div>
		            	<div class="pf_timelimited_box">
		            		<img src="../../assets/img/shizhong.svg"/>  
		            		<span class="pf_timelimited">{{time1.endtime}}</span>
		            	</div>
		            </div>
					<div class="index_pfgoods_info">
						<p class="pfgoods_info1">全直流变频空调 一级能效 </p>
						<p class="pfgoods_info2">家用空调套机KFR-35GW/WXDN8A1</p>
						<div class="pfgoods_info_message">
							<div class="pfgoods_price">
								￥2999.00
							</div>
							<div class="pfgoods_collect">
								<img src="../../assets/img/shoucang.svg"/>
								<span>2788</span>
							</div>
							<div class="pfgoods_comment">
								<img src="../../assets/img/pinglun.svg"/>
								<span>435</span>
							</div>
							<div class="pfgoods_watch">
								<img src="../../assets/img/yanjing.svg"/>
								<span>12万</span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
			<router-link to="">
				<div class="index_product">
					<img class="index_preferentialGoods_img" src="../../assets/img/index_preferentialGoods2.webp.jpg"/>
		            <div class="index_preferential_type">
		            	<div class="pf_type">清凉节</div>
		            	<div class="pf_timelimited_box">
		            		<img src="../../assets/img/shizhong.svg"/>  
		            		<span class="pf_timelimited">{{time2.endtime}}</span>
		            	</div>
		            </div>
					<div class="index_pfgoods_info">
						<p class="pfgoods_info1">免安装洗碗机 秒杀价低至5折! </p>
						<p class="pfgoods_info2">洗碗机M1-香槟金</p>
						<div class="pfgoods_info_message">
							<div class="pfgoods_price">
								￥1799.00
							</div>
							<div class="pfgoods_collect">
								<img src="../../assets/img/shoucang.svg"/>
								<span>93</span>
							</div>
							<div class="pfgoods_comment">
								<img src="../../assets/img/pinglun.svg"/>
								<span>41</span>
							</div>
							<div class="pfgoods_watch">
								<img src="../../assets/img/yanjing.svg"/>
								<span>16万</span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
			<router-link to="">
				<div class="index_product">
					<img class="index_preferentialGoods_img" src="../../assets/img/index_preferentialGoods3.webp.jpg"/>
		            <div class="index_preferential_type">
		            	<div class="pf_type">惊喜价</div>
		            	<div class="pf_timelimited_box">
		            		<img src="../../assets/img/shizhong.svg"/>  
		            		<span class="pf_timelimited">{{time3.endtime}}</span>
		            	</div>
		            </div>
					<div class="index_pfgoods_info">
						<p class="pfgoods_info1">花生净水机 秒杀低至半价！ </p>
						<p class="pfgoods_info2">净水机MRO1791D-400G</p>
						<div class="pfgoods_info_message">
							<div class="pfgoods_price">
								￥1698.00
							</div>
							<div class="pfgoods_collect">
								<img src="../../assets/img/shoucang.svg"/>
								<span>529</span>
							</div>
							<div class="pfgoods_comment">
								<img src="../../assets/img/pinglun.svg"/>
								<span>205</span>
							</div>
							<div class="pfgoods_watch">
								<img src="../../assets/img/yanjing.svg"/>
								<span>18万</span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
			<router-link to="">
				<div class="index_product">
					<img class="index_preferentialGoods_img" src="../../assets/img/index_preferentialGoods4.webp.jpg"/>
		            <div class="index_preferential_type">
		            	<div class="pf_type">狂暑季</div>
		            	<div class="pf_timelimited_box">
		            		<img src="../../assets/img/shizhong.svg"/>  
		            		<span class="pf_timelimited">{{time4.endtime}}</span>
		            	</div>
		            </div>
					<div class="index_pfgoods_info">
						<p class="pfgoods_info1">10KG 滚筒洗衣机  </p>
						<p class="pfgoods_info2">洗衣机MG100V31DG5</p>
						<div class="pfgoods_info_message">
							<div class="pfgoods_price">
								￥1899.00
							</div>
							<div class="pfgoods_collect">
								<img src="../../assets/img/shoucang.svg"/>
								<span>173</span>
							</div>
							<div class="pfgoods_comment">
								<img src="../../assets/img/pinglun.svg"/>
								<span>102</span>
							</div>
							<div class="pfgoods_watch">
								<img src="../../assets/img/yanjing.svg"/>
								<span>8万</span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
			<router-link to="">
				<div class="index_product">
					<img class="index_preferentialGoods_img" src="../../assets/img/index_preferentialGoods5.webp.jpg"/>
		            <div class="index_preferential_type">
		            	<div class="pf_type">限时优惠</div>
		            	<div class="pf_timelimited_box">
		            		<img src="../../assets/img/shizhong.svg"/>  
		            		<span class="pf_timelimited">{{time5.endtime}}</span>
		            	</div>
		            </div>
					<div class="index_pfgoods_info">
						<p class="pfgoods_info1">318升多门冰箱 风冷无霜 </p>
						<p class="pfgoods_info2">冰箱BCD-318WTPZM(E) </p>
						<div class="pfgoods_info_message">
							<div class="pfgoods_price">
								￥2699.00
							</div>
							<div class="pfgoods_collect">
								<img src="../../assets/img/shoucang.svg"/>
								<span>495</span>
							</div>
							<div class="pfgoods_comment">
								<img src="../../assets/img/pinglun.svg"/>
								<span>193</span>
							</div>
							<div class="pfgoods_watch">
								<img src="../../assets/img/yanjing.svg"/>
								<span>14万</span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
			<router-link to="">
				<div class="index_product">
					<img class="index_preferentialGoods_img" src="../../assets/img/index_preferentialGoods6.webp.jpg"/>
		            <div class="index_preferential_type">
		            	<div class="pf_type">限时优惠</div>
		            	<div class="pf_timelimited_box">
		            		<img src="../../assets/img/shizhong.svg"/>  
		            		<span class="pf_timelimited">{{time6.endtime}}</span>
		            	</div>
		            </div>
					<div class="index_pfgoods_info">
						<p class="pfgoods_info1">20m³大吸力 高压直喷自清洗 4.5KW爆炒猛火</p>
						<p class="pfgoods_info2">烟灶套装CXW-280-J57	+JZT-Q216B</p>
						<div class="pfgoods_info_message">
							<div class="pfgoods_price">
								￥2599.00
							</div>
							<div class="pfgoods_collect">
								<img src="../../assets/img/shoucang.svg"/>
								<span>28</span>
							</div>
							<div class="pfgoods_comment">
								<img src="../../assets/img/pinglun.svg"/>
								<span>23</span>
							</div>
							<div class="pfgoods_watch">
								<img src="../../assets/img/yanjing.svg"/>
								<span>3万</span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
		    <router-link to="">
				<div class="index_product">
					<img class="index_preferentialGoods_img" src="../../assets/img/index_preferentialGoods7.webp.jpg"/>
		            <div class="index_preferential_type">
		            	<div class="pf_type">狂暑季</div>
		            	<div class="pf_timelimited_box">
		            		<img src="../../assets/img/shizhong.svg"/>  
		            		<span class="pf_timelimited">{{time7.endtime}}</span>
		            	</div>
		            </div>
					<div class="index_pfgoods_info">
						<p class="pfgoods_info1">5L电压力锅</p>
						<p class="pfgoods_info2">电压力锅MY-HS5060P(WQH50C8)</p>
						<div class="pfgoods_info_message">
							<div class="pfgoods_price">
								￥539.00
							</div>
							<div class="pfgoods_collect">
								<img src="../../assets/img/shoucang.svg"/>
								<span>982</span>
							</div>
							<div class="pfgoods_comment">
								<img src="../../assets/img/pinglun.svg"/>
								<span>409</span>
							</div>
							<div class="pfgoods_watch">
								<img src="../../assets/img/yanjing.svg"/>
								<span>42万</span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
			<router-link to="">
				<div class="index_product">
					<img class="index_preferentialGoods_img" src="../../assets/img/index_preferentialGoods8.webp.jpg"/>
		            <div class="index_preferential_type">
		            	<div class="pf_type">限时优惠</div>
		            	<div class="pf_timelimited_box">
		            		<img src="../../assets/img/shizhong.svg"/>  
		            		<span class="pf_timelimited">{{time8.endtime}}</span>
		            	</div>
		            </div>
					<div class="index_pfgoods_info">
						<p class="pfgoods_info1">60L电热水器 专利出水断电 一级能效</p>
						<p class="pfgoods_info2">电热水器F6030-TL3(HEY)</p>
						<div class="pfgoods_info_message">
							<div class="pfgoods_price">
								￥1799.00
							</div>
							<div class="pfgoods_collect">
								<img src="../../assets/img/shoucang.svg"/>
								<span>408</span>
							</div>
							<div class="pfgoods_comment">
								<img src="../../assets/img/pinglun.svg"/>
								<span>57</span>
							</div>
							<div class="pfgoods_watch">
								<img src="../../assets/img/yanjing.svg"/>
								<span>2万</span>
							</div>
						</div>
					</div>
				</div>
			</router-link>
		</div>
		
		<div id="index_selectedItem">
			<span class="midea-icon icon-select_item"></span>
			<h3>精选单品</h3>
		</div>
		<ul id="index_selectedItem_box">
			<li v-for="(item,index) in list">
				<router-link to="">
				   <div class="sI_picbox">
				   		<img :src="item.src"/>
				   		<div class="sI_tag">
				   			<span><em>PRO精选</em></span>
				   		</div>
				   </div>
				   <div class="sI_name">
		               {{item.title}}                    
				   </div>
				   <div class="sI_price">
					   {{item.price}}
					</div>
					<div class="sI_proprice">
					   {{item.proprice}}
					</div>
					<span class="sI_pro"><em>PRO</em></span>
				</router-link>
			</li>
			
			<!--清除浮动，解决ul没高度的问题-->
			<div style="clear:both;"></div>
		</ul>
		<ul id="index_footer">
			<li>
				<span class="index_footer_icon midea-icon icon-genuine"></span>
				<span class="index_footer_iconText">正品保证</span>
			</li>
			<li>
				<span class="index_footer_icon midea-icon icon-seven_day"></span>
				<span class="index_footer_iconText">7天无理由</span>
			</li>
			<li>
				<span class="index_footer_icon midea-icon icon-phone_stroke"></span>
				<span class="index_footer_iconText">4008899315</span>
			</li>
			<li>
				<span class="index_footer_icon midea-icon icon-qualification"></span>
				<span class="index_footer_iconText">企业资质</span>
			</li>
			<!--清除浮动，解决ul没高度的问题-->
			<div style="clear:both;"></div>
		</ul>
	    <div id="index_footer_text">
	    	<ul>
	    		<li><router-link to="">服务条款</router-link></li>
	    		<li><router-link to="">企业采购</router-link></li>
	    		<li><router-link to="">隐私政策</router-link></li>
	    		<li><router-link to="">联系我们</router-link></li>
	    	</ul>
	    	<p>Copyright © 1968-2019 广东美的网络科技有限公司</p>
	    </div>
	</main>
</template>
	
<script>
import daoji from '../../assets/js/countDown.js'
export default {
data () {
    return {
      list:[],
      time1:{
      	 endtime:""
      },
      time2:{
      	 endtime:""
      },
      time3:{
      	 endtime:""
      },
      time4:{
      	 endtime:""
      },
      time5:{
      	 endtime:""
      },
      time6:{
      	 endtime:""
      },
      time7:{
      	 endtime:""
      },
      time8:{
      	 endtime:""
      }     
    }
},
mounted(){
		daoji('2019-07-21 09:05:59',this.time1);
		daoji('2019-07-31 09:05:59',this.time2);
		daoji('2019-07-26 09:05:59',this.time3);
		daoji('2019-08-01 09:05:59',this.time4);
		daoji('2019-08-03 09:05:59',this.time5);
		daoji('2019-07-25 09:05:59',this.time6);
		daoji('2019-08-04 09:05:59',this.time7);
		daoji('2019-07-28 09:05:59',this.time8);
        var _this=this;
        this.$http.get('./data/data.json')
        .then(function (res) {
          console.log(_this);
          _this.list=res.data.list
        })
        .catch(()=>{

        })
        .then((f)=>{
            console.log('请求结束了')
        });  
      }
}	
</script>

<style scoped>
	#index{
		background-color: #f4f4f4;
		/*border: 1px solid #eee;*/
	}
	#index_header{
		width: 100%;
		height: 44px;
		background-color: #0092d8;
		overflow: hidden;
		position: relative;
	}
	#index_header_logo{
		position: absolute;
		left: 45%;
		top: 50%;
		transform: translateY(-50%);
	}
	#index_header_icon1{
		/*filter: drop-shadow(#0092d8);*/
		width: 28px;
		height: 28px;
		margin-left: 1%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	#index_header a{
		display: block;
		width: 28px;
		height: 28px;
		position: absolute;
		top: 50%;
		right: 2%;
		transform: translateY(-50%);
		overflow: hidden;
		/*background-color: pink;*/
	}
	#index_header_icon2{
		width: 28px;
		height: 28px;
	}
	#index_header_tips{
		width: 100%;
		height: 24px;
		line-height: 24px;
		color: white;
	}
	#index_header_tips p{
		font-size: 12px;
	    background: rgb(0, 59, 102);
	    line-height: 16px;
	    color: rgb(255, 255, 255);
	    padding: 4px;
	    padding-left: 10px;
	    display: block;
	}
	#index_lunbo{
		width: 100%;
		/*height: 350px;*/
		/*background-color: antiquewhite;*/
	}
	/*因为轮播不能给高度，要自适应，而引用mint ui要都东西把轮播撑开，所以用padding-bottom撑开*/
	>>>.mint-swipe-items-wrap{
		padding-bottom: 50%;
	}
	#index_lunbo img{
		width: 100%;
		height: 100%;
	}
	#index_type{
		width: 100%;
		height: 280px;
		background-color: white;
	}
	#index_type li{
		width: 25%;
		box-sizing:border-box;
		height: 140px;
		border: 1px solid #eee;
		text-align: center;
		float: left;
	}
	#index_type p{
		font-size: 12px;
		font-weight: bold;
    	color: #333;
		margin-top: 17px;
/*		text-decoration: none;*/
	}
	#index_type img{
		width: 70px;
		height: 70px;
		margin: 15px auto;
	}
	#index_menberAndnews{
		width: 100%;
		/*height: 218px;*/
		/*background-color: coral;*/
	}
	#index_menberAndnews li{
		width: 50%;
		/*height: 100%;*/
		float: left;
	}
	#index_menberAndnews img{
		width: 100%;
		/*height: 100%;*/
	}
	#index_preferentialGoods{	
		width: 100%;
		/*height: 530px;*/
		overflow: hidden;
		/*position: relative;*/
	}
	#index_preferentialGoods a{
		display: block;
		margin-top: 20px;
		position: relative;
	}
	.index_preferential_type{
		/*width: 280px;*/
		height: 30px;
		position: absolute;
		top: 0;
		right: 0;
		/*background-color: pink;*/
	}
	.pf_type{
		float: right;
	    height: 30px;
	    line-height: 30px;
	    padding: 0 11px;
	    background-color: #ff6600;
	    color: white;
	}
	.pf_timelimited_box{
		float: right;
	    height: 30px;
	    background-color: #303030;
	}
	.pf_timelimited_box img{
		width: 25px;
		height: 25px;
		margin-top: 3px;
		float: left;
		padding-left: 12px;
	}
	.pf_timelimited{
		display: block;
		float: left;
		margin-top: 3px;
		padding-left: 3px;
	    padding-right: 12px;
	    line-height: 25px;
	    color: white;
	}
	.index_product{
		width: 100%;
		/*height: 530px;*/
		/*background-color: darkblue;*/
	}
	.index_preferentialGoods_img{
		width: 100%;
		/*height: 420px;*/
	}
	#index_saveMoney_info{
		width: 100%;
		height: 110px;
		text-align: center;
		background-color: white;
		overflow: hidden;
	}
	.saveMoney_info1{
		display: block;
		margin-top: 30px;
		font-size: 20px;
    	color: #333;
	}
	.saveMoney_info2{
		margin-top: 7px;
	    font-size: 13px;
	    color: #999;
	}
	.index_pfgoods_info{
		width: 100%;
		/*height: 110px;*/
		background-color: white;
		overflow: hidden;
	}
	.pfgoods_info1{
		padding: 16px 15px 0 15px;
	    line-height: 22px;
	    font-size: 16px;
	    color: #333;
	}
	.pfgoods_info2{
		padding: 0 15px;
	    margin-top: 5px;
	    font-size: 13px;
	    height: 20px;
	    color: #999;
	}
	.pfgoods_info_message{
		width: 100%;
		height: 48px;
		padding: 0px 15px 11px 15px;
	}
	.pfgoods_price{
		float: left;
	    color: #ff3300;
	    line-height: 30px;
	    font-size: 16px;
	}
	.pfgoods_collect{
		float: right;
		/*background-color: cadetblue;*/
		height: 30px;
		width: 85px;
		padding-right: 1%;
	}
	.pfgoods_collect img{
		width: 23px;
		height: 23px;
		margin-top: 3.5px;
		float: left;
	}
	.pfgoods_collect span{
		line-height: 30px;
		margin-left: 5px;
		color: #cccccc;
		float: left;
	}
	.pfgoods_comment{
		float: right;
		/*background-color: cadetblue;*/
		height: 30px;
		margin-right: 6px;
	}
	.pfgoods_comment img{
		width: 25px;
		height: 25px;
		margin-top: 4px;
		float: left;
	}
	.pfgoods_comment span{
		line-height: 30px;
		display: block;
		margin-left: 5px;
		color: #cccccc;
		float: left;
	}
	.pfgoods_watch{
		float: right;
		/*background-color: cadetblue;*/
		height: 30px;
		margin-right: 10px;
	}
	.pfgoods_watch img{
		width: 25px;
		height: 25px;
		margin-top: 2.5px;
		float: left;
	}
	.pfgoods_watch span{
		line-height: 30px;
		display: block;
		margin-left: 5px;
		color: #cccccc;
		float: left;
	}	
	.pfgoods_proprice{
		float: left;
		color: dimgray;
		margin-left: 3px;
		line-height: 33px;
	    font-size: 16px;
	}
	.pfgoods_pro{
		display: block;
		width: 28px;
		height: 13px;
		float: left;
		background-color: #242733;
		margin-left: 5px;
		margin-top: 10px;
	}
	.pfgoods_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 8px;
		margin-top: -2px;
	}
	#index_selectedItem{
		width: 100%;
		height: 52px;
		margin-top: 15px;
		border-top: 1px solid #eee;
    	/*border-bottom: 1px solid #eee;*/
    	background-color: white;
	}
	#index_selectedItem span{
		display: block;
		padding-top: 13.5px;
		padding-left: 15px;
		font-size: 25px;
		float: left;
	}
	#index_selectedItem h3{
		direction: block;
		float: left;
		line-height: 52px;
	    font-size: 16px;
	    font-weight: normal;
	    color: #333;
	    padding-left: 15px;
	}
	#index_selectedItem_box{
		background-color: white;
		width: 100%;
		
	}
	#index_selectedItem_box li{
		float: left;
		width: 50%;
		border: 1px solid #eee;
		box-sizing: border-box;
	}
	.sI_picbox{
		width: 100%;
		position: relative;
	}
	.sI_picbox img{
		width: 100%;
		height: 100%;
	}
	.sI_tag{
		width: 60px;
		height: 25px;
		position: absolute;
		top: 0;
		right: 0;
		background-color: #242733;
	}
	.sI_tag em{
		display: block;
		color: #ffe7b9;
		font-size: 12px;
		font-weight: 600;
		margin-top: 4px;
		margin-left: 4px;
	}
	.sI_name{
		height: 36px;
	    color: #333;
	    font-size: 13px;
	    margin-left: 15px;
	    padding-right: 15px;
	    display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		line-height: 18px;
	}
	.sI_price{
		float: left;
	    color: #ff3300;
	    font-size: 16px;
	    margin-left: 6px;
	    padding-bottom: 30px;
	}
	.sI_proprice{
		float: left;
		color: dimgray;
		margin-left: 3px;
	    font-size: 14px;
	    margin-top: 3px;
	}
	.sI_pro{
		display: block;
		width: 28px;
		height: 13px;
		float: left;
		background-color: #242733;
		margin-left: 5px;
		margin-top: 7px;
		text-align: center;
		line-height: 13px;
	}
	.sI_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 0.664rem;
	}
	#index_footer{
		height: 97px;
		width: 100%;
		height: auto;
		margin-top: 15px;
		background-color: white;
	}
	#index_footer li{
		width: 25%;
		height: 100%;
		float: left;
	    text-align: center;
	    margin: 20px auto 14px;
	    /*margin-top: 15px;*/
	}
	.index_footer_icon{
		display: block;
		font-size: 30px;
	}
	.index_footer_iconText{
		display: block;
		font-size: 12px;
	    color: #333;
	    margin-top: 9px;
	}
	#index_footer_text{
		width: 100%;
		/*height: 56px;*/
		border-top: 1px solid #eee;
		background-color: white;
		/*margin: 33px auto 41px;*/
	    text-align: center;
	    color: #999;
	    font-size: 12px;
	}
	#index_footer_text ul{
		width: 80%;
     	display: table;
     	overflow: hidden;
     	margin: 0 auto;
		/*height: 18px;*/
		padding-top: 30px;
		padding-bottom: 30px;
	}
	#index_footer_text ul li{
		/*width: 25%;*/
		/*height: 100%;*/
		/*float: left;*/
		display: table-cell;
     	text-align: center;
	}
	#index_footer_text ul li a{
		color: #999;
	}
	#index_footer_text{
		padding-bottom: 100px;
	}
</style>