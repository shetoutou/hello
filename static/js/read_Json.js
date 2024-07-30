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

//加载失败随机获取内置icon
function geticon(th) {
	//获取（1,3)随机数
	var num = Math.floor(Math.random()*(3-1+1))+1;
	var url = "static/img/noico_"+num+".png"
	th.src = url;
	//console.log(th+"错误的icon执行了备用icon"+url);
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
						strHtml = strHtml + '<li class="col-3 col-sm-3 col-md-3 col-lg-1"><a rel="nofollow" href="'+ str[j]["url"]+'" target="_blank">'
						strHtml = strHtml + '<img class="icon" src="https://www.favicon.vip/get.php?url='+str[j]["url"]+'" onerror="geticon(this)" />';
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


