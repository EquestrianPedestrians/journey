import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Icon = props => {
  return (
    <View style={styles.container}>
    {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    marginRight: 20
  },
});

export default Icon;