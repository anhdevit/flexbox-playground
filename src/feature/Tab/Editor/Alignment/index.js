/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import colors from '../../../../common/theme/colors';
import ElementDropdown from '../../../../common/components/element-editor/ElementDropdown';
import stylesCommon from '../../../../common/theme/styles';

export default class Alignment extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ElementDropdown
          title='JUSTIFY CONTENT'
          value='flex start'
          style={[stylesCommon.elementEditor]}
        />
        <ElementDropdown
          title='ALIGN ITEMS'
          value='stretch'
          style={[stylesCommon.elementEditor]}
        />
        <ElementDropdown
          title='ALIGN SELF'
          value='auto'
          style={[stylesCommon.elementEditor]}
        />
        <ElementDropdown
          title='ALIGN CONTENT'
          value='stretch'
          style={[stylesCommon.elementEditor]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
});
