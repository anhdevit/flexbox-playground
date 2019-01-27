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
import stylesCommon from '../../../../common/theme/styles';


export default class Flex extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ElementChoose
          title='DIRECTION'
          data={['inherit', 'ltr', 'rtl']}
        />

        <ElementDropdown
          title='FLEX DIRECTION'
          value='row'
          style={[stylesCommon.elementEditor]}
        />
        <View
          style={styles.viewRow}
        >
          <ElementInput
            title='BASIS'
            style={{flex: 1}}
          />
          <ElementInput
            title='GROW'
            style={{flex: 1}}
          />
          <ElementInput
            title='SHRINK'
            style={{flex: 1}}
          />
        </View>
        <ElementChoose
          title='FLEX WRAP'
          data={['no wrap', 'wrap', 'shrink']}
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
  viewRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
});
