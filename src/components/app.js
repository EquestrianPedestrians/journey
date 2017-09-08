import React, { Component } from 'react';
import {  
  Text,
  View 
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import Begin from './newUser/begin.js';
import NewTrip from './newUser/newTrip.js';
import Destination from './newUser/destination.js';
import Arrival from './newUser/arrival.js';
import Departure from './newUser/departure.js'
import AddDestination from './newUser/addDestination.js';



const App = StackNavigator({
      Begin: { screen: Begin },
      NewTrip: { screen: NewTrip },
      Destination: { screen: Destination },
      Arrival: { screen: Arrival },
      Departure: { screen: Departure },
      AddDestination: { screen: AddDestination },
    })




export default App;