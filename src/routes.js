import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import AuthLayout from '~/_layouts/auth';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

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
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
