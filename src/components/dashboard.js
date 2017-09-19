import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import moment from 'moment';
// *** Icons *** //
import IconPartSun from './weather/Icon_PartialSun';
import IconSunny from './weather/Icon_Sunny';
import IconCloudy from './weather/Icon_Cloudy';
import IconOvercast from './weather/Icon_Overcast';
import IconRain from './weather/Icon_Rain_small';
import IconSnow from './weather/Icon_Snow';
import IconStorm from './weather/Icon_Storm';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = { data: this.props.screenProps.data }
  }
  componentDidMount() {
    console.log('Component Mounted!!!', this.props)
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.screenProps.data !== this.state.data) {
      this.setState({ data: nextProps.screenProps.data.daily })
    }
  }
  renderTime(item) {
    return moment(item.time).format('dddd MMMM do YYYY')
  }

    showIcon(icon) {
    const weather = {
      'rain': (<IconRain style={styles.icon}/>),
      'partly-cloudy-day': (<IconPartSun />),
      'clear-day': (<IconSunny />)
    }
    for (var key in weather) {
      if (icon === key) {
        return weather[key]
      }
    }
  }

  render() {
    const { data } = this.state.data.daily;
    return (
      <View style={styles.container}>
        <View style={styles.tripsContainer}>
            <ScrollView>
              <View style={styles.tripList}>
                <View style={styles.tripTitle}>
                  <Text style={styles.title}>London 2018
                  </Text>
                  <Text style>12 JULY 2018</Text>
                </View>
                <View style={styles.iconContainer}>
                  {this.showIcon('rain')}
                </View>
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A08FD8',
  },
  tripsContainer: {
    backgroundColor: '#fff',
    marginRight: 30,
    marginLeft: 30,
    marginTop: 150,
    position: 'relative',
    height: 400,
  },
  tripList: {
    height: 100,
    backgroundColor: '#4DCCBD',
    padding: 30,

  },
  tripTitle: {
    color: '#1E1A28',
    fontSize: 25,
    justifyContent:'center',
    alignItems: 'flex-start',
  },
  iconContainer: {
    justifyContent: 'flex-end',
    position: 'relative',
    marginLeft: 225,
    marginTop: -25,
    height: 60,
    width: 60,
  },
})
export default Dashboard;