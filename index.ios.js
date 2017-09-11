import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/components/app.js';

// **** REDUX **** //
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReduxers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducer from './src/components/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__});
const store = createStore(reducer, {}, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)));



export default class Journey extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}


AppRegistry.registerComponent('Journey', () => Journey);
