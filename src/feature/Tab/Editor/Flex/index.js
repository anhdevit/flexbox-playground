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
import ElementChoose from '../../../../common/components/element-editor/ElementChoose';
import ElementInput from '../../../../common/components/element-editor/ElementInput';

export default class Flex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ElementChoose
          title='FLEX DIRECTION'
          data={['inherit', 'ltr', 'rtl']}
        />
        {/* <ElementDropdown
          title='FLEX DIRECTION'
        /> */}
        {/* <View
          style={styles.viewRow}
        >
          <ElementInput
            title='BASIS'
          />
          <ElementInput
            title='GROW'
          />
          <ElementInput
            title='SHRINK'
          />
        </View>
        <ElementChoose
          title='FLEX WRAP'
          data={['no wrap', 'wrap', 'wrap reverse']}
        /> */}
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
  viewRow: {
    flexDirection: 'row'
  }
});
