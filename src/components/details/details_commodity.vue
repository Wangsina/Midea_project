<template>
	<main id="details_commodity">
		<div id="details_commodity_tips">
			<p>通知：新疆区域由于交通管制无法正常发货，恢复时间待定。</p>			
		</div>
		<div id="details_commodity_lunbo">
			<mt-swipe :auto="0">
			  <mt-swipe-item><img src="../../assets/img/details_commodityPic1.webp.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/details_commodityPic2.webp.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/details_commodityPic3.webp.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img src="../../assets/img/details_commodityPic4.webp.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>
		<p class="dc_text1"><span>自营</span>【上下独立控温】高颜值小烤箱 简易操作 随意定时 PT2531 </p>
		<p class="dc_text2">上下独立控温，控温随心所欲 上下平衡式321加热管，均匀加热，加热过程不掉粉 发蓝技术不锈钢烤管，耐腐蚀，寿命长 静谧蓝外观，整机更显年轻化 超大视窗，方便观看、分享</p>
		<div class="dc_pricebox">
			<span class="dc_price_span1">￥<em>179.00</em></span>
			<del class="dc_oldprice">￥199.00</del>		
            <p class="dc_price_p">
            	<span class="dc_price_span2">￥175.00</span>
            	<span class="dc_price_span3"><em>PRO</em></span>
            </p>
			<span class="dc_price_span4">评价2&nbsp;&nbsp;|&nbsp;&nbsp;库存{{a.goodsMaxNum}}</span>
		</div>
		<p class="dc_time"><span>限时特惠</span>距活动结束：{{time1.endtime}}</p>
		<div id="dc_probox">
			<span class="dc_price_span3"><em>PRO</em></span>
			<span class="dc_probox_span">开通PRO会员，预计可省
				<em>54元</em>
				<i class="midea-icon icon-warning_info"></i>
			</span>
			<router-link to="/">
				立即开卡
				<span class="midea-icon icon-right_arrows"></span>
			</router-link>
		</div>
		<div class="dc_smallbox">
			<span class="dc_smallbox_span1">促销</span>
			<span v-show="show" class="dc_proSales_span1">限时折扣</span>
			<span v-show="show" class="dc_proSales_span1">送积分</span>
			<span v-show="noshow" class="dc_proSales_span2">你可以享受以下优惠</span>
			<span class="dc_xiala" @click="appear()">
				<i v-show="show" class="dc_smallbox_span2 midea-icon icon-down"></i>
				<i v-show="noshow" class="dc_smallbox_span2 midea-icon icon-up"></i>
			</span>
		</div>
		<section v-show="noshow" id="dc_proSales_yBox1">
			<p><span class="dc_proSales_span1">限时折扣</span>&nbsp;&nbsp;&nbsp;限时特惠</p>
			<p><span class="dc_proSales_span1">送积分</span>&nbsp;&nbsp;&nbsp;最高送17积分</p>
		</section>
		<div class="dc_smallbox">
			<span class="dc_smallbox_span1">服务</span>
			<span class="dc_smallbox_span1 marl midea-icon font_icon icon-checked_stroke">&nbsp;美的唯一官方商城</span>
			<span class="dc_smallbox_span1 marl midea-icon font_icon icon-checked_stroke">&nbsp;全国联保</span>
			<span class="dc_smallbox_span1 marl midea-icon font_icon icon-checked_stroke">&nbsp;全场包邮</span>
		</div>
		<div class="dc_smallbox mart">
			<span class="dc_smallbox_span1">已选</span>
			<span class="dc_selected_span1 marl">静谧蓝 / 25L / {{a.goodsNum}}件</span>
			<span @click="appear1()" class="dc_right_icon midea-icon icon-right_arrows"></span>
		</div>
		<section v-show="noshow1" @click="appearR1()" id="dc_selected_motai"></section>
		<section v-show="noshow1" id="dc_selected_box">
			<div class="dc_selected_sbox">
				<h3>颜色</h3> 
				<span>静谧蓝</span>
			</div>
			<div class="dc_selected_sbox">
				<h3>规格</h3> 
				<span>25L</span>
			</div>
			<div class="dc_selected_numbox">
				<h3>数量</h3>
				<span v-on:click="sub()" class="marl">-</span>
				<input type="text" v-model="a.goodsNum" />
				<span @click="add()">+</span>
			</div>
			<div class="dc_selected_btn">
				<span @click="appear1()">确定</span>
			</div>
		</section>
		<div class="dc_smallbox">
			<span class="dc_smallbox_span1">配送</span>
			<span class="dc_right_icon midea-icon icon-right_arrows"></span>
		</div>
		<div class="dc_smallbox mart">
			<span class="dc_smallbox_spanR1">规格参数</span>
			<span class="dc_xiala" @click="appear2()">
				<i v-show="show2" class="dc_smallbox_span2 midea-icon icon-down"></i>
				<i v-show="noshow2" class="dc_smallbox_span2 midea-icon icon-up"></i>
			</span>		
		</div>
		<section v-show="noshow2" id="dc_sizeNum_yBox">
				<div class="sizeNum_yBox_div">
					<h4>产品信息</h4>
					<table>
						<tbody>
							<tr>
								<th>品牌</th>
								<td>Midea/美的</td>
							</tr>
							<tr>
								<th>颜色</th>
								<td>静谧蓝</td>
							</tr>
							<tr>
								<th>上市日期</th>
								<td>2019-04-01</td>
							</tr>
							<tr>
								<th>产品型号</th>
								<td>PT2531</td>
							</tr>
							<tr>
								<th>电源电压（V）</th>
								<td>22V</td>
							</tr>
							<tr>
								<th>额定功率（W）</th>
								<td>1400W</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="sizeNum_yBox_div">
					<h4>类目信息</h4>
					<table>
						<tbody>
							<tr>
								<th>开门方式</th>
								<td>下开门</td>
							</tr>
							<tr>
								<th>内胆材质</th>
								<td>镀锌板</td>
							</tr>
							<tr>
								<th>商品款式</th>
								<td>其他</td>
							</tr>
							<tr>
								<th>外罩材料/前板材料</th>
								<td>不锈钢</td>
							</tr>
							<tr>
								<th>层数（层）</th>
								<td>一层</td>
							</tr>
							<tr>
								<th>烧烤加热方式</th>
								<td>上下同时加热</td>
							</tr>
							<tr>
								<th>电烤箱高级功能</th>
								<td>独立屑盘、长通功能、上下独立控温</td>
							</tr>
							<tr>
								<th>容量（L）</th>
								<td>25</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div class="sizeNum_yBox_div">
					<h4>包装信息</h4>
					<table>
						<tbody>
							<tr>
								<th>产品尺寸(mm)：</th>
								<td>长447x宽348x高321</td>
							</tr>
							<tr>
								<th>产品净重(kg)：</th>
								<td>5.3</td>
							</tr>
							<tr>
								<th>包装尺寸(mm)：</th>
								<td>长522x宽394x高410</td>
							</tr>
							<tr>
								<th>包装重量(kg)：</th>
								<td>7.1</td>
							</tr>
							<tr>
								<th>包装清单：</th>
								<td>烤盘*1、烤架*1、屑盘*1、说明书*1、取物夹*1</td>
							</tr>
						</tbody>
					</table>
				</div>
			</section>
		<div class="dc_smallbox mart">
			<span class="dc_smallbox_spanR1">服务支持</span>
			<span class="dc_xiala" @click="appear3()">
				<i v-show="show3" class="dc_smallbox_span2 midea-icon icon-down"></i>
				<i v-show="noshow3" class="dc_smallbox_span2 midea-icon icon-up"></i>
			</span>	
		</div>
		<section v-show="noshow3" id="dc_service_yBox">
			<p class="service_yBox_about1">
				<span>1</span>
				关于物流
			</p>
			<p class="about1_p1 mart"><strong>发货时间</strong></p>
			<p class="about1_p2">
				1、用户付款后，无特殊情况订单在<span style="color: #FF0000">48小时内</span>发货，到货时间请实时关注物流信息，以快递到达时间为准，如有赠品另行发货；
				<br />
				2、预售、双十一等大型促销活动，订单量大，发货时间<strong>参考付款页面显示的预计配送时间</strong>;
				<br />
				3、订单自动流转到仓库，不支持延迟发货。（除全屋套购订单外）
			</p>
			<p class="about1_p1 mart"><strong>配送方式</strong></p>
			<p class="about1_p2">
				1、小家电商品会根据您的地址选择优质的快递公司进行配送，部分偏远乡村或者体积较大的商品超出范围和标准，可能会无法送货上门，需要您自提，请知悉；偏远地区发EMS无法送货上门的区域拍下订单默认为客户自提。
				<br />
				2、请务必<span style="color: #FF0000">从“ 省、市、县（区）镇（街道）、乡村 ”</span>格式从大到小填写收货地址；考虑到客户安全，一般快递只允许
				<span style="color: #FF0000">送货到小区门口或楼下</span>，如想快递送货上楼，可自行与快递协商，但不一定都可以给您送到楼上。	
			</p>
			<p class="about1_p1 mart"><strong>验货签收</strong></p>
			<p class="about1_p2">
				1、商城销售商品为全新未开封，您签收商品时，<span style="color: #FF0000">请核实产品型号信息与您订购的产品是否一致，产品包装是否完好无损</span>，如有破损请拍照后直接拒收，并及时联系美的商城在线客服。
				<br />
				2、商品签收后，请立即开箱验货，如有破损，请在签收后<span style="color: #FF0000">8小时内</span>联系在线客服；如因未及时验收一概视为商品完好无损，不再以外观划伤、变型、凹坑、破损为由进行退换货。
				<br />
				3、商品接受7天内无理由退换货，非商品质量原因造成的退货，用户需承担退货费用。
			</p>
			<p class="service_yBox_about1">
				<span>2</span>
				关于退换货
			</p>
			<p class="about1_p1 mart"><strong>退货标准</strong></p>
			<p class="about1_p2">
				1、签收后<span style="color: #FF0000">7日内</span>在不影响二次销售的情况下，可接受无理由退货，产品退回运费需用户承担。
				<br />
				2、签收后<span style="color: #FF0000">15日内</span>产品质量问题，可通过美的维修网点或联系在线客服，鉴定产品质量问题，并联系在线客服咨询退换货。
			</p>
			<img class="mart" src="../../assets/img/details_commodityPic5.webp.jpg"/>
			<p class="about1_p1 mart"><strong>退货提示</strong></p>
			<p class="about1_p2">
				1、如需退换货，请先<span style="color: #FF0000">联系商城客服申请退换货</span>，经客服确认后再进行退回；如不联系并自主退回，退换货信息填写不完整无法确认客户信息的包裹，或发到付的包裹，商城一律拒收或作无主处理，造成的损失由退货方承担。
				<br />
				2、退换货产品需由客户联系快递退货，客户先行垫付，我方仅承担普通运费费用（使用顺丰等昂贵快递服务，快递费差额由客户承担）。
				<br />
				3、所有的退货、换货，<span style="color: #FF0000">需保证产品的包装、泡沫、赠品、配件、发票的完整性</span>，如产品退回包装有损，客户需给予商家相应赔偿。（换货无需寄回赠品、发票）
			</p>
			<p class="about1_p1 mart"><strong>退换货涉及的运费、包装费标准</strong></p>
			<img src="../../assets/img/details_commodityPic6.webp.jpg"/>
			<p class="service_yBox_about1">
				<span>3</span>
				关于发票
			</p>
			<p class="about1_p2">
				1、本商城默认开具<strong>普通增值税电子发票</strong><span style="color: #FF0000">发票在发货后7个工作日内，将以短信的形式发送到收货人手机。</span>请注意查收，感谢您的支持！
				<br /><br />
				2、<span style="color:#0092D7">纸质发票邮寄时间</span>:
				<br />
				（1）部分大家电产品（空调、洗衣机、烟机、灶具、消毒柜等）发票统一开具普通增值税发票，在<strong>确认收货后30个工作日内寄出（每月1-5号不开票），发票未收到期间以订单号同样享受美的全国联保售后服务</strong>;
				<br />
				（2）<strong>部分小家电商品开具通用机打发票，其中，部分随货发出，部分发货后再单独寄出，具体请咨询在线客服</strong>;
				<br /><br />
				3、美的商城所售产品为全新正品，品质保证：开票公司为美的集团电商公司、美的团旗下事业部、美的集团授权经销商三者之一，具体如下：
				<br />
				美的集团电子商务有限公司、芜湖美的生活电器制造有限公司、杭州未沃智能科技有限公司、广东驰风网络科技有限公司、合肥美的洗衣机有限公司、无锡小天鹅股份有限公司、合肥美的电冰箱有限公司、佛山市聚程美电子商务有限公司。
				<br /><br />
				4、<span style="color:#0092D7">发票金额</span>:
				<br />
				开具的发票金额为商品实付金额（含税价格），不含家装基金、延保费、赠品或附带物件等。发票默认商品明细，暂不支持发票内容修改。
				<br /><br />
				5、<span style="color:#0092D7">发票抬头</span>:
				<br />
				发票抬头<strong>默认为个人</strong>，如需修改发票抬头，请付款前“发票抬头”一栏填写发票抬头内容。开票抬头为公司，需备注纳税人识别号或统一社会信用代码。
				<br /><br />
				6、<span style="color:#0092D7">关于专用增值税发票</span>:
				<br />
				若需开专用增值税发票，请务必在订单备注“专用增值税，发票抬头：XXX” 等字样，在发货前提供以下增值税开票资料给在线客服，否则系统将默认开具电子发票（增值发票不能重开，如您提供资料有误导致发票错误，请您自行处理）：
				<br />
				<strong>a、公司营业执照（正或副本）</strong>
				<br />
				<strong>b、银行开户证明</strong>
				<br />
				<strong>c、开票资料</strong>
				<br />
				<strong>d、税务登记证上必须盖有一股纳税人的印章</strong>
			</p>
			<p class="about1_p2 mart">7、2019年4月1日起发货的订单，<span style="color:#FF0000">发票税率由16％变更为13％</span>。</p>
			<p class="service_yBox_about1">
				<span>4</span>
				关于保修
			</p>
			<p class="about1_p1 mart"><strong>关于保修</strong></p>
			<img src="../../assets/img/details_commodityPic7.webp.jpg"/>
			<p class="about1_p2 mart">
				<span style="color: #FF0000">免责条款一下列情況不属“三包”范围，预约服务点可实行收费维修</span>
				<br />
				1、消费者因搬运、保管不当等造成的损坏；
				<br />
				2、非我司指定维修点安装、维修造成的损坏；
				<br />
				3、因不可抗拒的自然灾害造成的损坏；
				<br />
				4、超出保修期的；
				<br />
				5、使用环境不符合产品说明书表述。
			</p>
		</section>
		<div class="dc_smallbox mart">
			<span class="dc_smallbox_spanR1">商品评价</span>
			<span @click="b.msg='details_evaluate'" class="dc_right_icon midea-icon icon-right_arrows"></span>	
		</div>
		<div id="dc_evaluate_box">
			<img src="../../assets/img/details_commodity_touxiang.jpeg"/>
			<span class="dc_eb_span1">0***0</span>
			<span class="dc_eb_span2">2019-7-14</span>
			<p>很满意</p>
		</div>
		<div class="dc_smallbox">
			<span @click="b.msg='details_evaluate'" class="dc_eb_span3">查看全部2条评价&nbsp;<i class="midea-icon icon-right_arrows evaluate_icon"></i></span>
		</div>
		<div class="dc_mideabox mart">
			<img src="../../assets/img/details_commodity._mideaPic.webp"/>
			<h3>美的官网商城</h3>
		    <router-link to="/index">返回商城</router-link>
		</div>
		<div class="dc_smallbox mart">
			<span class="dc_smallbox_spanR1">为你推荐</span>
		</div>
		<ul id="dc_selectedItem_box">
			<li>
				<router-link to="">
				   <div class="dc_picbox">
				   		<img src="../../assets/img/details_commodityPic8.jpg"/>
				   		<div class="dc_tag">
				   			<span><em>PRO精选</em></span>
				   		</div>
				   </div>
				   <div class="dc_name">
		               	电烤箱 38升 经典家用大容量 MG38CB-AA                    
				   </div>
				   <div class="dc_price">
					    ￥249.00
					</div>
					<div class="dc_proprice">
					   	￥239
					</div>
					<span class="dc_pro"><em>PRO</em></span>
				</router-link>
			</li>
			<li>
				<router-link to="">
				   <div class="dc_picbox">
				   		<img src="../../assets/img/details_commodityPic9.jpg"/>
				   		<div class="dc_tag">
				   			<span><em>PRO精选</em></span>
				   		</div>
				   </div>
				   <div class="dc_name">
		               	电烤箱 32升 上下独立控温 T3-L326B                    
				   </div>
				   <div class="dc_price">
					    ￥259.00
					</div>
					<div class="dc_proprice">
					   	￥249
					</div>
					<span class="dc_pro"><em>PRO</em></span>
				</router-link>
			</li>
			<!--清除浮动，解决ul没高度的问题-->
			<div style="clear:both;"></div>
		</ul>
		<div class="dc_watchbox">
			<span @click="b.msg='details_details'">点击查看图文详情</span>
		</div>
	</main>
