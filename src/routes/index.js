import React from 'react';
import { Router, Switch } from 'react-router-dom';

import Route from './Route';

import history from '~/services/history';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import New from '~/pages/New';
import Profile from '~/pages/Profile';
import Meetup from '~/pages/Meetup';
import Edit from '~/pages/Edit';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />
        <Route path="/new" component={New} isPrivate />
        <Route path="/profile" component={Profile} isPrivate />
        <Route path="/meetup/:id" component={Meetup} isPrivate />
        <Route path="/edit/:id" component={Edit} isPrivate />
      </Switch>
    </Router>
  );
}

export default Routes;
