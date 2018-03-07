import React from 'react';
import { connect } from 'react-redux';
import Button from 'antd-mobile/lib/button';
import Carousel from 'antd-mobile/lib/carousel';
import WingBlank from 'antd-mobile/lib/wing-blank';
import Grid from 'antd-mobile/lib/grid';

import action from '../../actions';
// class Main extends React.Component {
//   render() {
//     const {dispatch,number} = this.props;
//     console.log(this.props)
//     return (
//       <div >
//         <Button className="btn" type="primary">Main</Button>
//         <div>{number}</div>
//       </div>
//     );
//   }
// }
const data = Array.from(new Array(10)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const data1 = Array.from(new Array(6)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));
const Main = ({ dispatch, number }) => (
  <div >
    <WingBlank>
      <Carousel
        autoplay={true}
        infinite
        selectedIndex={1}
      >
        <a
          key={1}
          href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: '176px' }}
        >
          <img
            src={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </a>
        <a
          key={2}
          href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: '176px' }}
        >
          <img
            src={`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </a>
      </Carousel>
    </WingBlank>
    <Grid data={data} activeStyle={false} columnNum={5}/>
    <WingBlank>
      <Carousel
        autoplay={true}
        infinite
        selectedIndex={1}
        dots={false}
      >
        <a
          key={1}
          href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: '76px' }}
        >
          <img
            src={`https://zos.alipayobjects.com/rmsportal/AiyWuByWklrrUDlFignR.png`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </a>
        <a
          key={2}
          href="http://www.alipay.com"
          style={{ display: 'inline-block', width: '100%', height: '76px' }}
        >
          <img
            src={`https://zos.alipayobjects.com/rmsportal/TekJlZRVCjLFexlOCuWn.png`}
            alt=""
            style={{ width: '100%', verticalAlign: 'top' }}
            onLoad={() => {
              // fire window resize event to change height
              window.dispatchEvent(new Event('resize'));
              this.setState({ imgHeight: 'auto' });
            }}
          />
        </a>
      </Carousel>
    </WingBlank>
    <Grid data={data1} activeStyle={false} columnNum={3}/>
  </div>
)
export default connect(state => state)(Main);
