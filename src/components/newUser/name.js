
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

// **** REDUX **** //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = state => { return { data: state.data }}

class Name extends Component {
  static navigationOptions = {
    title: 'Name'
  }

  render() {
    console.log(this.props.data)
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text style={styles.message}> 
        What should I call you? 
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Muffincakes?"
        onChangeText={(text) => this.props.setData({name:text})}
        onSubmitEditing={() => navigate('NewTrip')}
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

export default connect(mapStateToProps, mapDispatchToProps)(Name);