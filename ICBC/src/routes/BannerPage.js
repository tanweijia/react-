import React from 'react';
import { connect } from 'dva';
// import '../index.css';
import Tbanner2 from '../components/Tbanner2';
function BannerPage() {
  return (
    <div>
       <Tbanner2 />
    </div>
  );
}
BannerPage.propTypes = {

};
export default connect()(BannerPage);