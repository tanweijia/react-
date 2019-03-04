import React, { Component } from "react";
import Tmain1 from './main/Tmain1';
import Tmain2 from './main/Tmain2';
import Tmain3 from './main/Tmain3';
import Tmain4 from './main/Tmain4';
import Tmain5 from './main/Tmain5';
import Tmain6 from './main/Tmain6';
import Tmain7 from './main/Tmain7';
class Tmain extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  render() {
    return (
      <div>
          <Tmain1 />
          <Tmain2 />
          <Tmain3 />
          <Tmain4 />
          <Tmain5 />
          <Tmain6 />
          <Tmain7 />
      </div>
    );
  }
}
export default Tmain;