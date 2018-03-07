import React from 'react';
import { Route, Switch } from 'react-router';
import Main from './routes/main';
import Message from './routes/message';
import Task from './routes/task';
import Home from './routes/home';


// browserHistory.listen(() => {
//   window.NProgress.start();
//   window.NProgress.done();
// });

export default (
  <Switch>
    <Route exact path="/mobile" component={Main} />
    <Route exact path="/message" component={Message} />
    <Route exact path="/task" component={Task} />
    <Route exact path="/home" component={Home} />
  </Switch>
);
