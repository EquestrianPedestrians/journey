
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


class NewTrip extends Component {
  static navigationOptions = {
    title: 'New Trip'
  }
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text style={styles.message}> 
        Name your journey: 
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Spain 2018"
        onChangeText={(text) => this.setState({title:text})}
        onSubmitEditing={() => {
          this.props.screenProps.update(this.state)
          navigate('Destination')}}
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
    backgroundColor: '#FF8484',
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

export default NewTrip;