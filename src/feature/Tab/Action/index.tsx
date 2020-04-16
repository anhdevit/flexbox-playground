/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import DropdownButton from '../../../common/components/buttons/DropdownButton';

export default class Action extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DropdownButton title="Get Code" option={['a', 'b', 'c']} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    paddingVertical: 10
  }
});
