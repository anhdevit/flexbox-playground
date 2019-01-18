/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class Playground extends Component<Props> {
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
      <View style={styles.container}>
        <Text style={styles.welcome}>root</Text>
      </View>
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
