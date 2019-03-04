import React, {Component} from 'react';
import 'antd/dist/antd.css';
// import '../style/Tbanner1.css'
import { Carousel} from 'antd';
class Tbanner1 extends Component {
    constructor(props){
        super(props)
        this.props = props
    }
    render(){
        return (
          <Carousel autoplay>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzx1000%e7%bd%91%e7%bb%9c%e9%87%91%e8%9e%8d%e9%83%a8%e8%bf%90%e8%90%a5%e6%94%af%e6%8c%81%e4%b8%ad%e5%bf%83/zyzx1000_190218_190222_pxcymj_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1002%e7%bd%91%e7%bb%9c%e9%87%91%e8%9e%8d%e9%83%a8/zyzh1002_190202_190228_gyxsxcxc_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1002%e7%bd%91%e7%bb%9c%e9%87%91%e8%9e%8d%e9%83%a8/zyzh1002_190201_190228_chfcdj_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1002%e7%bd%91%e7%bb%9c%e9%87%91%e8%9e%8d%e9%83%a8/zyzh1002_190131_190222_schl_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1009%e9%87%91%e8%9e%8d%e5%b8%82%e5%9c%ba%e9%83%a8/zyzh1009_190219_190225_gkz1234_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
          <div><img src="http://v.icbc.com.cn/userfiles/ADResources/AD_ICBC/2019%e5%b9%b4/zyzh1004%e4%b8%aa%e4%ba%ba%e9%87%91%e8%9e%8d%e9%83%a8/zyzh1009_190202_190630_gjsdcyh_1900_380.jpg" style={{width:'100%',height:'380px'}} alt=""/></div>
        </Carousel>
        )
    }
}

export default Tbanner1