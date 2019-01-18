/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

export default class Playground extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Playground',
    headerTitle: 'Playground',
    headerLeft: (
      <Button
        onPress={() => navigation.openDrawer()}
        title="Menu"
      />
    ),
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Tab')}
        title="Editor"
      />
    )
  });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.welcome}>root</Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
