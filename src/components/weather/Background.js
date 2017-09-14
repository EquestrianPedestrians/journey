import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Icon = props => {
  return (
    <View style={styles.container}>
    {props.children}
    </View>
  )
}
const colors = ['#319CE2', '#4DCCBD', '#FF8484',  '#A08FD8']

const randomize = Math.floor(Math.random() * colors.length)

const cycleColors = () => { 
  return colors[randomize]
}

console.log('color: ', cycleColors())
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: cycleColors(),
  },
});

export default Icon;