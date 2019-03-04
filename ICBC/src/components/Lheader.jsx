import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import '../js/Lheader.js'
class Lheader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="header-box header-bg">
      <link
          rel="stylesheet"
          type="text/css"
          href="../src/index.css"
        />
        <link
          rel="stylesheet"
          href="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/css/base.css"
        />
        <link
          rel="stylesheet"
          href="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/css/frame/css/style.css"
        />
        <link
          href="https://mybank.icbc.com.cn/icbc/newperbank/css/includes/add_address.css"
          rel="stylesheet"
          type="text/css"
        />
        <link rel="stylesheet" href="../style/Lnav.css" />
        <div className="header width" style={{height: '88px'}}>
          <div
            className="logo-box"
            // onclick="javascript:logPV('PBL200202');perbankAtomLocationBW('PBL200202','',dse_sessionId);"
          >
            <img
              className="logo fl"
              src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/css/frame/images/logo.png"
              alt=""
            />
          </div>
          <div className="header-menu">
            <ul className="fl">
              <script
                type="text/javascript"
                src="https://mybank.icbc.com.cn/icbc/newperbank/js/includes/selectArea.js"
              />

              <li className="t_add_address">
                <a
                  // href="javascript:void(0);"
                  id="defaultArea"
                  className="icon-1"
                >
                  <i />
                  <b className="show-btn" />
                </a>
                <div
                  style={{
                    zINDEX: "20",
                    width: "298px",
                    display: "none",
                    left: "-125px",
                    top: "100%"
                  }}
                  id="add_address"
                  className="address_main"
                >
                  <div
                    style={{
                      zINDEX: "21",
                      width: "15px",
                      height: "19px",
                      position: "absolute",
                      top: "-13px",
                      left: "154px",
                      background:
                        "url(https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/address-top-angles.png) 0 bottom repeatX"
                    }}
                  />
                  <div
                    style={{
                      zINDEX: "-1",
                      POSITION: "absolute",
                      WIDTH: "330px",
                      HEIGHT: "300px",
                      TOP: "0px",
                      LEFT: "0px"
                    }}
                    id="dizhiMark"
                  />
                  <ul
                    style={{ WIDTH: "300px" }}
                    id="areaTab"
                    className="tabname cfx"
                  >
                    <li
                      id="addressCity"
                      className="li_cur cur"
                      name=""
                      style={{ FONTSIZE: "14px" }}
                    >
                      广东
                    </li>
                    <li
                      id="addressArea"
                      className="li_cur"
                      name=""
                      style={{ FONTSIZE: "14px" }}
                    >
                      请选择
                      <i />
                    </li>
                  </ul>
                  <div
                    style={{ display: "block" }}
                    id="dizhi1"
                    className="tabcon"
                  >
                    {/* <!-- 如果地址超过6个字 加class "long_text" --> */}
                    <ul
                      style={{ WIDTH: "304px" }}
                      id="firstArea"
                      className="t_address_list cfx"
                    >
                      <li>
                        <a
                          id="北京"
                          name="cityData"
                          className=""
                          style={{
                            fontSize: "14px",
                            color: "rgb(91, 91, 91)",
                            background: "white"
                          }}
                        >
                          北京
                        </a>
                      </li>
                      <li>
                        <a
                          id="上海"
                          name="cityData"
                          className=""
                          style={{
                            fontSize: "14px",
                            color: "rgb(91, 91, 91)",
                            background: "white"
                          }}
                        >
                          上海
                        </a>
                      </li>
                      <li>
                        <a
                          id="天津"
                          name="cityData"
                          className=""
                          style={{
                            fontSize: "14px",
                            color: "rgb(91, 91, 91)",
                            background: "white"
                          }}
                        >
                          天津
                        </a>
                      </li>
                      <li>
                        <a
                          id="重庆"
                          name="cityData"
                          className=""
                          style={{
                            fontSize: "14px",
                            color: "rgb(91, 91, 91)",
                            background: "white"
                          }}
                        >
                          重庆
                        </a>
                      </li>
                      <li>
                        <a
                          id="安徽"
                          name="cityData"
                          className=""
                          style={{
                            fontSize: "14px",
                            color: "rgb(91, 91, 91)",
                            background: "white"
                          }}
                        >
                          安徽
                        </a>
                      </li>
                      <li>
                        <a
                          id="福建"
                          name="cityData"
                          className=""
                          style={{
                            fontSize: "14px",
                            color: "rgb(91, 91, 91)",
                            background: "white"
                          }}
                        >
                          福建
                        </a>
                      </li>
                      <li>
                        <a
                          id="甘肃"
                          name="cityData"
                          className=""
                          style={{
                            fontSize: "14px",
                            color: "rgb(91, 91, 91)",
                            background: "white"
                          }}
                        >
                          甘肃
                        </a>
                      </li>
                      <li>
                        <a
                          id="广东"
                          name="cityData"
                          className=""
                          style={{
                            fontSize: "14px",
                            color: "white",
                            background: "rgb(244, 115, 74)"
                          }}
                        >
                          广东
                        </a>
                      </li>
                      <li>
                        <a
                          id="广西"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          广西
                        </a>
                      </li>
                      <li>
                        <a
                          id="贵州"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          贵州
                        </a>
                      </li>
                      <li>
                        <a
                          id="海南"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          海南
                        </a>
                      </li>
                      <li>
                        <a
                          id="河北"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          河北
                        </a>
                      </li>
                      <li>
                        <a
                          id="河南"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          河南
                        </a>
                      </li>
                      <li>
                        <a
                          id="黑龙江"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          黑龙江
                        </a>
                      </li>
                      <li>
                        <a
                          id="湖北"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          湖北
                        </a>
                      </li>
                      <li>
                        <a
                          id="湖南"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          湖南
                        </a>
                      </li>
                      <li>
                        <a
                          id="吉林"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          吉林
                        </a>
                      </li>
                      <li>
                        <a
                          id="江苏"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          江苏
                        </a>
                      </li>
                      <li>
                        <a
                          id="江西"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          江西
                        </a>
                      </li>
                      <li>
                        <a
                          id="辽宁"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          辽宁
                        </a>
                      </li>
                      <li>
                        <a
                          id="内蒙"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          内蒙
                        </a>
                      </li>
                      <li>
                        <a
                          id="宁夏"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          宁夏
                        </a>
                      </li>
                      <li>
                        <a
                          id="青海"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          青海
                        </a>
                      </li>
                      <li>
                        <a
                          id="山东"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          山东
                        </a>
                      </li>
                      <li>
                        <a
                          id="山西"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          山西
                        </a>
                      </li>
                      <li>
                        <a
                          id="陕西"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          陕西
                        </a>
                      </li>
                      <li>
                        <a
                          id="四川"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          四川
                        </a>
                      </li>
                      <li>
                        <a
                          id="西藏"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          西藏
                        </a>
                      </li>
                      <li>
                        <a
                          id="新疆"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          新疆
                        </a>
                      </li>
                      <li>
                        <a
                          id="云南"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          云南
                        </a>
                      </li>
                      <li>
                        <a
                          id="浙江"
                          name="cityData"
                          className=""
                          style={{ FONTSIZE: "14px" }}
                        >
                          浙江
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div style={{ display: "none" }} className="tabcon">
                    <ul
                      style={{ WIDTH: "304px" }}
                      id="areaUl"
                      className="t_address_list cfx"
                    >
                      <li>
                        <a id="2004" className="" style={{ FONTSIZE: "14px" }}>
                          潮州
                        </a>
                      </li>
                      <li>
                        <a id="2010" className="" style={{ FONTSIZE: "14px" }}>
                          东莞
                        </a>
                      </li>
                      <li>
                        <a id="2013" className="" style={{ FONTSIZE: "14px" }}>
                          佛山
                        </a>
                      </li>
                      <li>
                        <a id="3602" className="" style={{ FONTSIZE: "14px" }}>
                          广州
                        </a>
                      </li>
                      <li>
                        <a id="2006" className="" style={{ FONTSIZE: "14px" }}>
                          河源
                        </a>
                      </li>
                      <li>
                        <a id="2008" className="" style={{ FONTSIZE: "14px" }}>
                          惠州
                        </a>
                      </li>
                      <li>
                        <a id="2012" className="" style={{ FONTSIZE: "14px" }}>
                          江门
                        </a>
                      </li>
                      <li>
                        <a id="2019" className="" style={{ FONTSIZE: "14px" }}>
                          揭阳
                        </a>
                      </li>
                      <li>
                        <a id="2016" className="" style={{ FONTSIZE: "14px" }}>
                          茂名
                        </a>
                      </li>
                      <li>
                        <a id="2007" className="" style={{ FONTSIZE: "14px" }}>
                          梅州
                        </a>
                      </li>
                      <li>
                        <a id="2018" className="" style={{ FONTSIZE: "14px" }}>
                          清远
                        </a>
                      </li>
                      <li>
                        <a id="2003" className="" style={{ FONTSIZE: "14px" }}>
                          汕头
                        </a>
                      </li>
                      <li>
                        <a id="2009" className="" style={{ FONTSIZE: "14px" }}>
                          汕尾
                        </a>
                      </li>
                      <li>
                        <a id="2005" className="" style={{ FONTSIZE: "14px" }}>
                          韶关
                        </a>
                      </li>
                      <li>
                        <a id="4000" className="" style={{ FONTSIZE: "14px" }}>
                          深圳
                        </a>
                      </li>
                      <li>
                        <a id="2014" className="" style={{ FONTSIZE: "14px" }}>
                          阳江
                        </a>
                      </li>
                      <li>
                        <a id="2020" className="" style={{ FONTSIZE: "14px" }}>
                          云浮
                        </a>
                      </li>
                      <li>
                        <a id="2015" className="" style={{ FONTSIZE: "14px" }}>
                          湛江
                        </a>
                      </li>
                      <li>
                        <a id="2017" className="" style={{ FONTSIZE: "14px" }}>
                          肇庆
                        </a>
                      </li>
                      <li>
                        <a id="2011" className="" style={{ FONTSIZE: "14px" }}>
                          中山
                        </a>
                      </li>
                      <li>
                        <a id="2002" className="" style={{ FONTSIZE: "14px" }}>
                          珠海
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li>
                <a
                  href="/icbc/Emall/main/forward.jsp?dse_sessionId="
                  className="icon-2"
                >
                  融e购
                </a>
              </li>

              <li className="user-unLogin-li">
                <a
                  // href="javascript:perbankAtomLocationTW(serviceId,transData,'',true);"
                  className="icon-4"
                >
                  登录
                </a>
              </li>
              <li className="cut-li">
                <a className="cut-a">
                  <span className="bor-r">&nbsp;</span>
                </a>
              </li>

              <li>
                <Link to="/reg"><a
                  href="https://epass.icbc.com.cn/regist/regist_index.jsp?StructCode=1&amp;encryptedData=w9A3onPU54b7Lq9Du2GSCLs8Fpe9sVkrmFZHbpyAf74JsR6gEJL8ONaW1btfSEuQ7VZKRFqR6osR&#10;Rr2cbm2XcEMBgjny0OOiSRhxSFBbuxRRV4vtmX9Yx3P%2BsNG/NBkVSEXJ%2BslX3K/IeIvu%2BCTtwczS&#10;nlcpqSHdRjGz8UaOW69r/70YBfOn0CPyVMaYcOVAd7cJbWx%2B8g3OZYYLzkofLo38v%2BXI3qG3r4O%2B&#10;c9yj1bKDJiYeNRGV4ZdGCnHhsu0hgM/rhHRe25tWjjXXXKLThYhH%2BEtyjlovZTaRIN0Q9S1u1Poq&#10;EX3b2D2WC%2BsWOUBoVOHtTIT66nR6zjghWDRUBRaOWgCymHBey9LxoZBQHt4fPxPpejeFNJpHaU7V&#10;DkggWQD7PZqclCfbVho7WFutMqxxDNt5wgEpw8Cz7ssPCDk=%2B"
                  className="register-a"
                >
                  注册
                </a></Link>
              </li>
            </ul>

            <div className="search-box fl">
              <label
                className="search-holder"
                id="search-holder"
                for="search-key"
              >
                找功能，找产品，点我！
              </label>
              <input
                id="search-key"
                type="text"
                value=""
                // onkeydown="javascript:if(event.keyCode==13){searchGo();}else{justShowSearch();};"
                // onkeyup="javascript:justShowSearch();"
                maxlength="16"
                autocomplete="off"
                autocorrect="off"
                autocapitalize="off"
                spellcheck="false"
              />
              <b className="search-btn" />
              <div className="down-search">
                <div className="search-left" />
                <div className="search-center">
                  <p>
                    <a>
                      {/* <a href="javascript:justShowSearchGo('2')"> */}
                      在产品中搜索"
                      <span className="searchkey3" />"
                    </a>
                  </p>
                  <p style={{ marginTop: "-8px" }}>
                    <a>
                      {/* <a href="javascript:justShowSearchGo('10')"> */}
                      在缴费中搜索"
                      <span className="searchkey3" />"
                    </a>
                  </p>
                </div>
                <div className="search-right" />
              </div>
            </div>
          </div>
        </div>
        {/* <!--header end--> */}
        <div className="menu-box width">
          <div className="choose-box" id="choose-box">
            {/* <!-- <a href="javascript:showMyQuickFucDiv();" className="zuiai " id="zuiai" name="zuiai">最爱<span></span></a>  --> */}
            <a
              // href="javascript:perbankAtomLocationTW('PBL200204','',dse_sessionId);"
              className="quanbu"
              id="quanbu"
              // onmouseover="javascript:getAtomService();"
            >
              全部
            </a>
            <div className="choose-pop" style={{ display: "none" }}>
              <div
                className="choose-1"
                id="choose-1"
                style={{ display: "none" }}
              >
                <div className="choose-zuiai" id="choose-zuiai" />
              </div>
              <div
                className="choose-2"
                id="choose-2"
                style={{ display: "none" }}
              >
                <div className="choose-quanbu" id="choose-quanbu">
                  <ol>
                    <li>
                      <h5>
                        <a
                          // href="javascript:perbankAtomLocationTW('PBL200204','false|PBL200700',dse_sessionId);"
                          className=""
                        >
                          银行卡.账户<span>&gt;</span>
                        </a>
                      </h5>
                      <div
                        className="down-right-nemu"
                        style={{ display: "none" }}
                      >
                        <div
                          id="div_PBL200700"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL200700_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>账户服务</h6>
                            <ul>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL100410');perbankAtomLocationTW('PBL100410','',dse_sessionId);"> */}
                                  账户申请
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200711');perbankAtomLocationTW('PBL200711','',dse_sessionId);"> */}
                                  明细查询
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200712');perbankAtomLocationTW('PBL200712','',dse_sessionId);"> */}
                                  余额查询
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200713');perbankAtomLocationTW('PBL200713','',dse_sessionId);"> */}
                                  电子对账单
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200714');perbankAtomLocationTW('PBL200714','',dse_sessionId);"> */}
                                  电子回单
                                </a>
                              </li>
                            </ul>
                            <ul>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200715');perbankAtomLocationTW('PBL200715','',dse_sessionId);"> */}
                                  电子工资单
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200716');perbankAtomLocationTW('PBL200716','',dse_sessionId);"> */}
                                  支付明细查询
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200743');perbankAtomLocationTW('PBL200743','',dse_sessionId);"> */}
                                  网银互联
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200742');perbankAtomLocationTW('PBL200742','',dse_sessionId);"> */}
                                  联名账户
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200744');perbankAtomLocationTW('PBL200744','',dse_sessionId);"> */}
                                  工行全球账户
                                </a>
                              </li>
                            </ul>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200771');perbankAtomLocationTW('PBL200771','',dse_sessionId);"> */}
                                  开户网点查询
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200772');perbankAtomLocationTW('PBL200772','',dse_sessionId);"> */}
                                  小额账户销户
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200773');perbankAtomLocationTW('PBL200773','',dse_sessionId);"> */}
                                  挂失
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200778');perbankAtomLocationTW('PBL200778','',dse_sessionId);"> */}
                                  个人账户销户预处理
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200733');perbankAtomLocationTW('PBL200733','',dse_sessionId);"> */}
                                  工资明细
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>借记卡服务</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200721');perbankAtomLocationTW('PBL200721','',dse_sessionId);"> */}
                                  借记卡申请
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200751');perbankAtomLocationTW('PBL200751','',dse_sessionId);"> */}
                                  卡片限额设置
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200752');perbankAtomLocationTW('PBL200752','',dse_sessionId);"> */}
                                  银行卡换卡不换号
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a
                          // href="javascript:perbankAtomLocationTW('PBL200204','false|PBL200800',dse_sessionId);"
                          className=""
                        >
                          汇款<span>&gt;</span>
                        </a>
                      </h5>
                      <div
                        className="down-right-nemu"
                        style={{ display: "none" }}
                      >
                        <div
                          id="div_PBL200800"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL200800_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>转账汇款</h6>
                            <ul>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200811');perbankAtomLocationTW('PBL200811','',dse_sessionId);"> */}
                                  境内汇款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200862');perbankAtomLocationTW('PBL200862','',dse_sessionId);"> */}
                                  批量汇款
                                </a>
                              </li>
                              <li>
                                <a
                                  // href="javascript:logPV('PBL200821');perbankAtomLocationTW('PBL200821','',dse_sessionId);"
                                  className=""
                                >
                                  向境外银行汇款
                                </a>
                              </li>
                              <li>
                                <a
                                  // href="javascript:logPV('PBL200822');perbankAtomLocationTW('PBL200822','',dse_sessionId);"
                                  className=""
                                >
                                  向Visa/MasterCard汇款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200812');perbankAtomLocationTW('PBL200812','',dse_sessionId);"> */}
                                  注册账户转账
                                </a>
                              </li>
                            </ul>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200881');perbankAtomLocationTW('PBL200881','',dse_sessionId);"> */}
                                  预约汇款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200882');perbankAtomLocationTW('PBL200882','',dse_sessionId);"> */}
                                  资金自动归集
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200912');perbankAtomLocationTW('PBL200912','',dse_sessionId);"> */}
                                  AA收款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200911');perbankAtomLocationTW('PBL200911','',dse_sessionId);"> */}
                                  电子收付款账单
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>收款绑定</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200831');perbankAtomLocationTW('PBL200831','',dse_sessionId);"> */}
                                  手机号收款绑定
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200832');perbankAtomLocationTW('PBL200832','',dse_sessionId);"> */}
                                  E-mail收款绑定
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>投标保证金</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200921');perbankAtomLocationTW('PBL200921','',dse_sessionId);"> */}
                                  投标保证金
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>结算套餐</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200901');perbankAtomLocationTW('PBL200901','',dse_sessionId);"> */}
                                  商友会员专属结算套餐
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200902');perbankAtomLocationTW('PBL200902','',dse_sessionId);"> */}
                                  普通结算套餐
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>工银e支付</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200745');perbankAtomLocationTW('PBL200745','',dse_sessionId);"> */}
                                  工银e支付
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a>
                          {/* <a href="javascript:perbankAtomLocationTW('PBL200204','false|PBL200760',dse_sessionId);"> */}
                          信用卡<span>&gt;</span>
                        </a>
                      </h5>
                      <div className="down-right-nemu">
                        <div
                          id="div_PBL200760"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL200760_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>信用卡账户</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200779');perbankAtomLocationTW('PBL200779','',dse_sessionId);"> */}
                                  我的信用卡
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200761');perbankAtomLocationTW('PBL200761','',dse_sessionId);"> */}
                                  还款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200762');perbankAtomLocationTW('PBL200762','',dse_sessionId);"> */}
                                  分期付款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200763');perbankAtomLocationTW('PBL200763','',dse_sessionId);"> */}
                                  定制分期
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200764');perbankAtomLocationTW('PBL200764','',dse_sessionId);"> */}
                                  现金分期
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>卡片管理</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200722');perbankAtomLocationTW('PBL200722','',dse_sessionId);"> */}
                                  申请及进度
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200725');perbankAtomLocationTW('PBL200725','',dse_sessionId);"> */}
                                  申请副卡
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200769');perbankAtomLocationTW('PBL200769','',dse_sessionId);"> */}
                                  启用
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200724');perbankAtomLocationTW('PBL200724','',dse_sessionId);"> */}
                                  数字信用卡申请
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>卡片操作</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200775');perbankAtomLocationTW('PBL200775','',dse_sessionId);"> */}
                                  额度调整
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20076002');perbankAtomLocationTW('PBL20076002','',dse_sessionId);"> */}
                                  融e借
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>服务</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200767');perbankAtomLocationTW('PBL200767','',dse_sessionId);"> */}
                                  芯片卡服务
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200768');perbankAtomLocationTW('PBL200768','',dse_sessionId);"> */}
                                  牡丹基金卡服务
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL200766');perbankAtomLocationTW('PBL200766','',dse_sessionId);"> */}
                                  信用报告
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a>
                          {/* <a href="javascript:perbankAtomLocationTW('PBL200204','false|PBL201000',dse_sessionId);"> */}
                          存款.贷款<span>&gt;</span>
                        </a>
                      </h5>
                      <div className="down-right-nemu">
                        <div
                          id="div_PBL201000"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL201000_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>存款</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201011');perbankAtomLocationTW('PBL201011','',dse_sessionId);"> */}
                                  通知存款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201021');perbankAtomLocationTW('PBL201021','',dse_sessionId);"> */}
                                  定期存款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201025');perbankAtomLocationTW('PBL201025','',dse_sessionId);"> */}
                                  大额存单
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201031');perbankAtomLocationTW('PBL201031','',dse_sessionId);"> */}
                                  节节高
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201032');perbankAtomLocationTW('PBL201032','',dse_sessionId);"> */}
                                  定活通
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201033');perbankAtomLocationTW('PBL201033','',dse_sessionId);"> */}
                                  薪金溢
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201034');perbankAtomLocationTW('PBL201034','',dse_sessionId);"> */}
                                  存款增值服务协议
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>贷款</h6>
                            <ul>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201099');perbankAtomLocationTW('PBL201099','',dse_sessionId);"> */}
                                  我的贷款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201041');perbankAtomLocationTW('PBL201041','',dse_sessionId);"> */}
                                  融e借
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201051');perbankAtomLocationTW('PBL201051','',dse_sessionId);"> */}
                                  质押贷款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20109002');perbankAtomLocationTW('PBL20109002','',dse_sessionId);"> */}
                                  网贷通
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20109001');perbankAtomLocationTW('PBL20109001','',dse_sessionId);"> */}
                                  个人住房贷款
                                </a>
                              </li>
                            </ul>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201061');perbankAtomLocationTW('PBL201061','',dse_sessionId);"> */}
                                  网络抵押贷款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201092');perbankAtomLocationTW('PBL201092','',dse_sessionId);"> */}
                                  查询申请结果
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201096');perbankAtomLocationTW('PBL201096','',dse_sessionId);"> */}
                                  还款测算
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201043');perbankAtomLocationTW('PBL201043','',dse_sessionId);"> */}
                                  信用报告
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a>
                          {/* <a href="javascript:perbankAtomLocationTW('PBL200204','false|PBL201100',dse_sessionId);"> */}
                          理财.债券<span>&gt;</span>
                        </a>
                      </h5>
                      <div className="down-right-nemu">
                        <div
                          id="div_PBL201100"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL201100_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>理财</h6>
                            <ul>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20111002');perbankAtomLocationTW('PBL20111002','',dse_sessionId);"> */}
                                  理财产品
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20111003');perbankAtomLocationTW('PBL20111003','',dse_sessionId);"> */}
                                  我的理财
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201111');perbankAtomLocationTW('PBL201111','',dse_sessionId);"> */}
                                  推荐产品
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201113');perbankAtomLocationTW('PBL201113','',dse_sessionId);"> */}
                                  精品主题
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201112');perbankAtomLocationTW('PBL201112','',dse_sessionId);"> */}
                                  现金管理
                                </a>
                              </li>
                            </ul>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201117');perbankAtomLocationTW('PBL201117','',dse_sessionId);"> */}
                                  优选净值
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201114');perbankAtomLocationTW('PBL201114','',dse_sessionId);"> */}
                                  外币类
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20111004');perbankAtomLocationTW('PBL20111004','',dse_sessionId);"> */}
                                  私人银行
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201115');perbankAtomLocationTW('PBL201115','',dse_sessionId);"> */}
                                  新型理财
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>理财服务</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201142');perbankAtomLocationTW('PBL201142','',dse_sessionId);"> */}
                                  我的理财服务
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201143');perbankAtomLocationTW('PBL201143','',dse_sessionId);"> */}
                                  查询执行明细
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>债券</h6>
                            <ul>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201121');perbankAtomLocationTW('PBL201121','',dse_sessionId);"> */}
                                  柜台记账式债券
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20112116');perbankAtomLocationTW('PBL20112116','',dse_sessionId);"> */}
                                  我的柜台记账式债券
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20112115');perbankAtomLocationTW('PBL20112115','',dse_sessionId);"> */}
                                  推荐产品
                                </a>
                              </li>
                            </ul>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201123');perbankAtomLocationTW('PBL201123','',dse_sessionId);"> */}
                                  储蓄国债
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20112308');perbankAtomLocationTW('PBL20112308','',dse_sessionId);"> */}
                                  我的储蓄国债
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a>
                          {/* <a href="javascript:perbankAtomLocationTW('PBL200204','false|PBL201200',dse_sessionId);"> */}
                          基金.证券.期货<span>&gt;</span>
                        </a>
                      </h5>
                      <div className="down-right-nemu">
                        <div
                          id="div_PBL201200"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL201200_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>基金</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201210');perbankAtomLocationTW('PBL201210','',dse_sessionId);"> */}
                                  基金产品
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20031201');perbankAtomLocationTW('PBL20031201','',dse_sessionId);"> */}
                                  我的基金
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201212');perbankAtomLocationTW('PBL201212','',dse_sessionId);"> */}
                                  货币基金
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201213');perbankAtomLocationTW('PBL201213','',dse_sessionId);"> */}
                                  股票基金
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201214');perbankAtomLocationTW('PBL201214','',dse_sessionId);"> */}
                                  债券基金
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201215');perbankAtomLocationTW('PBL201215','',dse_sessionId);"> */}
                                  混合基金
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201216');perbankAtomLocationTW('PBL201216','',dse_sessionId);"> */}
                                  基金定投
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>银证</h6>
                            <ul>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202013');perbankAtomLocationTW('PBL202013','',dse_sessionId);"> */}
                                  自助注册
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202014');perbankAtomLocationTW('PBL202014','',dse_sessionId);"> */}
                                  我的第三方存管
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202015');perbankAtomLocationTW('PBL202015','',dse_sessionId);"> */}
                                  银证转账
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202016');perbankAtomLocationTW('PBL202016','',dse_sessionId);"> */}
                                  融资融券
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202017');perbankAtomLocationTW('PBL202017','',dse_sessionId);"> */}
                                  B股银证转账
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202018');perbankAtomLocationTW('PBL202018','',dse_sessionId);"> */}
                                  B股证券业务
                                </a>
                              </li>
                            </ul>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202019');perbankAtomLocationTW('PBL202019','',dse_sessionId);"> */}
                                  B股证券转账（深圳、上海）
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202001');perbankAtomLocationTW('PBL202001','',dse_sessionId);"> */}
                                  银衍转账
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202002');perbankAtomLocationTW('PBL202002','',dse_sessionId);"> */}
                                  银证期三通
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202003');perbankAtomLocationTW('PBL202003','',dse_sessionId);"> */}
                                  网下新股申购转账
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202004');perbankAtomLocationTW('PBL202004','',dse_sessionId);"> */}
                                  存管通
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202005');perbankAtomLocationTW('PBL202005','',dse_sessionId);"> */}
                                  银证转账预约设置
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>期货</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202021');perbankAtomLocationTW('PBL202021','',dse_sessionId);"> */}
                                  集中式银期注册
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202022');perbankAtomLocationTW('PBL202022','',dse_sessionId);"> */}
                                  集中式银期转账
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202023');perbankAtomLocationTW('PBL202023','',dse_sessionId);"> */}
                                  期货开户预约
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>银商银权</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202031');perbankAtomLocationTW('PBL202031','',dse_sessionId);"> */}
                                  交易市场注册
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202032');perbankAtomLocationTW('PBL202032','',dse_sessionId);"> */}
                                  我的交易市场
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL202033');perbankAtomLocationTW('PBL202033','',dse_sessionId);"> */}
                                  查询出入金状态
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a>
                          {/* <a href="javascript:perbankAtomLocationTW('PBL200204','false|PBL201300',dse_sessionId);"> */}
                          贵金属.外汇.账户商品<span>&gt;</span>
                        </a>
                      </h5>
                      <div className="down-right-nemu">
                        <div
                          id="div_PBL201300"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL201300_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>账户贵金属</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201311');perbankAtomLocationTW('PBL201311','',dse_sessionId);"> */}
                                  账户贵金属
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201312');perbankAtomLocationTW('PBL201312','',dse_sessionId);"> */}
                                  账户贵金属指数
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201351');perbankAtomLocationTW('PBL201351','',dse_sessionId);"> */}
                                  账户贵金属转换
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>实物贵金属</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201333');perbankAtomLocationTW('PBL201333','',dse_sessionId);"> */}
                                  代理贵金属递延
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201332');perbankAtomLocationTW('PBL201332','',dse_sessionId);"> */}
                                  代理贵金属现货
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201337');perbankAtomLocationTW('PBL201337','',dse_sessionId);"> */}
                                  品牌贵金属购买
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201331');perbankAtomLocationTW('PBL201331','',dse_sessionId);"> */}
                                  积存金
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>外汇</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201342');perbankAtomLocationTW('PBL201342','',dse_sessionId);"> */}
                                  结售汇
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201341');perbankAtomLocationTW('PBL201341','',dse_sessionId);"> */}
                                  外汇买卖
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201343');perbankAtomLocationTW('PBL201343','',dse_sessionId);"> */}
                                  账户外汇
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201345');perbankAtomLocationTW('PBL201345','',dse_sessionId);"> */}
                                  账户外汇指数
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>账户商品</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201321');perbankAtomLocationTW('PBL201321','',dse_sessionId);"> */}
                                  账户能源
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201322');perbankAtomLocationTW('PBL201322','',dse_sessionId);"> */}
                                  账户农产品
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201323');perbankAtomLocationTW('PBL201323','',dse_sessionId);"> */}
                                  账户基本金属
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>模拟交易</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201392');perbankAtomLocationTW('PBL201392','',dse_sessionId);"> */}
                                  模拟交易大赛
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201391');perbankAtomLocationTW('PBL201391','',dse_sessionId);"> */}
                                  账户贵金属(模拟)
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201393');perbankAtomLocationTW('PBL201393','',dse_sessionId);"> */}
                                  账户外汇(模拟)
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201394');perbankAtomLocationTW('PBL201394','',dse_sessionId);"> */}
                                  账户能源(模拟)
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a>
                          {/* <a href="javascript:perbankAtomLocationTW('PBL200204','false|PBL202000',dse_sessionId);"> */}
                          保险.养老金.社保.公积金<span>&gt;</span>
                        </a>
                      </h5>
                      <div className="down-right-nemu">
                        <div
                          id="div_PBL202000"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL202000_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>保险</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201230');perbankAtomLocationTW('PBL201230','',dse_sessionId);"> */}
                                  保险产品
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201231');perbankAtomLocationTW('PBL201231','',dse_sessionId);"> */}
                                  我的保险
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201226');perbankAtomLocationTW('PBL201226','',dse_sessionId);"> */}
                                  稳健投资
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201227');perbankAtomLocationTW('PBL201227','',dse_sessionId);"> */}
                                  健康人生
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201228');perbankAtomLocationTW('PBL201228','',dse_sessionId);"> */}
                                  安全出行
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201229');perbankAtomLocationTW('PBL201229','',dse_sessionId);"> */}
                                  养老无忧
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>养老金·社保·公积金</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201626');perbankAtomLocationTW('PBL201626','',dse_sessionId);"> */}
                                  养老金
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201625');perbankAtomLocationTW('PBL201625','',dse_sessionId);"> */}
                                  工银e社保
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201624');perbankAtomLocationTW('PBL201624','',dse_sessionId);"> */}
                                  住房公积金
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a>
                          {/* <a href="javascript:perbankAtomLocationTW('PBL200204','false|PBL201400',dse_sessionId);"> */}
                          信使.预约<span>&gt;</span>
                        </a>
                      </h5>
                      <div className="down-right-nemu">
                        <div
                          id="div_PBL201400"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL201400_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>工银信使</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL2007461');perbankAtomLocationTW('PBL2007461','',dse_sessionId);"> */}
                                  我的工银信使
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201411');perbankAtomLocationTW('PBL201411','',dse_sessionId);"> */}
                                  余额变动提醒
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201412');perbankAtomLocationTW('PBL201412','',dse_sessionId);"> */}
                                  贵金属到价提醒
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201413');perbankAtomLocationTW('PBL201413','',dse_sessionId);"> */}
                                  重要事项提醒
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201415');perbankAtomLocationTW('PBL201415','',dse_sessionId);"> */}
                                  其他信使
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>网点预约</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201601');perbankAtomLocationTW('PBL201601','',dse_sessionId);"> */}
                                  预约取号
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201422');perbankAtomLocationTW('PBL201422','',dse_sessionId);"> */}
                                  人民币大额现金取款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201423');perbankAtomLocationTW('PBL201423','',dse_sessionId);"> */}
                                  外币现金取款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201433');perbankAtomLocationTW('PBL201433','',dse_sessionId);"> */}
                                  申请借记卡
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201602');perbankAtomLocationTW('PBL201602','',dse_sessionId);"> */}
                                  开立资信证明
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201603');perbankAtomLocationTW('PBL201603','',dse_sessionId);"> */}
                                  换卡不换号申请
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201430');perbankAtomLocationTW('PBL201430','',dse_sessionId);"> */}
                                  我的网点预约
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a>
                          {/* <a href="javascript:perbankAtomLocationTW('PBL200204','false|PBL201500',dse_sessionId);"> */}
                          私人银行<span>&gt;</span>
                        </a>
                      </h5>
                      <div className="down-right-nemu">
                        <div
                          id="div_PBL201500"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL201500_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>金融服务</h6>
                            <ul>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201545');perbankAtomLocationTW('PBL201545','',dse_sessionId);"> */}
                                  我的财富
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201503');perbankAtomLocationTW('PBL201503','',dse_sessionId);"> */}
                                  专属理财服务
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201578');perbankAtomLocationTW('PBL201578','',dse_sessionId);"> */}
                                  专属基金
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201232');perbankAtomLocationTW('PBL201232','',dse_sessionId);"> */}
                                  专属保险
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201508');perbankAtomLocationTW('PBL201508','',dse_sessionId);"> */}
                                  专属代理产品
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201579');perbankAtomLocationTW('PBL201579','',dse_sessionId);"> */}
                                  我的预留产品
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201588');perbankAtomLocationTW('PBL201588','',dse_sessionId);"> */}
                                  产品份额转让大厅
                                </a>
                              </li>
                            </ul>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201547');perbankAtomLocationTW('PBL201547','',dse_sessionId);"> */}
                                  资产管理
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201548');perbankAtomLocationTW('PBL201548','',dse_sessionId);"> */}
                                  增值服务
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201550');perbankAtomLocationTW('PBL201550','',dse_sessionId);"> */}
                                  委托确认
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201577');perbankAtomLocationTW('PBL201577','',dse_sessionId);"> */}
                                  投资账户
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201119');perbankAtomLocationTW('PBL201119','',dse_sessionId);"> */}
                                  配置组合
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201571');perbankAtomLocationTW('PBL201571','',dse_sessionId);"> */}
                                  新产品意向征集
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>非金融服务</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201551');perbankAtomLocationTW('PBL201551','',dse_sessionId);"> */}
                                  活动邀请
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201552');perbankAtomLocationTW('PBL201552','',dse_sessionId);"> */}
                                  资讯平台
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201553');perbankAtomLocationTW('PBL201553','',dse_sessionId);"> */}
                                  财富顾问
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>全球财富</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201581');perbankAtomLocationTW('PBL201581','',dse_sessionId);"> */}
                                  境外账户
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201582');perbankAtomLocationTW('PBL201582','',dse_sessionId);"> */}
                                  投资资讯
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <h5>
                        <a>
                          {/* <a href="javascript:perbankAtomLocationTW('PBL200204','false|PBL201600',dse_sessionId);"> */}
                          生活缴费.本地特色<span>&gt;</span>
                        </a>
                      </h5>
                      <div className="down-right-nemu">
                        <div
                          id="div_PBL201600"
                          className="down-right-nemu-list"
                          style={{
                            width: "756px",
                            height: "35px",
                            backgroundColor: "#F7F7F7",
                            display: "none",
                            fontSize: "14px"
                          }}
                        >
                          <div id="div_PBL201600_left">
                            <ul
                              style={{
                                color: "#888889",
                                marginRight: "20px",
                                width: "auto",
                                marginLeft: "20px",
                                float: "left"
                              }}
                            >
                              <img
                                src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/style/style_default/images/zjsy.png"
                                style={{
                                  marginRight: "5px",
                                  verticalAlign: "text-bottom"
                                }}
                                alt=""
                              />
                              最近使用
                            </ul>
                          </div>
                        </div>
                        <div className="down-right-nemu-box">
                          <div className="down-right-nemu-list">
                            <h6>生活服务</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL300101');perbankAtomLocationTW('PBL300101','',dse_sessionId);"> */}
                                  e缴费
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201611');perbankAtomLocationTW('PBL201611','',dse_sessionId);"> */}
                                  委托代扣
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201612');perbankAtomLocationTW('PBL201612','',dse_sessionId);"> */}
                                  代缴学费
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201621');perbankAtomLocationTW('PBL201621','',dse_sessionId);"> */}
                                  银医服务
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201622');perbankAtomLocationTW('PBL201622','',dse_sessionId);"> */}
                                  公益捐款
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201623');perbankAtomLocationTW('PBL201623','',dse_sessionId);"> */}
                                  纳税
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>活动大厅</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20167001');perbankAtomLocationTW('PBL20167001','5',dse_sessionId);"> */}
                                  热门活动
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20167002');perbankAtomLocationTW('PBL20167002','6',dse_sessionId);"> */}
                                  我的奖品
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>专属权益</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201631');perbankAtomLocationTW('PBL201631','',dse_sessionId);"> */}
                                  积分
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201632');perbankAtomLocationTW('PBL201632','',dse_sessionId);"> */}
                                  交易抽奖
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201661');perbankAtomLocationTW('PBL201661','',dse_sessionId);"> */}
                                  增值服务
                                </a>
                              </li>
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL201635');perbankAtomLocationTW('PBL201635','7',dse_sessionId);"> */}
                                  优惠券
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="down-right-nemu-list">
                            <h6>本地特色</h6>
                            <ul className="last">
                              <li>
                                <a>
                                  {/* <a href="javascript:logPV('PBL20164001');perbankAtomLocationTW('PBL20164001','',dse_sessionId);"> */}
                                  本地特色
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <ul className="menu-ul">
            <li>
              <a>
                {/* <a href="javascript:logPV('PBL200202');perbankAtomLocationTW('PBL200202','',dse_sessionId);"> */}
                首页
              </a>
            </li>

            <li id="financial">
              {/* <a href="javascript:void(0);"> */}
              <a>&nbsp;财富广场</a>
              <div className="down-menu" style={{ display: "none" }}>
                <ol>
                  <li className="active">
                    <a>
                      {/* <a href="javascript:logPV('PBL201097');perbankAtomLocationTW('PBL201097','',dse_sessionId);"> */}
                      贷款&nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="">
                    <a>
                      {/* <a href="javascript:logPV('PBL201139');perbankAtomLocationTW('PBL201139','',dse_sessionId);"> */}
                      理财&nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="">
                    <a>
                      {/* <a href="javascript:logPV('PBL200317');perbankAtomLocationTW('PBL200317','',dse_sessionId);"> */}
                      基金&nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="">
                    <a>
                      {/* <a href="javascript:logPV('PBL200603');perbankAtomLocationTW('PBL200603','',dse_sessionId);"> */}
                      贵金属&nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="">
                    <a>
                      {/* <a href="javascript:logPV('PBL201344');perbankAtomLocationTW('PBL201344','',dse_sessionId);"> */}
                      外汇&nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="">
                    <a>
                      {/* <a href="javascript:logPV('PBL201370');perbankAtomLocationTW('PBL201370','',dse_sessionId);"> */}
                      账户商品&nbsp;&nbsp;
                    </a>
                  </li>
                  <li className="">
                    <a>
                      {/* <a href="javascript:logPV('PBL20112307');perbankAtomLocationTW('PBL20112307','',dse_sessionId);"> */}
                      债券&nbsp;&nbsp;
                    </a>
                  </li>
                </ol>
              </div>
            </li>

            <li>
              <a>
                {/* <a href="javascript:logPV('PBL200203');perbankAtomLocationTW('PBL200203','',dse_sessionId);"> */}
                惠生活
              </a>
            </li>

            <li>
              <a>
                {/* <a href="javascript:logPV('PBL201786');perbankAtomLocationTW('PBL201786','',dse_sessionId);"> */}
                账户列表
              </a>
            </li>
            <li>
              <a>
                {/* <a href="javascript:logPV('PBL201720');perbankAtomLocationTW('PBL201720','',dse_sessionId);"> */}
                安全
              </a>
            </li>
            <li>
              <a>
                {/* <a href="javascript:logPV('PBL201724');perbankAtomLocationTW('PBL201724','',dse_sessionId);"> */}
                设置
              </a>
            </li>
          </ul>
          <div className="E-bank ">
            <div
              className="E-bank-myBank"
              onclick="logPV('PBL201700');perbankAtomLocationTW('PBL201700','',dse_sessionId,'',oratype);"
              title="点击查看我的网银！"
            >
              <b className="user-img" />
              <span>我的网银</span>
            </div>
            <div className="E-banl-down-nemu" style={{ display: "none" }}>
              <ul>
                <li onclick="logPV('PBL201700');perbankAtomLocationTW('PBL201700','4',dse_sessionId);">
                  {/* <a href="javascript:void(0);"> */}
                  <a>
                    <span className="jrrl-bg" />
                    金融日历
                  </a>
                </li>
                <li onclick="logPV('PBL201786');perbankAtomLocationTW('PBL201786','',dse_sessionId);">
                  {/* <a href="javascript:void(0);"> */}
                  <a>
                    <span className="kabao-bg" />
                    账户列表
                  </a>
                </li>
                <li onclick="logPV('PBL201670');perbankAtomLocationTW('PBL201670','5',dse_sessionId);">
                  {/* <a href="javascript:void(0);"> */}
                  <a>
                    <span className="hall-bg" />
                    活动大厅
                  </a>
                </li>
                <li onclick="logPV('PBL201720');perbankAtomLocationTW('PBL201720','',dse_sessionId);">
                  {/* <a href="javascript:void(0);"> */}
                  <a>
                    <span className="anquan-bg" />
                    安全
                  </a>
                </li>
                <li onclick="logPV('PBL201724');perbankAtomLocationTW('PBL201724','',dse_sessionId);">
                  {/* <a href="javascript:void(0);"> */}
                  <a>
                    <span className="shezhi-bg" />
                    设置
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Lheader;
