/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ImageButton from '../../../common/components/buttons/ImageButton';

export default class EditorButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageButton
          title='add child node'
          imageRight={require('../../../resources/assets/common/ic_add_circle_outline.png')}
          styleCustom={
            {
              flex: 1
            }
          }
        />
        <ImageButton
          title='remove node'
          imageRight={require('../../../resources/assets/common/ic_remove_circle_outline.png')}
          styleCustom={
            {
              flex: 1,
              marginLeft: 15,
            }
          }
          disable
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
