import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import App from './components/app';



export default class Journey extends Component {
  render() {
    return (
      <App />
    );
  }
}


AppRegistry.registerComponent('Journey', () => Journey);
