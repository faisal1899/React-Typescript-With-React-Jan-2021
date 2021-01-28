import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { reducers } from './store/reducers';

const devTools = process?.env?.NODE_ENV === 'development' ?
  composeWithDevTools() :
  undefined;

const store = createStore(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);