import React from 'react';
import { connect } from 'react-redux';
import Button  from 'antd-mobile/lib/button';

const Message = ({
  dispatch,

}) => {

  return (
    <div >
      <Button className="btn" type="default">Message</Button>
    </div>
  );
};


export default connect(state => state)(Message);
