
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import NewUserViews from './navigator'
import axios from 'axios';
import ApiKey from '../../../keys';

const userInfo = [];
class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [], 
      lat: null,
      lng: null,
      data: null,
    };
    this.getWeather = this.getWeather.bind(this);
    this.getGeocode = this.getGeocode.bind(this)
  }
  onSave() {
    //post request
    //flatten object
    //parse values and save to database
    this.getGeocode();
    window.setTimeout(this.getWeather, 500)
  }
  getWeather() {
    axios.get('https://api.darksky.net/forecast/' + 
    ApiKey.DarkSky + '/' + this.state.lat + ',' + this.state.lng)
      .then((res) => {this.setState({data: res.data})})
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

  updateProps(info) {
    userInfo.push(info)
    this.setState({userData: userInfo})
  }



  render() {
    // console.log('NEW USER: ', this.state)
    return (
      <NewUserViews screenProps={{
        update: this.updateProps.bind(this), 
        save: this.onSave.bind(this),
        data: this.state.data
      }}/>
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
});

export default NewUser;