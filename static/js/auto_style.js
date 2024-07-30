//每日壁纸
function dailybing(th) {
	var date = getNowFormatDate();
	var url = "https://dailybing.com/api/v1/"+date+"zh-cnFHD";
	th.src = url;
	//console.log("每日壁纸:"+url);
};

//背景图片加载后重新加载
function getBackground(th) {
	var url = "https://static.monknow.com/newtab/wallpaper/aecb5aa03a9271ab83d22555dc3499c4.jpg"
	th.src = url;
};

//获取当前日期函数
function getNowFormatDate() {
  let date = new Date(),
    year = date.getFullYear(), //获取完整的年份(4位)
    month = date.getMonth() + 1, //获取当前月份(0-11,0代表1月)
    strDate = date.getDate() // 获取当前日(1-31)
  if (month < 10) month = `0${month}` // 如果月份是个位数，在前面补0
  if (strDate < 10) strDate = `0${strDate}` // 如果日是个位数，在前面补0
  return `${year}${month}${strDate}`
}