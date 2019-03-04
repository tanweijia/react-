import React, { Component } from "react";
class Rfooter extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <table
        width="700"
        border="0"
        cellspacing="0"
        cellpadding="0"
        align="center"
      >
        <tbody>
          <tr align="center">
            <td colspan="2" height="20" />
          </tr>
          <tr align="center">
            <td>
              <font color="bc0021">
                请与我们联系
                <a href="mailto:webmaster@icbc.com.cn">webmaster@icbc.com.cn</a>
                中国工商银行版权所有
              </font>
            </td>
          </tr>
          <tr align="center">
            <td colspan="2" height="20" />
          </tr>
        </tbody>
        <div className="nav-icbc"></div>
      </table>
    );
  }
}
export default Rfooter;
