import React from 'react';
import { connect } from 'react-redux';
import NavBar from 'antd-mobile/lib/nav-bar';
import Icon from 'antd-mobile/lib/icon';
import classNames from 'classnames/bind';
import action from '../actions';
import style from './header.less';
import scanurl from 'client/assets/scanning.png';
import messageurl from 'client/assets/comments.png';
import searchurl from 'client/assets/search.png';

const cx = classNames.bind(style);

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history, dispatch } = this.props;
    return (
      <div className={cx('headerBox')}>
        <div style={{
          width: '22px',
          height: '22px',
          marginLeft: '15px',
          background: 'url(' + scanurl + ') center center /  21px 21px no-repeat'
        }}
        />
        <div className={cx('searchBox')}>
          <input type="text" />
          <button style={{background: 'url(' + searchurl + ') center center /  21px 21px no-repeat'}}></button>
        </div>
        <div style={{
          width: '22px',
          height: '22px',
          marginRight: '15px',
          background: 'url(' + messageurl + ') center center /  21px 21px no-repeat'
        }}
        />
      </div>
    );
  }
}


export default connect(state => state)(Header);