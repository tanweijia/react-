var submitflag = false;
function check() {
  form1.CNcustName.value = encodeURI(form1.custNameTmp.value);
  if (
    document.all.CNcustName.value == "" ||
    document.all.CNcustName.value == null
  ) {
    alert("姓名不能为空！");
    document.all.CNcustName.focus();
    return;
  }
  //证件类型、证件号码
  if (document.all.credType.value == "xx") {
    alert("请选择证件类型！");
    return;
  }
  //添加身份证最后一位输入‘x’->‘X’的转换   add by kfzx-fengyd 20170815
  document.all.credNum.value = document.all.credNum.value.toUpperCase();
  //add end
  var cn = document.all.credNum.value;
  if (cn == "" || cn == null) {
    alert("请输入证件号码");
    document.all.credNum.focus();
    return;
  }
  if (document.all.credType.value == "0") {
    if (cn == "" || cn == null || cn.length != 18) {
      alert("请输入18位二代身份证号码");
      document.all.credNum.focus();
      return;
    }
    if (checkPID(cn) == false) {
      alert("输入的身份证号码不正确，请重新输入！");
      document.all.credNum.focus();
      return;
    }
  }
  //手机号
  var wapMobile = document.all.phoneNum.value;
  if (wapMobile.indexOf(" ") != -1) {
    alert("手机号码中间不能有空格！");
    document.all.phoneNum.focus();
    return;
  } else if (wapMobile == "") {
    alert("请输入手机号码！");
    document.all.phoneNum.focus();
    return;
  } else if (!/^\d{11}/.test(wapMobile)) {
    alert("输入的手机号中包含非法字符或者长度不为11位！");
    document.all.phoneNum.focus();
    return;
  }
  if (!document.all.KeyPart.isValid()) {
    alert("输入的验证码不合法，请重新输入！");
    document.all.KeyPart.focus();
    return;
  }
  if (submitflag) {
    alert("请勿重复提交！");
    return;
  } else {
    submitflag = true;
  }
  document.all.safeSubmit1.reset();
  document.all.KeyPart.commitKeyPart(document.all.KeyPart);
  document.all.KeyPart.commit(document.all.safeSubmit1);
  document.all.safeSubmit1.submit(form1);
}
function reset() {
  document.all.CNcustName.value = "";
  document.all.credNum.value = "";
  document.all.phoneNum.value = "";
  document.getElementById("KeyPart").clear();
  document.all.credType.value = "xx";
}
if (!pulginHasInstalled()) {
  document.write("<aaa name='");
} else {
  document.write("<object name='");
}
if (!pulginHasInstalled()) {
  document.write("&nbsp;");
}
var judgeVersionKeyPart = function(n) {
  var mac_safecontrol_version = "";
  pluginInputVersion = "1.0.0.5";
  pluginSubmitVersion = "1.0.0.3";
  pluginFullScreenVersion = "1.0.0.1";
  pluginClientBindingVersion = "1.0.0.0";
  pluginCLCacheVersion = "1.0.0.2";
  if (!checkVersionIsOk()) {
    if (document.getElementById("plagin_download_tip") == null) {
      if (n == 0) {
        document.write(
          "<a id='plagin_download_tip' style='color:blue;' href='/ICBCChromeExtension.msi'><div style='width:100%;white-space:normal;'>您的控件版本过低，请点击下载更新后重启浏览器</div></a>"
        );
      } else {
        document
          .getElementById("plagin_download_tip_span")
          .insertAdjacentHTML(
            "afterBegin",
            "<a id='plagin_download_tip'  style='color:blue;' href='/ICBCChromeExtension.msi'><div style='width:100%;white-space:normal;'>您的控件版本过低，请点击下载更新后重启浏览器</div></a>"
          );
      }
    }
    var embeds = document.body.getElementsByTagName("object");
    for (var i = 0; i < embeds.length; i++) {
      embeds[i].style.display = "none";
    }
  }
};
if (!pulginHasInstalled()) {
  if (document.getElementById("plagin_download_tip") == null) {
    document.write(
      "<a id='plagin_download_tip'  style='color:blue;' href='/ICBCChromeExtension.msi'><div style='width:100%;white-space:normal;'>您未安装控件，请点击下载安装完成后重启浏览器</div></a>"
    );
  }
  document.all.KeyPart.style.display = "none";
} else {
  if (judgeVersionKeyPart(0) == false) {
    if (document.getElementById("plagin_download_tip_span") == null) {
      document.write("<span id='plagin_download_tip_span'></span>");
    }
    window.onfocus = function() {
      setTimeout("judgeVersionKeyPart(1)", 200);
    };
  }
}
if (navigator.userAgent.toLowerCase().indexOf("chrome/") != -1) {
  //这里注意chrome的useragent也包含safari
  VerifyimageFrame.location.href =
    "https://epass.icbc.com.cn/servlet/com.icbc.inbs.person.servlet.Verifyimage2?randomKey=1551152255747482242&imageAlt=点击图片可刷新" +
    "&appendRandom=" +
    new Date().getTime();
} else if (
  navigator.userAgent.toLowerCase().indexOf("safari") != -1 ||
  navigator.userAgent.toLowerCase().indexOf("firefox") != -1
) {
  VerifyimageFrame.location.href =
    "https://epass.icbc.com.cn/servlet/com.icbc.inbs.person.servlet.Verifyimage2?randomKey=1551152255747482242&imageAlt=点击图片可刷新" +
    "&appendRandom=" +
    new Date().getTime();
}
function refreshVerifyimage() {
  if (navigator.userAgent.toLowerCase().indexOf("chrome/") != -1) {
    //这里注意chrome的useragent也包含safari
    var url =
      "https://epass.icbc.com.cn/servlet/com.icbc.inbs.person.servlet.Verifyimage2?randomKey=1551152255747482242&imageAlt=点击图片可刷新" +
      "&appendRandom=" +
      new Date().getTime();
    VerifyimageFrame.location.replace(url);
  } else if (navigator.userAgent.toLowerCase().indexOf("safari") != -1) {
    //safari回退时，验证码不刷新问题
    window.focus(); //解决db103335688
    VerifyimageFrame.location.href =
      "https://epass.icbc.com.cn/servlet/com.icbc.inbs.person.servlet.Verifyimage2?randomKey=1551152255747482242&imageAlt=点击图片可刷新" +
      "&appendRandom=" +
      new Date().getTime();
  } else {
    VerifyimageFrame.location.reload();
  }

  try {
    //刷新验证码后重新进行倒计时，只对页面定义了vctimeout()的页面有效。
    clearTimeout(vctime);
    vctime = setTimeout("vctimeout()", 300000);
  } catch (exception) {}
}
