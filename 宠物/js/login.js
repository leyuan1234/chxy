// JavaScript Document
function openNew(){
	var sHeight=document.documentElement.scrollHeight;
	var sWidth=document.documentElement.scrollWidth;
	var wHeight=document.documentElement.clientHeight;
	var oMsk=document.createElement("div");
	    oMsk.id="mask";
		oMsk.style.height=sHeight+"px";
		oMsk.style.width=sWidth+"px";
		document.body.appendChild(oMask);
	var oLogin=document.createElement("div");
	    oLogin.id="oLogin";
	    oLogin.innerHTML="<div class='loginCon'>
 <div class='logo'><img src='../宠物/img/logo.jpg'style="height:190px;'/></div>
 <div><input type='text' class='user' value='请输入用户名' style='border:0px; outline:none; background:#FFF;margin-left:100px;'/></div>
 <a><hr width="350px"/></a>
 <div><input type='password' class='password' value='请输入密码' style='border:0px; outline:none;background:#FFF;margin-left:100px;'/></div>
 <a><hr width='350px'/></a>
 <div class='captchas'><input type='text'class='captcha' value='请输入验证码' style='border:0px; outline:none;background:#FFF; margin-left:100px;'/><div><img style='position:absolute;width:80px;height:30px;left:600px; top:-3px;' /></div></div>
 <a><hr width='350px'/></a>
 <div class='checkbox' ><input type='checkbox'/><span>记住密码</span></div>
 <button style='width:350px;height:50px;margin-top:20px;border-radius:5px;background:#ecc30a;outline:none;font-size:18px;'>登录</button>
 <div class='sign-register'><a href='#'><span>注册新账号|</span></a><a href="#"><span>忘记密码</span></a></div>
 <div id='close'></div>
 </div>"
	}