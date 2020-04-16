/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import colors from '../../common/theme/colors';
import EditorTabbar from '../../router/EditorTabbar';
import Action from './Action';
import EditorButton from './EditorButton';

export default class Tab extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Action />
        <EditorTabbar />
        <EditorButton />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});
