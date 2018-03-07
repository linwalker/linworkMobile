import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Buttom from './buttom';
import Header from './header';

class Layout extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  constructor() {
    super();
    
  }

  render() {
    const { children } = this.props;
    const { router } = this.context;
    const history = router.history;

    return (
      <div>
        <Header />
        <div>
          {children}
        </div>
        <Buttom history={history}/>
      </div>  
    );
  }
}

export default Layout;
