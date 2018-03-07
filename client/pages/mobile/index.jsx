import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { View } from 'client/layout';
import configureStore from 'client/store';
import reducers from './reducers';
import saga, { run } from './saga';
import routes from './routes';
import Layout from './layout';
import './index.less';

const Router = __CLIENT__ ? BrowserRouter : StaticRouter;

export default class Page extends View {
  static defaultProps = {
    title: 'Mobile',
    asset: 'mobile',
  }

  static getStore() {
    const store = configureStore(reducers, saga, {
      username: {
        value: 'beidou',
      },
      password: {
        value: 'admin',
      },
      message: {
        error: false,
        text: '',
      },
      loading: false,
      logined: false,
      number: 1,
      tabname: 'main'
    });

    return store;
  }

  static getPartial({ store, ctx }) {
    const props = {};
    if (ctx && ctx.url) {
      props.location = ctx.url;
      props.context = {
        location: {
          pathname: ctx.pathname,
        },
      };
    }
    const html = (
      <Provider store={store}>
        <Router {...props}>
          <Layout>
            {routes}
          </Layout>
        </Router>
      </Provider>
    );
    return { html };
  }
}

if (__CLIENT__) {
  const store = configureStore(reducers, saga, window.__INITIAL_STATE__);
  const app = (
    <Provider store={store}>
      <Router>
        <Layout>
          {routes}
        </Layout>
      </Router>
    </Provider>
  );

  // run saga
  run();

  ReactDOM.hydrate(
    app,
    document.getElementById('container')
  );
}
