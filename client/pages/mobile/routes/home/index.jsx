import React from 'react';
import { connect } from 'react-redux';
import Button  from 'antd-mobile/lib/button';

const Home = ({
  dispatch,

}) => {

  return (
    <div >
      <Button className="btn" type="default">Home</Button>
    </div>
  );
};

export default connect(state => state)(Home);
