import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FadeInView } from './FadeInView'


class Go extends Component {
  static navigationOptions = {}


  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <FadeInView style={{backgroundColor: "#A08FD8"}}> 
        <Text style={styles.message}>Ready...</Text>
      </FadeInView>
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
    backgroundColor: 'white',
  },
  message: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    color: 'white',
  }
});

export default Go;