import React from 'react';
import { connect } from 'dva';
// import '../index.css'
import '../models/ajaxHome.js';
import Theader from '../components/Theader';
import Tnav from '../components/Tnav';
import Tbanner from '../components/Tbanner';
import Tmain from '../components/Tmain';
function IndexPage() {
  return (
    <div>
       <Theader />
       <Tnav />
       <Tbanner />
       <Tmain />
    </div>
  );
}
IndexPage.propTypes = {};
export default connect()(IndexPage);
