import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


class AddDestination extends Component {
  static navigationOptions = {
    title: 'Add a Destination'
  }
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
  }
  onFinish() {
  this.props.navigation.navigate('Dashboard');
  }

  render() {
    let { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text style={styles.message}>
      Tap 
      {'\n'}
        <Text onPress={() => navigate('Destination')}
          >ADD </Text>to add a new destination
      </Text>
      <Text style={styles.message}>Or tap 
        <Text onPress={() => {
          window.setTimeout(this.onFinish, 1000);
          this.props.screenProps.save()}}> FINISH!
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
  message: {
    fontSize: 25,
    textAlign: 'center',
    margin: 20,
    color: 'white',
  }
});

export default AddDestination;