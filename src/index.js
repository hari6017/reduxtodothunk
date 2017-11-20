import React from 'react';
import ReactDom from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './components/app';
import thunkMiddleware from 'redux-thunk';

import allReducers from './reducers/index';

const store = createStore(allReducers,applyMiddleware(thunkMiddleware));
//const store = createStore(allReducers);



ReactDom.render (

  <Provider store = {store}>
  <App />
  </Provider>, document.getElementById('root'));
