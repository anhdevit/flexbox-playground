/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import CustomButton from '../../../common/components/buttons/CustomButton';

export default class EditorButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomButton
          title='add child node'
          styleCustom={
            {
              flex: 1
            }
          }
        />
        <CustomButton
          title='remove node'
          styleCustom={
            {
              flex: 1,
              marginLeft: 15,
            }
          }
        />
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
  },
});
