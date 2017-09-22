import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native';
// import WeatherViews from './navigator';


class AddDestination extends Component {
  static navigationOptions = {
    title: 'Add a Destination'
  }
  constructor(props) {
    super(props);
    this.onFinish = this.onFinish.bind(this);
  }
  onFinish() {
    this.props.navigation.navigate('Dashboard')
  }

  render() {
    let { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text style={styles.message}>
      Tap 
      {'\n'}
        <Text style={{fontWeight: 'bold'}}  
        onPress={() => navigate('Destination')}
        > HERE </Text>to add a new destination
      </Text>
      <Text style={styles.message}>Or tap 
        <Text style={{fontWeight: 'bold'}}
          onPress={() => {
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
    fontSize: 27,
    textAlign: 'center',
    margin: 20,
    color: 'white',
  }
});

export default AddDestination;