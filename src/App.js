import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes';

import './config/reactotron';
import store from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Routes />
    </Provider>
  );
}

export default App;
