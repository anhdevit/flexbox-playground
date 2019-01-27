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
import ImageButton from '../../../common/components/buttons/ImageButton';
import DropdownButton from '../../../common/components/buttons/DropdownButton';

export default class Action extends Component {
  render() {
    return (
      <View style={styles.container}>
        <DropdownButton
          title='Get Code'
          option={['a', 'b', 'c']}
        />
        <ImageButton
          title='Share URL'
          imageRight={require('../../../resources/assets/common/ic_share.png')}
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
