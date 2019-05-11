import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import MainPage from './containers/MainPage';
import ErrorPage from './containers/ErrorPage';

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.MAIN} component={MainPage} />
      <Route component={ErrorPage} />
    </Switch>
  </App>
);
