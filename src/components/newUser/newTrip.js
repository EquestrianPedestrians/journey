
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

class NewTrip extends Component {
  static navigationOptions = {
    title: 'New Trip'
  }
  constructor(props) {
    super(props);
    this.state = {title: ''};
  }

  render() {
    console.log(this.props.data)
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
          this.props.setData(this.state)
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

export default connect(mapStateToProps, mapDispatchToProps)(NewTrip);