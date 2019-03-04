import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import 'antd/dist/antd.css';
import { Carousel} from 'antd';
class Tbanner extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div id="kv-admain" className="KV">
        <Carousel autoplay>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzx1000%e7%bd%91%e7%bb%9c%e9%87%91%e8%9e%8d%e9%83%a8%e8%bf%90%e8%90%a5%e6%94%af%e6%8c%81%e4%b8%ad%e5%bf%83/zyzx1000_190218_190222_pxcymj_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1002%e7%bd%91%e7%bb%9c%e9%87%91%e8%9e%8d%e9%83%a8/zyzh1002_190202_190228_gyxsxcxc_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1002%e7%bd%91%e7%bb%9c%e9%87%91%e8%9e%8d%e9%83%a8/zyzh1002_190201_190228_chfcdj_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1002%e7%bd%91%e7%bb%9c%e9%87%91%e8%9e%8d%e9%83%a8/zyzh1002_190131_190222_schl_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1009%e9%87%91%e8%9e%8d%e5%b8%82%e5%9c%ba%e9%83%a8/zyzh1009_190219_190225_gkz1234_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1004%e4%b8%aa%e4%ba%ba%e9%87%91%e8%9e%8d%e9%83%a8/zyzh1009_190202_190630_gjsdcyh_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
        </Carousel>

        <div className="login">
          <div className="login_center">
            <div className="per_login">
              <input type="button" />
              <a href=""><Link to="/login">
                <p>
                  个人网上银行登录
                  <span>
                    <span style={{ display: "none" }}>&nbsp;</span>
                  </span>
                </p></Link>
              </a>
            </div>
            <div className="per_login_quick">
              <table className="ke-zeroborder">
                <tbody>
                  <tr>
                    <td>
                      <a href="https://epass.icbc.com.cn/regist/regist_index.jsp">
                        注{" "}
                        <em>
                          {" "}
                          <span>&nbsp;</span>{" "}
                        </em>{" "}
                        册
                      </a>
                    </td>
                    <td className="td_2">
                      <a href="/ICBC/%E7%94%B5%E5%AD%90%E9%93%B6%E8%A1%8C/default.htm">
                        业务指南
                      </a>
                    </td>
                    <td
                      style={{ paddingLeft: "4px", letterSpacing: "4px" }}
                      className=""
                    >
                      <a href="/ICBC/%e7%bd%91%e9%93%b6%e7%b3%bb%e7%bb%9f/anzhuang.htm">
                        网银助手
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="">
                      <a href="/ICBC/%e7%94%b5%e5%ad%90%e9%93%b6%e8%a1%8c/%e5%ae%a2%e6%88%b7%e7%ab%af%e4%b8%8b%e8%bd%bd/default.htm">
                        客户端下载
                      </a>
                    </td>
                    <td className="td_2">
                      <a href="/ICBC/%E7%94%B5%E5%AD%90%E9%93%B6%E8%A1%8C/%E5%AE%89%E5%85%A8%E4%B8%93%E5%8C%BA/default.htm">
                        安全专区
                      </a>
                    </td>
                    <td className="">
                      <a href="/ICBC/%E7%94%B5%E5%AD%90%E9%93%B6%E8%A1%8C/%E5%AE%89%E5%85%A8%E4%B8%93%E5%8C%BA/%E5%AE%89%E5%85%A8%E5%A4%A7%E4%BD%9C%E6%88%98/%e5%ae%89%e5%85%a8%e5%a4%a7%e4%bd%9c%e6%88%98.htm">
                        防范假网站
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="ee_login">
              <input type="button" />
              <a href="https://corporbank-simp.icbc.com.cn/icbc/normalbank/index.jsp">
                <p>
                  企业网上银行登录
                  <span>
                    <span style={{ display: "none" }}>&nbsp;</span>
                  </span>
                </p>
              </a>
            </div>
            <div className="ee_login_quick">
              <table className="ke-zeroborder">
                <tbody>
                  <tr>
                    <td className="">
                      <a href="https://corporbank-simp.icbc.com.cn/ebankc/normalbank/norregtip.jsp">
                        注
                        <em>
                          <span>&nbsp;</span>
                        </em>
                        册
                      </a>
                    </td>
                    <td className="td_2">
                      <a href="/ICBC/%E7%94%B5%E5%AD%90%E9%93%B6%E8%A1%8C/%E4%BC%81%E4%B8%9A%E7%94%B5%E5%AD%90%E9%93%B6%E8%A1%8C%E4%BA%A7%E5%93%81/%E5%B7%A5%E8%A1%8C%E8%B4%A2e%E9%80%9A%E4%BA%A7%E5%93%81/%E4%BC%81%E4%B8%9A%E7%BD%91%E4%B8%8A%E9%93%B6%E8%A1%8C/default.htm">
                        业务指南
                      </a>
                    </td>
                    <td
                      style={{ paddingLeft: "4px", letterSpacing: "4px" }}
                      className=""
                    >
                      <a href="/ICBC/%e7%bd%91%e9%93%b6%e7%b3%bb%e7%bb%9f/anzhuang_qiye.htm">
                        网银助手
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className="reg_login"
              style={{ position: "relative", cursor: "pointer" }}
            >
              <input
                type="button"
                style={{
                  background:
                    'url("http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2018/btn1.png") no-repeat',
                  width: "237px",
                  height: "43px",
                  border: "0"
                }}
              />
              <a href="http://mall.icbc.com.cn/">
                <p
                  style={{
                    position: "absolute",
                    top: "0",
                    color: "#ffffff",
                    height: "43px",
                    lineHeight: "43px",
                    left: "64px",
                    fontSize: "16px",
                    cursor: "pointer"
                  }}
                >
                  融 e 购电商平台
                  <span
                    style={{
                      background:
                        'url("http://v.icbc.com.cn/userfiles/Resources/ICBC/shouye/images/2017/login_icon_l.png") no-repeat center center',
                      height: "43px",
                      width: "11px",
                      display: "block",
                      position: "absolute",
                      top: "0px",
                      left: "140px"
                    }}
                  >
                    <span style={{ display: "none" }}>&nbsp;</span>
                  </span>
                </p>
              </a>
            </div>
            <div className="reg_login_quick">
              <table className="ke-zeroborder">
                <tbody>
                  <tr>
                    <td style={{ letterSpacing: "4px" }} className="">
                      <a href="http://mall.icbc.com.cn/">个人商城</a>
                    </td>
                    <td className="td_3" style={{ letterSpacing: "4px" }}>
                      <a href="http://trade.icbc.com.cn/index.html">企业商城</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Tbanner;
