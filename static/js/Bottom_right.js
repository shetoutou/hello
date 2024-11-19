//增加右下角浮动菜单
function addBottomRight() {
	// 定义 FkService 对象并添加 fk_upWard 方法
	var FkService = {
		fk_upWard: function() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		}
	};
	var tab = document.getElementById('body');
	var div = '<div class="wapnone dahai"><ul>' +
		'<li><div class="dahai_consult_cont1" style="display: none;">'+
		'<span class="dahai_triangle"></span> 在线咨询</div></li>' +
		'<li class="dahai_box dahai_consult">'+
		'<div class="dahai_consult_cont"><span class="dahai_triangle"></span>' +
		'<div class="dahai_consult_cont_top">'+
		'<span class="dahai_hint"><span class="dahai_icon"></span>' +
		'<span> 如遇问题，请发送至邮箱 </span></span>' +
		'<span class="dahai_button" onclick="window.open(\'https://qm.qq.com/q/vawYy9ZmFi\')">QQ群聊</span>' +
		'<span class="dahai_button" onclick="window.open(\'http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=1770753834@qq.com\')">在线邮件</span>' +
		'</div><span class="dahai_phone"> QQ ：1770753834 </span>'+
		'<span class="dahai_check_site"><span class="dahai_icon"></span>' +
		'<span onclick=""></span></span></div></li>' +
		'<li class="dahai_box dahai_qr"><div class="dahai_qr_cont"><span class="dahai_triangle"></span>' +
		'<div class="dahai_qrimg"><span class="dahai_qrimg_site"></span></div>' +
		'<div class="dahai_qrtext"><span>手机打开</span></div></div></li>' +
		'<li class="dahai_box dahai_dh" onclick="window.open(\'https://github.com/shetoutou/hello\')">' +
		'<div class="dahai_dh_cont"><span class="dahai_triangle"></span> 本网站为纯静态托管网站，源码地址!</div>' +
		'</li><li class="dahai_box dahai_ws" onclick="window.open(\'https://kdocs.cn/l/cftSZDXDEYJX\')">' +
		'<div class="dahai_ws_cont"><span class="dahai_triangle"></span> 网站地址</div></li>' +
		'<li class="dahai_box dahai_upward" onclick="FkService.fk_upWard();" style="display: block;">' +
		'<div class="dahai_upward_cont"><span class="dahai_triangle"></span><span> 返回顶部 </span></div>' +
		'</li></ul></div>'; //字符串类型
	tab.insertAdjacentHTML('beforeend', div);
};
addBottomRight();