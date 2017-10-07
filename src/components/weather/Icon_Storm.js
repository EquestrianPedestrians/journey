import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const IconStorm = props => {
  return (
    <View style={styles.container}>
      <Image  
      style={styles.icon}
      source={require('../../assets/storm.png')} />
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
    height: 200,
    width: 200,
  },
});

export default IconStorm;