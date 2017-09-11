import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { FadeInView } from './FadeInView'
import { NavigationActions } from 'react-navigation';


const navigateAction = NavigationActions.navigate({
  routeName: 'Ready',
  params: {},
  action: NavigationActions.navigate({ routeName: 'Set' })
})

class Ready extends Component {
  static navigationOptions = {
    title: 'Loading...'
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <FadeInView style={{backgroundColor: "#4DCCBD"}}> 
        <Text style={styles.message}>Ready...</Text>
      </FadeInView>
    </View>
    )
    this.props.navigation.dispatch(navigateAction)
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
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
    color: 'white',
  }
});

export default Ready;