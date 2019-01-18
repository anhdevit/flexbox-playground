/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text, 
  View,
  Button
} from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class App extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Documentation',
    headerTitle: 'Documentation',
    headerLeft: (
      <Button
        onPress={() => navigation.openDrawer()}
        title="Menu"
      />
    )
  });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>Documentation</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
