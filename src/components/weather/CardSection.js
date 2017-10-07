
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    marginLeft: 130,
    marginRight: 25,
    marginTop: 30,
    position: 'relative',
    alignItems: 'center',
  }
};

export default CardSection;