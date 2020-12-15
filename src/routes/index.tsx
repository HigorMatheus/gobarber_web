import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';

import Route from './Route';
// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route path="/dashboard" component={Dashboard} isPrivate />
    </Switch>
  );
};

export default Routes;
