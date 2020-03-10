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
import R from '@R/R';

export default class EditorButton extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageButton
          title="add child node"
          imageRight={R.images.ic_add_circle_outline}
          styleCustom={{
            flex: 1
          }}
        />
        <ImageButton
          title="remove node"
          imageRight={R.images.ic_remove_circle_outline}
          styleCustom={{
            flex: 1,
            marginLeft: 15
          }}
          disable
          onPress={() => {}}
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
  }
});
