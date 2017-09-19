import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import Begin from './begin.js';
import NewTrip from './newTrip.js';
import Destination from './destination.js';
import Arrival from './arrival.js';
import Departure from './departure.js'
import AddDestination from './addDestination.js';
import Name from './name.js';
import SingleDateView from '../weather/SingleDateView';
import Dashboard from '../dashboard';



const NewUserViews = StackNavigator({
        Dashboard: { screen: Dashboard },
        Begin: { screen: Begin },
        Name: { screen: Name },
        NewTrip: { screen: NewTrip },
        Destination: { screen: Destination },
        Arrival: { screen: Arrival },
        Departure: { screen: Departure },
        AddDestination: { screen: AddDestination },
      })

const WeatherViews = StackNavigator({
        SingleDateView: { screen: SingleDateView },
})

const root = StackNavigator({
  User: { screen: NewUserViews },
  Weather: { screen: WeatherViews },
})




export default NewUserViews;