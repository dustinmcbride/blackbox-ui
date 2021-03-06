// ./src/index.js
import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';


//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import * as bookActions from './actions/bookActions';
import * as planeActions from './actions/planeActions';
import configureStore from './store/configureStore';

const store = configureStore();
store.dispatch(bookActions.fetchBooks());
store.dispatch(planeActions.fetchPlanes());


render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
