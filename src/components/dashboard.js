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
    return (
      <View style={styles.container}>
        <View style={styles.tripsContainer}>
          <Text>Hello</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#319CE2',
  },
  tripsContainer: {
    backgroundColor: '#fff',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 150,
    position: 'relative',
    height: 400,


  }
})
export default Dashboard;