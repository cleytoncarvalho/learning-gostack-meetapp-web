import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthLayout from '~/_layouts/auth';
import DefaultLayout from '~/_layouts/default';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';

function Routes() {
  return (
    <BrowserRouter>
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
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
