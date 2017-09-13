import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { data: this.props.screenProps.data }
  }
  componentDidMount() {
    console.log('Component Mounted!!!', this.props)
  }
  componentWillReceiveProps(nextProps) {
    console.log('DASHBOARD:', nextProps.screenProps)
    if (nextProps.screenProps.data !== this.state.data) {
      this.setState({ data: nextProps.screenProps.data.daily })
    }
  }


  render() {
    const { data } = this.state.data.daily;
    console.log('DASHBOARD:', data)
    return (
      <View style={styles.container}>
        <List containerStyle={styles.container}>
            <FlatList 
            data={data} 
            renderItem={({item}) => (
              <Text style={styles.message}>
                <Text>{item.time}</Text>
              {item.summary} 
              </Text>
             )}
            />
        </List>
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
    textAlign: 'center',
    margin: 20,
    color: 'white',
  }
})
export default Dashboard;