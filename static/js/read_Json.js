head=document.getElementsByTagName('head').item(0);
CreateLink("https://lib.baomitu.com/jquery/2.2.4/jquery.min.js");
function CreateLink(file) {
	var new_element;
	new_element = document.createElement("script");
	new_element.setAttribute("type", "text/javascript");
	new_element.setAttribute("rel", "stylesheet");
	new_element.setAttribute("src", file);
	void(head.appendChild(new_element));
};

//随机获取本地iocn图片，返回地址
function getFloorIcon() {
	var minNum = 1;
	var maxNum = 8;
	//获取（1,8)随机数
	var num = Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
	var url = "static/img/noico_"+num+".png"
	return url;
};

// 数字四舍五入, value: 数据源,n: 保留几位小数
function retain(value, n) {
	if(n==='null' || n === 'undefined' || n === 0) return parseInt(value);
	let tran = Math.round(value * Math.pow(10, n)) / Math.pow(10, n);
	let tranV = tran.toString();
	let newVal = tranV.indexOf('.');
	if(newVal < 0) {
		tranV += '.'
	};
	for(let i = tranV.length - tranV.indexOf('.'); i <= n; i++) {
		tranV += '0';
	};
	return tranV
}
//icon二进制流判断字节大小并随机抽取本地icon顶替
function preloadImage(url,th) {
	var ByteKb ;
	fetch(url).then(function(res){
		return res.blob();
	}).then(function(data){
		ByteKb = retain(data.size/1024,4);
		//console.log("icon大小KB:"+ByteKb);
		if (ByteKb === 0.6123){
			th.src = getFloorIcon();
			return ;
		}
		return ;	
	});
}
//icon加载失败后执行顶替
function geticon(th) {
	th.src = getFloorIcon();
	//console.log(th+"错误的icon执行了备用icon"+url);
};
//icon加载成功后判断片大小是否真实
function ifIcon(th) {
	preloadImage(th.src,th);
};


$(document).ready(function() {
	$.getJSON("static/json/data.json",function(data){
		//console.log(data);
		var ulTag = $(".mylist ");
		$.each(data,function(infoIndex,info){
			var strHtml = "";
			for (var i=0;i<ulTag.length;i++){
				var attr = ulTag.eq(i).attr('title');
				//console.log(attr);
				if (attr == info["name"]){
					var str = info["data"];
					for (var j=0;j<str.length;j++){
						var iconurl = 'https://www.favicon.vip/get.php?url='+str[j]["url"];
						strHtml = strHtml + '<li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="'+ str[j]["url"]+'" target="_blank">'
						strHtml = strHtml + '<img class="icon" src="'+iconurl+'" onerror="geticon(this)"  onload="ifIcon(this)" />';
						strHtml = strHtml + '<span>'+str[j]["name"]+'</span></a></li>';
					};
					ulTag.eq(i).children('li:not(:first)' ).remove();
					//console.log(strHtml);
					// console.log(ulTag.eq(i).html());
					ulTag.eq(i).append(strHtml);
					break;
				};
			};
		});
		$(".container").trigger("create"); 
	});
	
});


