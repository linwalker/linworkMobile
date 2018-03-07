import React from 'react';
import TabBar from 'antd-mobile/lib/tab-bar';
import { connect } from 'react-redux';
import action from '../actions';

class Buttom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history, tabname , dispatch} = this.props;
    return (
      <div style={{ position: 'fixed', height: '50px', width: '100%', bottom: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="main"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={tabname === 'main'}
            badge={1}
            onPress={() => {
              console.log('mobile')
              dispatch(action.tabselect('main'))
              history.push('/mobile');
            }}
            data-seed="logId"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="消息"
            key="message"
            badge={'new'}
            selected={tabname === 'message'}
            onPress={() => {
              console.log('message')
              dispatch(action.tabselect('message'))
              history.push('/message');
            }}
            data-seed="logId1"
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="任务"
            key="task"
            dot
            selected={tabname === 'task'}
            onPress={() => {
              console.log('task')
              dispatch(action.tabselect('task'))
              history.push('/task');
            }}
          >
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="我的"
            key="home"
            selected={tabname === 'home'}
            onPress={() => {
              console.log('home')
              dispatch(action.tabselect('home'))
              history.push('/home')
            }}
          >
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}


export default connect(state => state)(Buttom);