</template>

<script>
import daoji from '../../assets/js/countDown.js'
import details_evaluate from '../details/details_evaluate.vue'
export default {
	data () {
	    return {
	      time1:{
	      	 endtime:""
	      },
	      show:true,
	      noshow:false,
	      noshow1:false,
	      show2:true,
	      noshow2:false,
	      show3:true,
	      noshow3:false
	    }
	},
	props:['a','b'],		
	methods:{
		appear(){
			this.show=!this.show;
			this.noshow=!this.noshow;
		},
		appearR1(){
			this.noshow1=!this.noshow1;
			this.a.goodsNum=1;
		},
		appear1(){
			this.noshow1=!this.noshow1;
			if(this.a.goodsNum>this.a.goodsMaxNum){
				this.noshow1=true;
			}
		},
		appear2(){
			this.show2=!this.show2;
			this.noshow2=!this.noshow2;
		},
		appear3(){
			this.show3=!this.show3;
			this.noshow3=!this.noshow3;
		},
		sub(){
			this.a.goodsNum--;
			if(this.a.goodsNum<1){
				this.a.goodsNum=1;
			}
		},
		add(){
			this.a.goodsNum++;
			if(this.a.goodsNum>this.a.goodsMaxNum){
				this.a.goodsNum=this.a.goodsMaxNum;
			}
		}
	},
	mounted(){
			daoji('2019-08-01 09:05:59',this.time1);
	}
}
</script>

