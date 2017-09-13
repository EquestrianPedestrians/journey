import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { data: this.props.screenProps.data }
  }

  componentWillReceiveProps(nextProps) {
    console.log('DASHBOARD:', nextProps.screenProps)
    if (nextProps.screenProps.data !== this.state.data) {
      this.setState({ data: nextProps.screenProps.data.daily })
    }
  }


  render() {
    const { data } = this.state.data;
    return (
      <View style={styles.container}>
        <FlatList 
        data={data} 
        renderItem={({item}) => <ListItem summary={item.summary} />}
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
})
export default Dashboard;