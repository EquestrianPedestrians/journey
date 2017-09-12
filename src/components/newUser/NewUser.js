
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import NewUserViews from './navigator'

const userInfo = [];
class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {userData: []};
  }
  onSave() {
    //post request
    //flatten object
    //parse values and save to database
  }

  updateProps(info) {
    userInfo.push(info)
    this.setState({userData: userInfo})
  }

  render() {
    console.log('NEW USER: ', this.state)
    return (
      <NewUserViews screenProps={{
        update: this.updateProps.bind(this), 
        save: this.onSave.bind(this)
      }}/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#319CE2',
  },
  input: {
    fontSize: 35,
    color: 'white'
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color: 'white',
  }
});

export default NewUser;