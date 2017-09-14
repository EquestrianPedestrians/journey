import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import moment from 'moment';

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
  renderTime(item) {
    return moment(item.time).format('dddd MMMM do YYYY')
  }

  render() {
    const { data } = this.state.data.daily;
    console.log('DASHBOARD:', data)
    return (
      <View style={styles.container}>
        <List containerStyle={styles.container}>
            <FlatList 
            data={data} 
            renderItem={({item}) =>
            <View style={styles.listContainer} key={item.time}>  
              <Text style={styles.input}>{this.renderTime({item})}</Text>
                <Text style={styles.message}>
                {item.summary}
                </Text>
            </View>
              }
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#319CE2',
  },
  listContainer: {
    flex: 1,
    borderColor: 'white',
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    marginTop: 20,
  },
  message: {
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  }
})
export default Dashboard;