<style scoped>
	.marl{
		margin-left: 10px;
	}
	.mart{
		margin-top: 20px;
	}
	#details_commodity{
		width: 100%;
		background-color: #f4f4f4;;
	}
	#details_commodity_tips{
		width: 100%;
		height: 24px;
		line-height: 24px;
		color: white;
	}
	#details_commodity_tips p{
		font-size: 12px;
	    background: rgb(0, 59, 102);
	    line-height: 16px;
	    color: rgb(255, 255, 255);
	    padding: 4px;
	    padding-left: 10px;
	    display: block;
	}
	#details_commodity_lunbo{
		width: 100%;
		/*border-bottom: 1px solid #E3E3E3;*/
	}
	/*因为轮播不能给高度，要自适应，而引用mint ui要都东西把轮播撑开，所以用padding-bottom撑开*/
	>>>.mint-swipe-items-wrap{
		padding-bottom: 100%;
	}
	#details_commodity_lunbo img{
		width: 100%;
		height: 100%;
	}
	.dc_text1{
		width: 86%;
		padding: 2% 10% 0 3%;
		font-size: 16px;
	    max-height: 42px;
	    color: #333333;
	    overflow: hidden;
	    border-top: 1px solid #eee;
	    background-color: white;
	}
	.dc_text1 span{
		box-sizing: border-box;
	    display: inline-block;
	    height: 18px;
	    line-height: 16px;
	    padding: 0 2px;
	    margin: 0 4px 2px 0;
		font-size: 11px;
	    border: 1px solid #f60;
	    color: #f60;
	}
	.dc_text2{
		width: 86%;
	    height: 40px;
		padding: 1% 10% 0 3%;
		font-size: 14px;
	    line-height: 20px;
	    color: #f60;
	    overflow: hidden;
	    background-color: white;
	}
	.dc_pricebox{
		width: 92%;
	    /*height: 40px;*/
	    /*background-color: pink;*/
		padding: 2% 5% 3% 3%;
		overflow: hidden;
		position: relative;
		background-color: white;
	}
	.dc_price_span1{
		display: block;
		float: left;
		font-weight: bold;
		font-size: 14px;
		color: #f60;
	}
	.dc_price_span1 em{
		font-weight: 500;
		font-size: 24px;
	}
	.dc_oldprice{
		display: block;
		float: left;
		color: #999;
	    font-size: 13px;
	    line-height: 13px;
	    font-weight: 400;
	    margin-top: 14px;
	    margin-left: 5px;
	}
	.dc_price_p{
		/*float: left;*/
		display: block;
		margin-top: 35px;
	}
	.dc_price_span2{
		display: block;
		float: left;
		color: #333;
		font-size: 16px;
	}
	.dc_price_span3{
		display: block;
		float: left;
		width: 33px;
		height: 15px;
		float: left;
		background-color: #242733;	
		/*border-radius: 5px;*/
		text-align: center;
		margin-left: 5px;
		margin-top: 3px;
	}
	.dc_price_span3 em{
		display: block;
		color: #ffe7b9;
		font-size: 6px;
		line-height: 15px;
		font-weight: bold;
	}
	.dc_price_span4{
		display: block;
		position: absolute;
		right: 40px;
		top: 20px;
		font-size: 12px;
	    line-height: 12px;
	    height: 12px;
	    color: #999;
	}
	.dc_time{
		width: 94%;
		background-color: #f60;
		padding: 1.5% 3% 1.5% 3%;
		color: #FFFFFF;
		line-height: 18px;
		font-size: 12px;
	    
	}
	.dc_time span{
		display: inline-block;
	    font-size: 12px;
	    height: 18px;
	    line-height: 18px;
	    text-align: center;
	    background-color: white;
	    padding: 0 5px;
	    margin-right: 10px;
	    color: #f60;
	}
	#dc_probox{
		width: 100%;
		height: 24px;
		border-bottom: 1px solid #eee;
		width: 94%;
		padding: 8px 3% 8px 3%;
		background-color: white;
	}
	.dc_probox_span{
		display: block;
		float: left;
		line-height: 21px;
		margin-left: 8px;
	}
	.dc_probox_span em{
		color: #FF6600;
	}
	.dc_probox_span i{
		margin-left: 2px;
		margin-top: 5px;
	}
	#dc_probox a{
		display: block;
		float: right;
		/*margin-right: 30px;*/
		color: #706f6d;
		cursor: pointer;
		line-height: 24px;
	}
	.dc_smallbox{
		height: 24px;
		border-bottom: 1px solid #eee;
		width: 94%;
		padding: 8px 3% 8px 3%;
		background-color: white;
	}
	.dc_smallbox_span1{
		line-height: 24px;
		color: #999;
	    float: left;
	    font-size: 12px;
	}
	.dc_smallbox_spanR1{
		line-height: 24px;
		color: #333;
	    float: left;
	    font-size: 14px;
	}
	.dc_proSales_span1{
		display: inline-block;
		text-align: center;
		font-size: 11px;
		height: 16px;
		line-height: 16px;
		margin-top: 5px;
		width: 52px;
		box-sizing: border-box;
		float: left;
		color: #fff;
		background-color: #f60;
		margin-left: 8px;
	}
	.dc_proSales_span2{
		display: inline-block;
		font-size: 11px;
		height: 16px;
		line-height: 16px;
		margin-top: 5px;
		box-sizing: border-box;
		float: left;
		color: #333;
		margin-left: 8px;
	}
	.dc_xiala{
		clear: both;
	}
	.dc_smallbox_span2{
		display: block;
		float: right;
		line-height: 24px;
	}
	#dc_proSales_yBox1{
		width: 94%;
		padding: 8px 3% 8px 3%;
		height: 56px;
		background-color: #fafafa;
	}
	#dc_proSales_yBox1 p{
		width: 100%;
		height: 28px;
		line-height: 24px;
		color: #999;
		font-size: 11px;
	}
	.dc_right_icon{
		display: block;
		float: right;
		cursor: pointer;
		line-height: 24px;
	}
	.dc_selected_span1{
		float: left;
		line-height: 24px;
		font-size: 12px;
		color: #333;
	}
	#dc_selected_motai{
		width: 100%;
		height: 100%;
		z-index: 3;
		position: fixed;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.5);
	}
	#dc_selected_box{
		width: 100%;
		height: 289px;
		z-index: 4;
		position: fixed;
		bottom: 0;
		left: 0;
		background-color: white;
	}
	.dc_selected_sbox{
		width: 100%;
		height: 55px;
		padding-top: 25px;
	    margin-left: 15px;
	    border-bottom: 1px solid #f4f4f4;
	    /*background-color: pink;*/
	}
	.dc_selected_sbox h3{
		float: left;
		height: 30px;
        line-height: 30px;
	    font-size: 15px;
	    letter-spacing: 2px;
	    color: #666;
	}
	.dc_selected_sbox span{
		display: block;
		height: 30px;
        line-height: 30px;
		margin-left: 10px;
		float: left;
		background-color: #f60;
	    border: 1px solid #f60;
	    color: #fff;
	    font-size: 12px;
	    text-align: center;
	    padding: 0 15px;
	}
	.dc_selected_numbox{
		width: 100%;
		height: 55px;
		padding-top: 25px;
	    margin-left: 15px;
	    border-bottom: 1px solid #f4f4f4;
	    /*background-color: pink;*/
	}
	.dc_selected_numbox h3{
		float: left;
		height: 30px;
        line-height: 30px;
	    font-size: 15px;
	    letter-spacing: 2px;
	    color: #666;
	}
	.dc_selected_numbox input{
		float: left;
		width: 40px;
		height: 30px;
		text-align: center;
		border: 1px solid #E3E3E3;
	}
	.dc_selected_numbox span{
		display: block;
		float: left;
		width: 30px;
		height: 30px;
		border: 1px solid #E3E3E3;
		font-size: 20px;
		font-weight: bold;
		text-align: center;	
	}
	.dc_selected_btn{
		width: 100%;
		height: 46px;
		background-color: #f60;
		text-align: center;
	}
	.dc_selected_btn span{
		line-height: 46px;
		font-size: 16px;
		color: #FFFFFF;
	}
	#dc_sizeNum_yBox{
		width: 100%;
		height: 736px;
		/*margin-top: 41px;*/
	    background-color: white;
	}
	.sizeNum_yBox_div{
		padding: 0 15px 15px 5%;
        border-bottom: 1px solid #f4f4f4;
        /*background-color: pink;*/
	}
	.sizeNum_yBox_div h4{
		height: 52px;
	    line-height: 52px;
	    font-size: 14px;
	    color: #999;
	}
	th{
		width: 110px;
    	color: #828282;
    	font-size: 12px;
	    height: 28px;
	    line-height: 28px;
	    vertical-align: top;
	    text-align: left;
	    font-weight: 400;
	}
	#dc_service_yBox{
		width: calc(100% - 5% -20px);
		/*height: 3800px;*/
	    background-color: white;
	    font-size: 14px;
    	color: #afafaf;
    	padding: 0 20px 15px 5%;
    	overflow: hidden;
	}
	.service_yBox_about1{
		line-height: 20px;
	    margin-top: 30px;
	    margin-bottom: 20px;
	    font-size: 18px;
	    font-weight: bold;
	    color: #000;
	}
	.service_yBox_about1 span{
    	display: inline-block;
	    height: 20px;
	    line-height: 20px;
	    width: 20px;
	    margin-right: 8px;
	    border-radius: 50%;
	    font-size: 16px;
	    text-align: center;
	    background-color: #000;
	    color: #fff;
	}
	.about1_p1{
		line-height: 72px;
		color: #0092D7;
	}
	.about1_p2{
		line-height: 20px;
	}
	#dc_service_yBox img{
		width: 100%;
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
	.dc_eb_span3{
		display: block;
		text-align: center;
		color: #0092d8;
	    height: 24px;
	    line-height: 24px;
	    font-size: 14px;
	}
	.dc_mideabox{
		height: 30px;
		border-bottom: 1px solid #eee;
		width: 94%;
		padding: 10px 3% 10px 3%;
		background-color: white;
	}
	.dc_mideabox img{
		width: 30px;
		height: 30px;
		float: left;
	}
	.dc_mideabox h3{
		display: block;
		float: left;
		height: 30px !important;
    	line-height: 30px !important;
    	color: #333;
	    float: left;
	    font-size: 14px;
	    margin-left: 10px;
	    font-weight: normal;
	}
	.dc_mideabox a{
		float: right;
	    width: 73px;
	    height: 28px;
	    line-height: 28px;
	    border: 1px solid #0093d5;
	    border-radius: 3px;
	    text-align: center;
	    font-size: 12px;
	    color: #0093d5;
	}
	#index_selectedItem_box{
		background-color: white;
		width: 100%;
		
	}
	#dc_selectedItem_box li{
		float: left;
		width: 50%;
		border: 1px solid #eee;
		box-sizing: border-box;
		background-color: white;
	}
	.dc_picbox{
		width: 100%;
		position: relative;
	}
	.dc_picbox img{
		width: 100%;
		height: 100%;
	}
	.dc_tag{
		width: 60px;
		height: 25px;
		position: absolute;
		top: 0;
		right: 0;
		background-color: #242733;
		text-align: center;
	}
	.dc_tag em{
		display: block;
		color: #ffe7b9;
		/*font-size: 12px;*/
		font-weight: 600;
		/*margin-top: 4px;
		margin-left: 4px;*/
		font-size: 0.724rem;
		line-height: 25px;
		text-align: center;
	}
	.dc_name{
		height: 37px;
	    overflow: hidden;
	    color: #333;
	    font-size: 13px;
	    margin-left: 15px;
	}
	.dc_price{
		float: left;
	    color: #ff3300;
	    font-size: 16px;
	    margin-left: 15px;
	    padding-bottom: 30px;
	}
	.dc_proprice{
		float: left;
		color: dimgray;
		margin-left: 3px;
	    font-size: 16px;
	}
	.dc_pro{
		display: block;
		width: 28px;
		height: 13px;
		float: left;
		background-color: #242733;
		margin-left: 5px;
		margin-top: 5px;
	}
	.dc_pro em{
		display: block;
		color: #ffe7b9;
		font-size: 8px;
		margin-top: -2px;
	}
	.dc_watchbox{
		width: 90%;
		height: 30px;
		padding: 5%;
		
	}
	.dc_watchbox span{
		display: inline-block;
		margin: 0 auto;
	    font-size: 13px;
	    height: 28px;
	    line-height: 28px;
	    padding: 0 10px;
	    border: 1px solid #ccc;
	    border-radius: 3px;
	    color: #666;
	    background-color: #fff;
	    position: relative;
	    left: 50%;
	    transform: translateX(-50%);
	}
</style>