import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './src/components/app.js';


export default class Journey extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('Journey', () => Journey);
