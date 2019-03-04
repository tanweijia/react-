import React, { Component } from "react";
class Lnav extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div className="zuiai-block">
      
        <div className="zuiai-div">
          <div
            className="zuiai-icon"
            style={{cursor:'pointer'}}
            onclick="showMyQuickFucDiv();"
          >
            <div className="zuiai-icon-bg" />
            <p>最爱</p>
            <span> </span>
          </div>
          <div className="zuiai-centent">
            <ul className="zuiai-ul">
            <link rel="stylesheet" href="../../src/style/Lnav.css"/>
              {/* <style>
                    .zuiai-ul li {
                      float: left;
                      width: 62px;
                      height: 40px;
                      text-align: center;
                      margin: 0 4px;
                    }
                    .zuiai-ul li a p {
                      padding-top: 4px;
                      font-size: 12px;
                      color: #888889;
                    }
                    .pic-box {
                      height: 40px;
                      background: url(https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/zuiai_add_v.png)
                        center bottom no-repeat;
                    }
                    .pic-box1 {
                      height: 40px;
                      background: url(https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/zuiai_add_r.png)
                        center bottom no-repeat;
                    }
                  </style> */}

              <div id="commonUseTbl" className="zuiai-centent">
                <ul className="zuiai-ul">
                  <li
                    onclick="showLogonDiv2('PBL201786');"
                    onmouseenter="tj('PBL201786')"
                    onmouseleave="th('PBL201786')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL201786"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL201786_r.png"
                      alt="" />
                      <p id="PBL201786r">我的账户</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL200812');"
                    onmouseenter="tj('PBL200812')"
                    onmouseleave="th('PBL200812')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL200812"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL200812_r.png"
                      alt="" />
                      <p id="PBL200812r">注册账户</p>
                      <p style={{paddingTop:'0px'}} id="PBL200812n">
                        转账
                      </p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL200811');"
                    onmouseenter="tj('PBL200811')"
                    onmouseleave="th('PBL200811')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL200811"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL200811_r.png"
                      alt="" />
                      <p id="PBL200811r">转账汇款</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL200779');"
                    onmouseenter="tj('PBL200779')"
                    onmouseleave="th('PBL200779')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL200779"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL200779_r.png"
                      alt="" />
                      <p id="PBL200779r">信用卡</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL201097');"
                    onmouseenter="tj('PBL201097')"
                    onmouseleave="th('PBL201097')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL201097"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL201097_r.png"
                      alt="" />
                      <p id="PBL201097r">贷款</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL300101');"
                    onmouseenter="tj('PBL300101')"
                    onmouseleave="th('PBL300101')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL300101"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL300101_r.png"
                      alt="" />
                      <p id="PBL300101r">e缴费</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL201139');"
                    onmouseenter="tj('PBL201139')"
                    onmouseleave="th('PBL201139')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL201139"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL201139_r.png"
                      alt="" />
                      <p id="PBL201139r">理财</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL200317');"
                    onmouseenter="tj('PBL200317')"
                    onmouseleave="th('PBL200317')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL200317"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL200317_r.png"
                      alt="" />
                      <p id="PBL200317r">基金</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL200603');"
                    onmouseenter="tj('PBL200603')"
                    onmouseleave="th('PBL200603')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL200603"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL200603_r.png"
                      alt="" />
                      <p id="PBL200603r">贵金属</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL200745');"
                    onmouseenter="tj('PBL200745')"
                    onmouseleave="th('PBL200745')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL200745"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL200745_r.png"
                      alt="" />
                      <p id="PBL200745r">工银e支付</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL20164001');"
                    onmouseenter="tj('PBL20164001')"
                    onmouseleave="th('PBL20164001')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL20164001"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL20164001_r.png"
                      alt="" />
                      <p id="PBL20164001r">本地特色</p>
                    </a>
                  </li>
                  <li
                    onclick="showLogonDiv2('PBL100410');"
                    onmouseenter="tj('PBL100410')"
                    onmouseleave="th('PBL100410')"
                  >
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="PBL100410"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/PBL100410_r.png"
                      alt="" />
                      <p id="PBL100410r">账户申请</p>
                    </a>
                  </li>
                  <li onclick="showMyQuickFucDiv(); ">
                    <a className="active" style={{cursor:'pointer'}} >
                      <img
                        id="tj1"
                        style={{marginTop:'7px',marginBottom:'7px'}}
                        onmouseenter="tj1(this.id)"
                        onmouseleave="th1(this.id)"
                        src="https://mybank.icbc.com.cn/icbc/newperbank/perbank3/images/quickFunc/zuiai_add_r.png"
                      alt="" />
                      <p>调整</p>
                    </a>
                  </li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default Lnav