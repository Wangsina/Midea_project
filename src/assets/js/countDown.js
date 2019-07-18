
//函数的参数为活动的结束日期
//	var stringTime = '2019-07-10 23:59:59';
export default	function(stringTime,a){
	  var k=setInterval(()=>{
	  	  //获取即时时间的对象
	    var now = new Date();
	    //获取结束时间的对象
	    var end = new Date(stringTime);
	    var nowTimeStamp = now.getTime();
	    var endTimeStamp = end.getTime();
	    var remainSecond= (endTimeStamp - nowTimeStamp) / 1000;
	    //剩余的秒数等于days+hours+minutes+seconds
	    var oneDay = 24*60*60;
	    var oneHour = 60*60;
	    var oneMinute = 60;
	    var remainDays = parseInt((remainSecond / oneDay));
	    var remainHours   = parseInt(((remainSecond - (remainDays*oneDay)) / oneHour));
	    var Hours = parseInt((remainSecond / oneHour));
	    var remainMinutes = parseInt((remainSecond - (Hours*oneHour)) / oneMinute);
	    var Minutes = parseInt(remainSecond / oneMinute);
	    var remainSeconds = parseInt(remainSecond - (Minutes * oneMinute));
	    //倒计时开始
	    var endtime = remainDays + '天'+ remainHours + '小时'+ remainMinutes +'分钟'+ remainSeconds +'秒';
	    var timeOut = '活动已经结束';
	    //判断活动是否到期
	    if(remainDays < 0 || remainHours < 0 || remainMinutes < 0 || remainSeconds < 0){
	        clearInterval(k);//清除定时器
	        a.endtime='活动已经结束';
	    }else if(remainDays == 0 && remainHours == 0 && remainMinutes == 0 && remainSeconds == 0){
	            clearInterval(k);
	            a.endtime='活动已经结束';
	    }else{
            a.endtime=endtime;
	    }
	  },1000)
	}
