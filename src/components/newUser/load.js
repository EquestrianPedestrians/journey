// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View
// } from 'react-native';
// import axios from 'axios';
// import ApiKey from '../../../keys';
// import Dashboard from '../dashboard';

// class Load extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {lat: '', lng: '', data: null}
//     this.getWeather = this.getWeather.bind(this);
//   }

//   componentDidMount() {
//     this.getGeocode()
    
    
//   }


//   render() {
//     return (
//       <View style={styles.container}>
//         <Dashboard />
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignContent: 'center',
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#319CE2',
//   },
//   input: {
//     fontSize: 35,
//     color: 'white'
//   },
//   message: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 20,
//     color: 'white',
//   }
// });
// export default Load;