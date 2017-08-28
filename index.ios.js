import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import NewUser from './src/components/newUser';



export default class Journey extends Component {
  render() {
    return (
      <NewUser />
    );
  }
}


AppRegistry.registerComponent('Journey', () => Journey);
