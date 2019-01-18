/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Action from './Action';
import EditorTabbar from '../../router/EditorTabbar';
import EditorButton from './EditorButton'
export default class Tab extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Action />
        <EditorTabbar 
          style={{
            flex: 1,
            backgroundColor: 'black'
          }}
        />
        <EditorButton />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
