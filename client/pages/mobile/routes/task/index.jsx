import React from 'react';
import { connect } from 'react-redux';
import Button  from 'antd-mobile/lib/button';

const Task = ({
  dispatch,

}) => {

  return (
    <div >
      <Button className="btn" type="default">Task</Button>
    </div>
  );
};

export default connect(state => state)(Task);
