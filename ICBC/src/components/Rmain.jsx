import React, { Component } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Rmain extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <form
        name="form1"
        method="post"
        action="/servlet/ICBCINBSEstablishSessionServlet"
        // onsubmit="javascript:return false"
      >
        <input type="hidden" name="tranFlag" value="8" />
        <input type="hidden" name="netType" value="4" />
        <input type="hidden" name="Language" value="ZH_CN" />
        <input type="hidden" name="PlatFlag" value="3" />
        <input type="hidden" name="ComputID" value="18" />
        <input
          type="hidden"
          name="encryptedData"
          value="w9A3onPU54b7Lq9Du2GSCLs8Fpe9sVkrmFZHbpyAf74JsR6gEJL8ONaW1btfSEuQ7VZKRFqR6osRRr2cbm2XcEMBgjny0OOiSRhxSFBbuxRRV4vtmX9Yx3P+sNG/NBkVWhoB3ZNXsTdkAT7sGwi37MzSnlcpqSHdRjGz8UaOW69r/70YBfOn0CPyVMaYcOVAd7cJbWx+8g3OZYYLzkofLo38v+XI3qG3r4O+c9yj1bKDJiYeNRGV4ZdGCnHhsu0hgM/rhHRe25tWjjXXXKLThYhH+EtyjlovZTaRIN0Q9S1u1PoqEX3b2D2WC+sWOUBoVOHtTIT66nR6zjghWDRUBRaOWgCymHBey9LxoZBQHt4fPxPpejeFNJpHaU7VDkggWQD7PZqclCfbVho7WFutMqxxDNt5wgEpw8Cz7ssPCDk=+"
        />
        <input type="hidden" name="currentmac_input" value="" />
        <input type="hidden" name="StructCode" value="1" />
        <input type="hidden" name="customerGroup" value="1010" />
        <input type="hidden" name="channelCode" value="302" />
        <input
          type="hidden"
          name="encryptedDataApp"
          value="w9A3onPU54b7Lq9Du2GSCLs8Fpe9sVkrmFZHbpyAf74JsR6gEJL8ONaW1btfSEuQ7VZKRFqR6osRRr2cbm2XcEMBgjny0OOiSRhxSFBbuxRRV4vtmX9Yx3P+sNG/NBkVWhoB3ZNXsTdkAT7sGwi37MzSnlcpqSHdRjGz8UaOW69r/70YBfOn0CPyVMaYcOVAd7cJbWx+8g3OZYYLzkofLo38v+XI3qG3r4O+c9yj1bKDJiYeNRGV4ZdGCnHhsu0hgM/rhHRe25tWjjXXXKLThYhH+EtyjlovZTaRIN0Q9S1u1PoqEX3b2D2WC+sWOUBoVOHtTIT66nR6zjghWDRUBRaOWgCymHBey9LxoZBQHt4fPxPpejeFNJpHaU7VDkggWQD7PZqclCfbVho7WFutMqxxDNt5wgEpw8Cz7ssPCDk=+"
        />
        <input type="hidden" id="CNcustName" name="CNcustName" value="" />
        <table
          width="740"
          border="0"
          cellspacing="0"
          cellpadding="0"
          align="center"
          id="logontb"
        >
          <tbody>
            <tr>
              <td width="25" height="24" valign="top" />
              <td width="706" rowspan="3">
                <table width="706" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                      <td valign="bottom" />
                      <td>
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
                        <table
                          width="100%"
                          border="0"
                          cellspacing="0"
                          cellpadding="0"
                          align="center"
                        >
                          <tbody>
                            <tr align="center">
                              <td height="25" colspan="2">
                                &nbsp;
                              </td>
                            </tr>
                            <tr>
                              <td height="45" width="40%" align="right">
                                用户名：
                              </td>
                              <td width="50%">
                                <input
                                  type="text"
                                  id="custNameTmp"
                                  size="22"
                                  maxlength="30"
                                  value=""
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="off"
                                  spellcheck="false"
                                />
                              </td>
                              <td height="45" width="10%">
                                &nbsp;
                              </td>
                            </tr>
                            <tr>
                              <td height="45" align="right">
                                密码：
                              </td>
                              <td>
                                <input
                                  type="text"
                                  id="credNum"
                                  name="credNum"
                                  size="22"
                                  maxlength="18"
                                  value=""
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="off"
                                  spellcheck="false"
                                />
                              </td>
                              <td height="45">&nbsp;</td>
                            </tr>
                            <tr>
                              <td height="45" align="right">
                                手机号码：
                              </td>
                              <td>
                                <input
                                  type="text"
                                  id="phoneNum"
                                  name="phoneNum"
                                  size="22"
                                  maxlength="11"
                                  value=""
                                  autocomplete="off"
                                  autocorrect="off"
                                  autocapitalize="off"
                                  spellcheck="false"
                                />
                              </td>
                              <td height="45">&nbsp;</td>
                            </tr>
                          </tbody>
                        </table>
                        <table>
                          <tbody>
                            <tr>
                              <td>
                                <font>
                                  温馨提示：如果您还不是我行客户，请输入一张他行卡的柜面预留手机号作为您的注册手机号。
                                </font>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table width="98%" border="0" cellspacing="10" cellpadding="1">
                  <tbody>
                    <tr>
                      <td height="40" align="right">
                        <Link to="/login"><div
                          className="n_btn"
                        >
                          <nobr style={{color: "white"}}>注册</nobr>
                        </div></Link>
                      </td>
                      <td height="40" align="left">
                        <div
                          className="n1_btn"
                          // onclick="javascript:reset();"
                        >
                          <Link to="/login"><nobr>已有账号</nobr></Link>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}
export default Rmain;
