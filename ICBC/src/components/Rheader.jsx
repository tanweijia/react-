import React, { Component } from "react";
// import '../js/reg.js';
class Rheader extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div style={{margin: '0 auto'}}>
        {/* <script
          language="JavaScript1.1"
          src="https://epass.icbc.com.cn/js/ControlsId.js"
        /> */}
        {/* <link rel="stylesheet" href="http://2sf.efw.cn/css/style2.css" /> */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://epass.icbc.com.cn/css/css.css"
        />
        <div
          id="tooltip2"
          style={{
            position: "absolute",
            visibility: "hidden",
            clip: "rect(0 360 360 0)",
            width: "360px",
            backgroundColor: "#FFFFFF",
            height: "15px"
          }}
        >
          <layer name="nstip" width="1000px" bgcolor="#FF0000" />
        </div>
        <table
          width="778"
          border="0"
          cellspacing="0"
          cellpadding="0"
          align="center"
          height="100"
        >
          <tbody>
            <tr valign="middle">
              <td colspan="2" height="20" />
            </tr>
            <tr valign="middle">
              <td />
              <td align="right" />
            </tr>
            <tr valign="middle">
              <td width="40%">
                <img
                  src="https://epass.icbc.com.cn/images/icbc.png"
                  width="350"
                  height="48"
                  alt=""
                />
              </td>

              <td width="60%" align="left">
                <font style={{ fontSize: "22px" }} color="#333">
                  &nbsp;&nbsp;|&nbsp;&nbsp;<b>注册</b>
                </font>
              </td>
            </tr>
            <tr valign="middle">
              <td colspan="2">
                <hr color="#c7000b" />
              </td>
            </tr>
            <tr valign="middle">
              <td colspan="2" height="20" />
            </tr>
            <tr align="center">
              <td align="center" height="20" colspan="2" />
            </tr>
          </tbody>
        </table>
        <form
          name="mall"
          method="post"
          action="https://mall.icbc.com.cn/"
          //   onsubmit="javascript:return false"
        />
      </div>
    );
  }
}
export default Rheader;
