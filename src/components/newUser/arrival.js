import React, { Component } from 'react';
import {
  View, 
  Text,
  TextInput,
  StyleSheet
} from 'react-native';



class Arrival extends Component {
  static navigationOptions = {
    title: 'Date of Arrival'
  }
  constructor(props) {
    super(props);
    this.state = {date: ''}
  }

 render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text style={styles.message}> 
        Date of arrival: 
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Jan 15, 2018"
        onChangeText={(text) => this.setState({date:text})}
        onSubmitEditing={() => {
          this.props.screenProps.update(this.state)
          navigate('Departure')}}
        />
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
    backgroundColor: '#A08FD8',
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

export default Arrival;