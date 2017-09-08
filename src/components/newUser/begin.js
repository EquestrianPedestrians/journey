import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Begin extends Component {
  static navigationOptions = {
    title: 'Begin'
  }

  clickCreate() {
    //sign up modal with auth0
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
    <Text style={styles.title}> JOURNEY </Text>
      <Text style={styles.message}>To begin 
      {'\n'}
        <Text>CREATE </Text> an account.
      </Text>
      <Text style={styles.message}>Or tap 
        <Text onPress={() => navigate('NewTrip')}
          > BEGIN!
        </Text>
      </Text>
    </View>
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
    backgroundColor: '#4DCCBD',
  },
  title: {
    fontSize: 60,
    textAlign: 'center',
    color: 'white'
  },
  message: {
    fontSize: 15,
    textAlign: 'center',
    margin: 20,
    color: 'white',
  }
});

export default Begin;