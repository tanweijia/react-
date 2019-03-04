import React, { Component } from "react";
import "antd/dist/antd.css";
import { Carousel } from "antd";
import { HashRouter as Router, Route, Link } from "react-router-dom";
class Lbanner extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  toRegPage(){
    // 编程式导航
    this.props.history.push('/reg')
    // 编程式导航本质上就是对location方法的封装
    // location.href
  }
  render() {
    return (
      <div id="index_dd">
        <div className="nav-icbc" />
        <div className="banner-bolck">
          <Carousel autoplay>
            <div>
              <img
                src="https://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/E_bank/2019/zyzh1006_190225_190228_zsxw_1440_370.jpg"
                style={{ width: "100%", height: "380px" }}
                alt=""
              />
            </div>
            <div>
              <img
                src="https://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/E_bank/2019/zyzh1002_190202_190228_gyxsxcxc_1440_370.jpg"
                style={{ width: "100%", height: "380px" }}
                alt=""
              />
            </div>
            <div>
              <img
                src="https://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/E_bank/2019/zyfh1057_190206_190228_hbxwf_1440_370.jpg"
                style={{ width: "100%", height: "380px" }}
                alt=""
              />
            </div>
            <div>
              <img
                src="https://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/E_bank/2019/zyzh1010_190107_cq_gygglmk_1440_370.jpg"
                style={{ width: "100%", height: "380px" }}
                alt=""
              />
            </div>
          </Carousel>
          <div>
            <div id="ICBC_login" style={{ display: "block" }}>
              {/* 登陆页banner样式 */}
              <link
                href="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/css/frame/css/index.css"
                rel="stylesheet"
                type="text/css"
              />
              <link
                rel="stylesheet"
                href="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/css/common.css"
              />
              <link
                rel="stylesheet"
                href="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/css/indexp.css"
              />
              <link
                rel="stylesheet"
                href="https://member.icbc.com.cn/Portal_Resources/Common/AdCss/NewLunboQT_MS_Layout.css"
              />
              <link
                rel="stylesheet"
                href="https://member.icbc.com.cn/icbc/include/AD_Huangdengpian.css"
              />
              <link
                rel="stylesheet"
                href="https://epass.icbc.com.cn/css/login-s.css"
              />
              <link
                href="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/css/new_headerFooter.css"
                rel="stylesheet"
                type="text/css"
              />
              <div className="ICBC_login_center">
                <div className="ICBC_login_right">
                  <div id="divss" tabindex="0" hidefocus="true" style={{ outline: "none" }}/>
                  <form
                    id="form1"
                    name="form1"
                    onsubmit="return false;"
                    action="/servlet/com.icbc.inbs.servlet.ICBCINBSEstablishSessionServlet"
                    target="hiddenPage1551098656201230864"
                    method="post"
                  >
                    <input type="hidden" id="AutoVerify" name="AutoVerify" value="4"/>
                    <input type="hidden" id="requestChannelInput" name="requestChannelInput" value="302"/>
                    <input type="hidden" id="requestChannelzoneNo" name="requestChannelzoneNo" value="0200"/>
                    <input type="hidden" id="serviceId" name="serviceId" value=""/>
                    <input type="hidden" id="serviceIdInto" name="serviceIdInto" value=""/>
                    <input type="hidden" id="transData" name="transData" value=""/>
                    <input type="hidden" id="loginCardFlag" name="loginCardFlag" value="0"/>
                    <input type="hidden" id="ua" name="ua"
                      value="Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/72.0.3626.81 Safari/537.36"
                    />
                    <input type="hidden" id="language" name="language" value=""/>
                    <input type="hidden" id="netType" name="netType" value="130"/>
                    <input name="randomId" type="hidden" value="1551098656201230864"/>
                    <input name="data" type="hidden" value="" />
                    <input name="ComputID" type="hidden" value="18" />
                    <input name="PlatFlag" type="hidden" value="3" />
                    <input name="logonSrc" type="hidden" value="1" />
                    <input name="serviceIdfirst" id="serviceIdfirst" type="hidden" value=""/>
                    <input name="orgurl" id="orgurl" type="hidden" value="0" />
                    <input name="APPNO" id="APPNO" type="hidden" value="31" />
                    <input name="ccsi" id="ccsi" type="hidden" value="" />
                    <input type="hidden" name="resolution" value="" />
                    <div className="login-panel" style={{ background: "white" }}>
                      <div className="form-area">
                        <div className="form-area-line" style={{ paddingTop: "15px" }}>
                          <div className="label-login" id="label-login-id"
                            style={{paddingBottom: "0px",float: "left",paddingTop: "11px",width: "220px"}}
                          >
                            <span><b id="logintips">登录</b></span>
                          </div>

                          <div style={{ float: "left" }}>
                            <a target="_self" style={{ textDecoration: "none" }}>
                              <img
                                width="46px"
                                height="46px"
                                style={{ border: "currentColor" }}
                                src="https://epass.icbc.com.cn/images/login/erwm.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                        <div className="form-area-line">
                          <div className="wrapper-obj">
                            <div
                              style={{ float: "left" }}
                              className="login_username"
                            />
                            <div style={{ float: "left", width: "87%" }}>
                              <input id="logonCardNum" name="logonCardNum" className="input-uname" maxlength="22" style={{ width: "100%" }} />
                            </div>
                          </div>
                        </div>
                        <div
                          className="form-area-line"
                          style={{ marginBottom: "0px" }}
                        >
                          <div className="wrapper-obj">
                            <div
                              style={{ float: "left" }}
                              className="login_password"
                            />
                            <div
                              style={{
                                float: "left",
                                paddingTop: "4px",
                                width: "230px",
                                position: "relative"
                              }}
                            >
                              <div
                                id="safeEdit1div"
                                style={{
                                  display: "inline",
                                  marginRight: "6px"
                                }}
                              />
                              <input
                                id="passwordinput"
                                type="text"
                                style={{
                                  position: "absolute",
                                  top: "2px",
                                  border: "none",
                                  width: "99%"
                                }}
                              />

                              <a
                                id="plagin_download_tip"
                                style={{ color: "blue" }}
                                href="/ICBCChromeExtension.msi"
                              />
                            </div>
                          </div>
                        </div>
                        <div
                          className="form-area-line"
                          style={{
                            lineHeight: "32px",
                            overflow: "hidden",
                            marginBottom: "0px",
                            textAlign: "right",
                            fontSize: "14px",
                            width: "270px"
                          }}
                        >
                          <a
                            href="/resetpwd/reset_pwd_index.jsp?StructCode=1&amp;encryptedData=w9A3onPU54b7Lq9Du2GSCLs8Fpe9sVkrmFZHbpyAf74JsR6gEJL8ONaW1btfSEuQ7VZKRFqR6osR&#10;Rr2cbm2XcEMBgjny0OOiSRhxSFBbuxRRV4vtmX9Yx3P%2BsNG/NBkVRpO50SyI2CJm5WA1XLL3lMzS&#10;nlcpqSHdRjGz8UaOW69r/70YBfOn0CPyVMaYcOVAd7cJbWx%2B8g3OZYYLzkofLo38v%2BXI3qG3r4O%2B&#10;c9yj1bKDJiYeNRGV4ZdGCnHhsu0hgM/rhHRe25tWjjXXXKLThYhH%2BEtyjlovZTaRIN0Q9S1u1Poq&#10;EX3b2D2WC%2BsWOUBoVOHtTIT66nR6zjghWDRUBRaOWgCymHBey9LxoZBQHt4fPxPpejeFNJpHaU7V&#10;DkggWQD7PZqclCfbVho7WFutMqxxDNt5wgEpw8Cz7ssPCDk=%2B"
                            target="_top"
                            className="link-pwd"
                            hidefocus="true"
                            tabindex="100"
                          >
                            忘记密码
                          </a>
                        </div>
                        <div
                          className="form-area-line"
                          style={{ marginBottom: "0px" }}
                        >
                          <div className="wrapper-obj-left">
                            <div
                              style={{ float: "left" }}
                              className="login_verify"
                            />
                            <div style={{ float: "left", paddingTop: "2px" }}>
                              <div
                                style={{
                                  position: "relative",
                                  display: "inline-block",
                                  _display: "inline",
                                  _zoom: "1",
                                  width: "135px"
                                }}
                              >
                                <label
                                  className="place-holder"
                                  id="verifyCodeCnHolder"
                                  for="verifyCodeCn"
                                />
                                <input
                                  type="text"
                                  id="verifyCodeCn"
                                  name="verifyCodeCn"
                                  // value=""
                                  maxlength="4"
                                  autocomplete="off"
                                  style={{
                                    width: "135px",
                                    imeMode: "inactive",
                                    border: "none",
                                    height: "27px"
                                  }}
                                  nextelemid="login"
                                  onKeyup="if(navigator.userAgent.toLowerCase().indexOf('chrome')!=-1 && navigator.userAgent.toLowerCase().indexOf('edge')==-1){getfocus1('loginLink', event);}else if(navigator.userAgent.toLowerCase().indexOf('safari')!=-1 && navigator.userAgent.toLowerCase().indexOf('edge')==-1){}else if(navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){getfocus1('loginLink', event);}else if(navigator.userAgent.toLowerCase().indexOf('edge')!=-1){getfocus1('loginLink', event);}else{if(pebankBrowserCompatible.getKeycode(event)==13) { loginSubmit();}}"
                                  onKeydown="if(navigator.userAgent.toLowerCase().indexOf('safari')!=-1 && navigator.userAgent.toLowerCase().indexOf('edge')==-1){getfocus1('loginLink', event);}"
                                  onFocus="clearErrTip()"
                                  autocorrect="off"
                                  autocapitalize="off"
                                  spellcheck="false"
                                  placeholder="验证码"
                                />
                                <input
                                  type="hidden"
                                  id="verifyCode"
                                  name="verifyCode"
                                  // value=""
                                />
                              </div>
                            </div>
                          </div>
                          <div
                            className="vcode-img-wrapper"
                            style={{
                              height: "36px",
                              overflow: "hidden",
                              display: "block"
                            }}
                          >
                            &nbsp;
                            <a
                              className="link"
                              id="link4Verifyimage2Name"
                              // href="javascript:vcf(1)"
                              style={{
                                color: "rgb(90, 165, 255)",
                                display: "inline"
                              }}
                            >
                              刷新验证码
                            </a>
                          </div>
                        </div>
                        <div className="form-area-line" style={{marginBottom: "0px",height: "36px",width: "270px"}}/>
                        <div className="form-area-line form-area-line-login">
                          <a id="loginLink" onFocus="this.blur()">
                            <Link to="/"><div
                              id="loginBtn"
                              style={{ background: "red" }}
                              className="login-btn n_btn"
                            >
                              
                                <span
                                  className="login-text"
                                  style={{ color: "white" }}
                                >
                                  登&nbsp;&nbsp;&nbsp;录
                                </span>
                              
                              <img
                                className="login-loader"
                                src="https://epass.icbc.com.cn/images/login/load.gif"
                                width="22px"
                                height="22px"
                                style={{ display: "none" }}
                                alt=""
                              />
                            </div></Link>
                          </a>
                        </div>
                        <div
                          className="form-area-line text-left"
                          style={{ lineHeight: "25px", display: "block" }}
                          id="registlinkdiv"
                        >
                          <div
                            className="form-area-link"
                            id="registlink"
                            style={{ display: "block" }}
                          >
                            <Link to="/reg">
                              <a
                                href="/regist/regist_index.jsp?StructCode=1&amp;encryptedData=w9A3onPU54b7Lq9Du2GSCLs8Fpe9sVkrmFZHbpyAf74JsR6gEJL8ONaW1btfSEuQ7VZKRFqR6osR&#10;Rr2cbm2XcEMBgjny0OOiSRhxSFBbuxRRV4vtmX9Yx3P%2BsNG/NBkVRpO50SyI2CJm5WA1XLL3lMzS&#10;nlcpqSHdRjGz8UaOW69r/70YBfOn0CPyVMaYcOVAd7cJbWx%2B8g3OZYYLzkofLo38v%2BXI3qG3r4O%2B&#10;c9yj1bKDJiYeNRGV4ZdGCnHhsu0hgM/rhHRe25tWjjXXXKLThYhH%2BEtyjlovZTaRIN0Q9S1u1Poq&#10;EX3b2D2WC%2BsWOUBoVOHtTIT66nR6zjghWDRUBRaOWgCymHBey9LxoZBQHt4fPxPpejeFNJpHaU7V&#10;DkggWQD7PZqclCfbVho7WFutMqxxDNt5wgEpw8Cz7ssPCDk=%2B"
                                target="_blank"
                                style={{ textDecoration: "none" }}
                              >
                                立即注册
                              </a>
                            </Link>
                          </div>
                          <div
                            id="epaylink"
                            className="form-area-link"
                            title=""
                            style={{ display: "none" }}
                          >
                            <div
                              className=" form-area-link-line"
                              style={{
                                paddingLeft: "16px",
                                paddingRight: "16px",
                                paddingTop: "3px"
                              }}
                            >
                              96114676:已为您升级电子银行服务，请点击
                              <a
                                href="/resetpwd/reset_pwd_index.jsp?StructCode=1&amp;encryptedData=w9A3onPU54b7Lq9Du2GSCLs8Fpe9sVkrmFZHbpyAf74JsR6gEJL8ONaW1btfSEuQ7VZKRFqR6osR&#10;Rr2cbm2XcEMBgjny0OOiSRhxSFBbuxRRV4vtmX9Yx3P%2BsNG/NBkVRpO50SyI2CJm5WA1XLL3lMzS&#10;nlcpqSHdRjGz8UaOW69r/70YBfOn0CPyVMaYcOVAd7cJbWx%2B8g3OZYYLzkofLo38v%2BXI3qG3r4O%2B&#10;c9yj1bKDJiYeNRGV4ZdGCnHhsu0hgM/rhHRe25tWjjXXXKLThYhH%2BEtyjlovZTaRIN0Q9S1u1Poq&#10;EX3b2D2WC%2BsWOUBoVOHtTIT66nR6zjghWDRUBRaOWgCymHBey9LxoZBQHt4fPxPpejeFNJpHaU7V&#10;DkggWQD7PZqclCfbVho7WFutMqxxDNt5wgEpw8Cz7ssPCDk=%2B"
                                target="_top"
                                className="link-pwd"
                                hidefocus="true"
                                tabindex="100"
                              >账户升级</a>以获取更多服务。
                            </div>
                          </div>
                        </div>
                        <div className="form-area-line text-left" style={{ lineHeight: "25px" }} >
                          <div id="errors" className="form-area-link" title="" style={{ display: "none" }} >
                            <div
                              id="errorstext"
                              className=" form-area-link-line"
                              style={{
                                paddingLeft: "16px",
                                paddingRight: "16px",
                                paddingTop: "3px"
                              }}
                              title=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <form id="form2" name="form2" action="/servlet/ICBCBaseReqServletNoSession" method="get" onsubmit="return false;" >
                    <input type="hidden" name="dse_operationName" value="epass_CreateQRCodeOp" />
                    <input type="hidden" id="serviceId" name="serviceId" value="" />
                    <input type="hidden" id="serviceIdInto" name="serviceIdInto" value="" />
                    <input type="hidden" id="transData" name="transData" value="" />
                    <input type="hidden" id="StructCode" name="StructCode" value="1" />
                    <input type="hidden" id="clientIP" name="clientIP" value="" />
                    <input type="hidden" id="orgurl" name="orgurl" value="0" />
                    <input type="hidden" id="APPNO" name="APPNO" value="31" />
                    <input type="hidden" id="betaFlag" name="betaFlag" value="1"/>
                  </form>
                  <canvas width="0" height="0" id="myCanvas2" style={{ position: "absolute", left: "0px", top: "0px" }}/>
                  <div id="safeSubmit1div">
                    <aaa
                      name="safeSubmit1"
                      style={{ marginLeft: "2px" }}
                      type="application/x-icbc-plugin-chrome-npsubmit"
                      id="safeSubmit1"
                      width="0"
                      height="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lbanner;
