
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';



class Name extends Component {
  static navigationOptions = {
    title: 'Name'
  }
  constructor(props) {
    super(props);
    this.state = {name: ''}
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text style={styles.message}> 
        What should I call you? 
      </Text>
      <TextInput 
        style={styles.input}
        placeholder={"Arya Stark"}
        onChangeText={(text) => this.setState({name:text})}
        onSubmitEditing={() => {
          this.props.screenProps.update(this.state)
          navigate('NewTrip', {name: this.state})
        }}
        />
    </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#319CE2',
  },
  input: {
    fontSize: 35,
    color: 'white',
  },
  message: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
    color: 'white',
  }
});

export default Name;