import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Image,
  Button
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
    const { navigate } = this.props.navigation;
    const { data } = this.state.data.daily;
    return (
      <View style={styles.container}>
        <View style={styles.tripsContainer}>
            <ScrollView>
              <View style={styles.tripListItem}>
                <View style={styles.tripTitle}>
                  <Text style={styles.title}
                  onPress={() => navigate('SingleDateView')}>London 2018
                  </Text>
                  <Text style={{color: 'white'}}>12 JULY 2018</Text>
                </View>
                <View style={styles.iconContainer}>
                  {this.showIcon('rain')}
                </View>
            </View>
          </ScrollView>
        </View>
        <Button title="Add"></Button>
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
    padding: 15
  },
  tripListItem: {
    height: 100,
    backgroundColor: '#4DCCBD',
    padding: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3'
  },
  tripTitle: {
    justifyContent:'center',
    alignItems: 'flex-start',
  },
  title: {
    color: 'white',
    fontSize: 25,
  },
  iconContainer: {
    justifyContent: 'flex-end',
    position: 'relative',
    marginLeft: 235,
    marginTop: -30,
    height: 60,
    width: 60,
  },
})
export default Dashboard;