import React, { Component } from 'react';
import { Text, View } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
   };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

export default HomeScreen;