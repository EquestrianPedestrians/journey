import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import axios from 'axios';
import ApiKey from '../../keys'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {lat: '', lng: ''}
    this.getWeather = this.getWeather.bind(this);
  }

  componentDidMount() {
    this.getGeocode()
    
    window.setTimeout(this.getWeather, 2000)
  }

  getWeather() {
    axios.get('https://api.darksky.net/forecast/' + 
    ApiKey.DarkSky + '/' + this.state.lat + ',' + this.state.lng)
      .then((res) => console.log(res.data.currently))
      .catch((err) => console.log('Error: ', err))
    
  }

  getGeocode() {
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?address=+' + 'Barcelona' + ',+' + 'Spain' + '&key=' + ApiKey.Geocoding)
    .then((res) => {
      this.setState({lat: res.data.results[0].geometry.location.lat})
      this.setState({lng: res.data.results[0].geometry.location.lng})
    })
    .catch((err) => console.log(err))
  }

  render() {
    return (
      <View></View>
    )
  }
}

export default Dashboard;