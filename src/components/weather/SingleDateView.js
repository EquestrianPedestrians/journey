import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
// *** Containers *** //
import Card from './Card';
import CardSection from './CardSection';
import DateDay from './DateDay';
import Stats from './Stats';
import Background from './Background'
// *** Icons *** //
import IconPartSun from './Icon_PartialSun';
import IconSunny from './Icon_Sunny';
import IconCloudy from './Icon_Cloudy';
import IconOvercast from './Icon_Overcast';
import IconRain from './Icon_Rain';
import IconSnow from './Icon_Snow';
import IconStorm from './Icon_Storm';


class SingleDateView extends Component {
  constructor(props) {
    super(props);
    
  }
  
  showIcon(icon) {
    const weather = {
      'rain': (<IconRain />),
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
    console.log('HEEERE:', this.props)
    return (
      <Background>
        <Card>
          <DateDay>
            <Text style={styles.day}>12</Text>
          </DateDay>
          <CardSection>
            <Text style={styles.date}>Wednesday</Text>
            <Text style={styles.mmYY}>July 2017</Text>
          </CardSection>
        </Card>
        <Stats>
          <Text style={styles.stats}>
           Overcast day with gray clouds
          </Text>
          <Text style={styles.stats}>
            Avg Temperature: 75° F
          </Text>
          <Text style={styles.stats}>
            Temperature High: 77° F
          </Text>
          <Text style={styles.stats}>
            Temperature Low: 73° F
          </Text>
          <Text style={styles.stats}>
            Humidity: 5%
          </Text>
          <Text style={styles.stats}>
           Overcast day with gray clouds
          </Text>
          <Text style={styles.stats}>
            Avg Temperature: 75° F
          </Text>
          <Text style={styles.stats}>
            Temperature High: 77° F
          </Text>
          <Text style={styles.stats}>
            Temperature Low: 73° F
          </Text>
          <Text style={styles.stats}>
            Humidity: 5%
          </Text>
        </Stats>
        {this.showIcon('rain')}
      </Background>
    )
  }
}

const styles = StyleSheet.create({
  date: {
    fontSize: 23,
  },
  mmYY: {
    fontSize: 35,
  },
  day: {
    fontSize: 80,
  },
  icon: {
    height: 200,
    width: 250,
  },
  stats: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  }
});

export default SingleDateView;