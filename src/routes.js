import React from 'react';
import { BrowserRouter, Router, Route, Switch } from 'react-router-dom';

import history from '~/services/history';

import AuthLayout from '~/_layouts/auth';
import DefaultLayout from '~/_layouts/default';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import New from '~/pages/New';
import Profile from '~/pages/Profile';
import Meetup from '~/pages/Meetup';

function Routes() {
  return (
    <BrowserRouter>
      <Router history={history}>
        <Switch>
          <Route
            path="/"
            render={() => (
              <AuthLayout>
                <SignIn />
              </AuthLayout>
            )}
            exact
          />
          <Route
            path="/signup"
            render={() => (
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            )}
          />
          <Route
            path="/dashboard"
            render={() => (
              <DefaultLayout>
                <Dashboard />
              </DefaultLayout>
            )}
          />
          <Route
            path="/new"
            render={() => (
              <DefaultLayout>
                <New />
              </DefaultLayout>
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <DefaultLayout>
                <Profile />
              </DefaultLayout>
            )}
          />
          <Route
            path="/meetup"
            render={() => (
              <DefaultLayout>
                <Meetup />
              </DefaultLayout>
            )}
          />
        </Switch>
      </Router>
    </BrowserRouter>
  );
}

export default Routes;
