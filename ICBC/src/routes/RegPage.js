import React from 'react';
import { connect } from 'dva';
import Rheader from '../components/Rheader';
import Rmain from '../components/Rmain';
import Rfooter from '../components/Rfooter';

function RegPage() {
  return (
    <div>
       <Rheader />
       <Rmain />
       <Rfooter />
    </div>
  );
}
RegPage.propTypes = {

};
export default connect()(RegPage);