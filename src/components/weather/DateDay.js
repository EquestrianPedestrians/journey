import React from 'react';
import { View } from 'react-native';

const DateDay = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    position: 'absolute',
    marginRight: 275,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 35,
    padding: 2,
    width: 100,
  }
};

export default DateDay;