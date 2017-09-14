import React from 'react';
import { View, ScrollView } from 'react-native';

const Stats = (props) => {
  return (
    <View style={styles.containerStyle}>
      <ScrollView>
      {props.children}
      </ScrollView>
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 275,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 15,
    padding: 20,
    position: 'relative',
    alignItems: 'flex-start',
  }
};

export default Stats;