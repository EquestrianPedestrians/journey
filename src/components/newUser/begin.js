import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// **** REDUX **** //
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);
const mapStateToProps = state => { return { data: state.data }}



class Begin extends Component {
  static navigationOptions = {
    title: 'Begin'
  }


  render() {
    console.log(this.props.data)
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
    <Text style={styles.title}> JOURNEY </Text>
      <Text style={styles.message}>To begin 
      {'\n'}
        <Text>CREATE </Text> an account.
      </Text>
      <Text style={styles.message}>Or tap 
        <Text onPress={() => navigate('Name')}
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

export default connect(mapStateToProps, mapDispatchToProps)(Begin);