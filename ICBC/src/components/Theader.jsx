import React, { Component } from "react";
class Theader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div id="webpartdivID4b13dc16-7e91-4d32-96a8-cbfcd010444a636861120981233150">
        <link
          rel="stylesheet"
          type="text/css"
          href="../src/index.css"
        />
        <link rel="stylesheet" href="../src/style/all.css" />
        {/* 用的到==================================================================== */}
        <link
          rel="stylesheet"
          type="text/css"
          href="http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/exchange.css"
        />
        {/* 用的到==================================================================== */}
        <link
          rel="stylesheet"
          type="text/css"
          href="http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/owlcarousel.css"
        />
        {/* 用的到==================================================================== */}
        <link
          rel="stylesheet"
          type="text/css"
          href="http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/owltheme.css"
        />
        <link rel="stylesheet" href="../src/style/all.css" />
        <script src="http://www.icbc.com.cn/icbc/include/icbccommon.js" type="text/javascript" />
        <script
          language="javascript"
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/Common/jquery/jquery-1.11.0.min.js"
        />
        <script src="http://www.icbc.com.cn/Portal_Resources/Common/AdRes/jquery.easing.1.3.js" />{/* 有东西 */}
        <script src="http://www.icbc.com.cn/Portal_Resources/Common/AdRes/jquery.galleryview-1.1.js" />{/* 有东西 */}
        <script src="http://www.icbc.com.cn/Portal_Resources/Common/AdRes/jquery.timers-1.1.2.js" />{/* 有东西 */}
        <script src="http://www.icbc.com.cn/Portal_Resources/Common/AdRes/luoye.js" />{/* 有东西首页幻灯 */}
        <script src="http://www.icbc.com.cn/Portal_Resources/Common/AdRes/slides.min.jquery.js" />{/* 有东西 */}
        <script src="http://www.icbc.com.cn/Portal_Resources/Common/AdRes/jquery_cycle2_min.js" />{/* 有东西 */}
        <script src="http://www.icbc.com.cn/Portal_Resources/Common/AdRes/newLunboYT_function.js" />{/* 有东西 */}
        <script src="http://www.icbc.com.cn/Portal_Resources/Common/AdRes/ManualSwitchAD.js" />{/* 有东西 */}
        <script src="http://www.icbc.com.cn/Portal_Resources/Common/AdRes/QuanTongAD.js" />{/* 有东西 */}
        <script
          language="javascript"
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/Common/ClientAnalysis.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/ICBC_ADJS/ICBCActiveMaintainList.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/Common/zones.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/Common/ICBCADByZoneUtil.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/js/util/polyfill.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/js/util/utils.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/ICBC/html/main/js_new/index.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/RefreshFunctionStatic/js/refreshExchangeData.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/ICBC/html/main/js_new/main.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/ICBC/html/main/js_new/owl.carousel.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/IcbcHome/js/ajaxHome.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/Common/jquery/jquery-ui-1.9.2.autocomplete.js"
        />{/* 有东西 */}
        <script
          type="text/javascript"
          src="http://www.icbc.com.cn/Portal_Resources/Robot/AskFloat/autocomplete_float.js"
        />{/* 有东西 */}
        {/* <script src="../js/all.js" /> */}

        <div id="headTOP" className="head">
          <div className="w-center">
            <div className="head_l l">
              <ul className="font_14">
                <li className="on">
                  <p>
                    <a href="/ICBC/default.htm">个人客户</a>
                  </p>
                  <span>
                    <span style={{ display: "none" }}>&nbsp;</span>
                  </span>
                </li>
                <li>
                  <a href="/ICBC/%e4%bc%81%e4%b8%9a%e4%b8%9a%e5%8a%a1/default.html">
                    <p>企业客户</p>{" "}
                  </a>
                  <span>
                    <span style={{ display: "none" }}>&nbsp;</span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="head_r r">
              <ul className="font_14">
                <li>
                  <a href="http://www.icbc-ltd.com/icbcltd/">
                    <p>全球主站</p>
                  </a>
                  <span>|</span>
                </li>
                <li>
                  <a href="/ICBC/%E5%88%86%E6%94%AF%E6%9C%BA%E6%9E%84/default.html">
                    <p>分支机构</p>{" "}
                  </a>
                  <span>|</span>
                </li>
                <li>
                  <a href="/ICBC/%e5%ae%a2%e6%88%b7%e6%9c%8d%e5%8a%a1/business_offices.htm">
                    <p>服务网点</p>
                  </a>
                  <span>|</span>
                </li>
                <li>
                  <a href="/ICBC/%E5%AE%A2%E6%88%B7%E8%87%AA%E5%8A%A9%E6%9C%8D%E5%8A%A1%E4%B8%93%E5%8C%BA/default.htm">
                    <p>客户服务</p>
                  </a>
                  <span>|</span>
                </li>
                <li>
                  <a href="https://campus.icbc.com.cn/">
                    <p>人才招聘</p>{" "}
                  </a>
                  <span>|</span>
                </li>
                <li>
                  <a
                    id="icbclinka_fanti"
                    style={{ display: "inline-block" }}
                    href="http://www.icbc.com.cn/ICBC/html/indexft.html"
                  >
                    <p>繁体</p>
                  </a>
                  <fjtignoreurl>
                    <a
                      id="icbclinka_jianti"
                      href="http://www.icbc.com.cn/ICBC/default.html"
                      style={{ display: "none" }}
                    >
                      <p>简体</p>
                    </a>{" "}
                  </fjtignoreurl>
                  /
                  <a href="/ICBC/EN/default.html">
                    <p>EN</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="search">
          <div className="w-center">
            <div className="logo l">
              <a href="http://www.icbc.com.cn/ICBC/default.html"> </a>
            </div>
            <div className="search_main r">
              <input
                id="KeyWord"
                name="KeyWord"
                onkeyup="toSubmit()"
                type="text"
                className="text l"
                value=""
                placeholder="请输入关键字"
                onfocus="this.value='';"
                onblur="if(this.value.length < 1)this.value='';"
              />
              <a className="submit r">
                <img
                  src="http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/search_icon.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Theader;
