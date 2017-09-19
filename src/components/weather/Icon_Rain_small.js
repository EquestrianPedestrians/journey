import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const IconRain = props => {
  return (
    <View style={styles.container}>
      <Image  
      style={styles.icon}
      source={require('../../assets/rain.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 25,
  },
  icon: {
    height: 60,
    width: 50,
  },
});

export default IconRain;