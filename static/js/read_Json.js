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

$(document).ready(function() {
	console.log("测试测试");
	$.getJSON("static/json/data.json",function(data){
		console.log(data);
		$.each(data,function(infoIndex,info){
			strHtml += "姓名："+info["name"]+"<br>"; 
			strHtml += "性别："+info["sex"]+"<br>"; 
			strHtml += "邮箱："+info["email"]+"<br>"; 
			strHtml += "<hr>" 
		});
	});
	$.ajax({
	     type: "get",
	     url: "static/json/data.json",
	     dataType: "json",
	     async: false,
	     success: function(data) {
	          console.log(data.total);
	     }
	});


});


