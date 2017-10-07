import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    height:125,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 30,
    marginRight: 30,
    position: 'relative'
  }
};

export default Card;