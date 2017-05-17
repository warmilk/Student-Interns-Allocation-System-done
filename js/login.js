function jzmm() {
	var oInput=document.getElementById('jzmm');
	var oInputCss=oInput.style.className;
	oInput.onclick=function () {
		oInput.checked="checked"?oInputCss="login-form-aboutPW_checked":oInputCss="login-form-aboutPW_disChecked";
	};
}

window.onload=function() {
	jzmm();
}