import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';

import './config/ReactotronConfig';

import Header from './components/Header';
import Routes from './routes';
import store from './store';

import history from './services/history';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        {/* <BrowserRouter> */}
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} />
      </Router>
      {/* </BrowserRouter> */}
    </Provider>
  );
}

export default App;
