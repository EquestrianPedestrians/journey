import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ListView,
  ActivityIndicator
} from 'react-native';

export default class NewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {  dataSource: [], isLoading: true  };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/users/test')
      .then(resp => resp.json())
      .then(data => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(data.data)
        });
      })
      .catch(err => console.error(err)); 
  }

  render() {
    if (this.state.isLoading) {
      return (
          <View style={{flex:1, paddingTop:20}}>
            <ActivityIndicator />
          </View>
        );
    }

    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={rowData => <Text style={styles.welcome}>{rowData.name}: {rowData.email}</Text>}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignContent: 'center',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6699',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 50,
    color: 'white',
  }
});

