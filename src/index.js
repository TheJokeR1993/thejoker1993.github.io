import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as  HashRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import store from "../src/redux/index"
import AppContainer from './AppContainer';
import './helps/i18n'
import { spiner } from './helps/spiner';
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <Suspense fallback={spiner('first')}>
        <AppContainer />
      </Suspense>
    </Provider>
  </HashRouter>
  ,
  document.getElementById('root')
);

