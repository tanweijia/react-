import React from 'react';
import { connect } from 'dva';
// import '../index.css';
import Lheader from '../components/Lheader';
import Lnav from '../components/Lnav';
import Lbanner from '../components/Lbanner';
import Tmain6 from '../components/main/Tmain6';
import Tmain7 from '../components/main/Tmain7';

function LoginPage() {
  return (
    <div>
       <Lheader />
       <Lnav />
       <Lbanner />
       <Tmain6 />
       <Tmain7 />
    </div>
  );
}
LoginPage.propTypes = {

};
export default connect()(LoginPage);