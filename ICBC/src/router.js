import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import LoginPage from './routes/LoginPage';
import RegPage from './routes/RegPage';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/reg" exact component={RegPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
