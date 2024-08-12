head=document.getElementsByTagName('head').item(0);
CreateLink("https://lib.baomitu.com/jquery/2.2.4/jquery.min.js");
function CreateLink(file) {
	var new_element;
	new_element = document.createElement("script");
	new_element.setAttribute("type", "text/javascript");
	new_element.setAttribute("rel", "stylesheet");
	new_element.setAttribute("src", file);
	void(head.appendChild(new_element));
}
/**
 * 将文本内容复制到剪切板
 * @param str 复制内容
 */
function copyText(str) {
	/* var add_html = '<div><textarea id="copy" style="display:none;"></textarea>';
	$("DL").eq(0).after(add_html);
	$('#copy').text(str).show(); */
	var ele = document.getElementById("json");
	ele.select();
	document.execCommand('Copy', false, null);
	// $('#copy').hide();
	//alert('复制成功!');
	 var result = confirm('复制成功！是否去验证JSON格式？');  
	    if(result){
			var url= "https://www.json.cn/";
			$(location).attr('href', url);
		};
	// document.write("复制成功!");
}
 /**
  * 复制内容
  */
 function copyJson() {
     var str= $("#json").text();
	 copyText(str);
 }
 /**
  * 网页数样式插入
  */
function addHtml() {
	var add_text1 = '<div><textarea rows="30%" cols="100%" id="json"></textarea></div>';
	$("DL").eq(0).after(add_text1);
	var add_text2 = '书签文件转json字符数据如下：'+
	'<div><button class="btn btn-primary btn-sm " data-toggle="modal" id="shareQrcode" onclick="copyJson();" title="复制数据">'+
	'<span class="glyphicon  glyphicon-copy"></span>复制数据</button></div>';
	$("H1:first").html(add_text2);
}

/**
 * 判断dt标签下是否为A标签（树下是否有下分支）
 * @param {*} TwoTreeDt 传入dt
 * @return 是A标签返回true（无下分支），不是则返回false
 */
function DtIfATag(TwoTreeDt) {
	// console.log(TwoTreeDt.getElementsByTagName("a"));
	if(TwoTreeDt.getElementsByTagName("a")!=undefined && TwoTreeDt.getElementsByTagName("a").length>0) {
		//console.log("A标签:"+TwoTreeDt.children("a").html());
		//jsonData = jsonData + '{"name":"'+TwoTreeDt.children("a").html()+'","url":"'+TwoTreeDt.children("a").href+'"}';
		return true;
	}else{
		//console.log("h3标签:"+TwoTreeDt.children("h3").html());
		//jsonData = jsonData + '{"name":"'+TwoTreeDt.children("h3").html()+'"';
		return false;
	};
};
//获取元素下DL下的DT；
function DlAndDt(tag) {
	if(tag != undefined) {
		return tag.children("dl").children("dt");
	}return ;
}
/**
 * 树读取
 * @param {*} DtTag 循环数组标签
 */
function TreeReadA(DtTag) {
	var ATag= DtTag.getElementsByTagName("a");
	// console.log(ATag);
	var jsonData = "[";
	for (var i=0;i<ATag.length;i++){
		if( i > 0 ) jsonData = jsonData + ",";
		jsonData = jsonData + '{"name":"'+ATag[i].innerText+'","url":"'+ATag[i].href+'"}';
	}
	jsonData = jsonData + "]";
	//console.log(jsonData);
	return jsonData;
}
/**
 * 标签树执行
 */
function startTree() {
	var jsonData = "[";
	var DtTag = $("body>DL>DT");//body下第一个dt标签；
	DtTag = DtTag.splice(1,DtTag.length);
	// console.log(DtTag);
	for (var i=0;i<DtTag.length;i++){
		if( i > 0 ) jsonData = jsonData + ",";
		var dt = DtTag[i];
		if(DtIfATag(dt)){
			jsonData = jsonData + '{"name":"'+dt.childNodes[0].innerText+'","data":'+TreeReadA(dt)+'}';
		}else{
			jsonData = jsonData + '{"name":"'+dt.childNodes[0].innerText+'","data":[]}';
			//jsonData = forFourTreeDt(tree5,jsonData);
		};
	};
	jsonData = jsonData + "]";
	console.log(jsonData);
	return jsonData;
};

$(document).ready(function() {
	addHtml();
	var va = startTree();
	/* var va = "";
	$("a").each(function(e) {
		//var i=1;
		var tex=$(this).text().replace(/[~'!<>@#$%^&*()-+_=:"]/g,'');
		va = va + ',{"name":"' + tex + '","url":"' + this.href + '"}';
	});
	va = "[" + va.substr(1,va.length) + "]"; */
	$("#json").text(va);
	$("dl:first").hide();
	
});
