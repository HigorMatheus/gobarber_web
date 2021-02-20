import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
// import Route from './Route';
// import { Container } from './styles';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';
import Achievements from '../pages/Achievements';
import Subscription from '../pages/Subscription';
import EditInformation from '../pages/EditInformation';
import Projectshome from '../pages/Projectshome';
import Selectproject from '../pages/Selectproject';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />

      <Route path="/profile" component={Profile}  />


      <Route path="/dashboard" component={Dashboard}  />
      <Route path="/achievements" component={Achievements}  />
      <Route path="/subscription" component={Subscription}  />
      <Route path="/editInformation" component={EditInformation}  />
      <Route path="/projectshome" component={Projectshome}  /> 
      <Route path="/selectproject" component={Selectproject}  />     
                

      
      
    </Switch>
  );
};

export default Routes;
