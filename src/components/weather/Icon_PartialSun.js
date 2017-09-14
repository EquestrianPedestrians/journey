import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const IconPartSun = props => {
  return (
    <View style={styles.container}>
      <Image  
      style={styles.icon}
      source={require('../../assets/partialSun.png')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 20,
  },
  icon: {
    height: 200,
    width: 250,
  },
});

export default IconPartSun;