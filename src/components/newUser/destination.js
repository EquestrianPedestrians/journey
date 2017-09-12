import React, { Component } from 'react';
import {
  View, 
  Text,
  TextInput,
  StyleSheet
} from 'react-native';



class Destination extends Component {
  static navigationOptions = {
    title: 'Enter Destination'
  }
  constructor(props) {
    super(props);
    this.state = {place: ''}
  }

 render() {
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text style={styles.message}> 
        Enter a destination: 
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Barcelona"
        onChangeText={(text) => this.setState({place:text})}
        onSubmitEditing={() => {
          this.props.screenProps.update(this.state)
          navigate('Arrival')}}
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
    backgroundColor: '#ADFFED',
  },
  input: {
    fontSize: 25,
    color: '#231651'
  },
  message: {
    fontSize: 20,
    textAlign: 'center',
    margin: 20,
    color: '#231651',
  }
});

export default Destination;