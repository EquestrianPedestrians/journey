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

class AddDestination extends Component {
  static navigationOptions = {
    title: 'Add a Destination'
  }


  render() {
    console.log(this.props)
    const { navigate } = this.props.navigation;
    return (
    <View style={styles.container}>
      <Text style={styles.message}>
      Tap 
      {'\n'}
        <Text onPress={() => navigate('Destination')}
          >ADD </Text>to add a new destination
      </Text>
      <Text style={styles.message}>Or tap 
        <Text onPress={() => navigate('Ready')}> FINISH!
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

export default connect(mapStateToProps, mapDispatchToProps)(AddDestination);