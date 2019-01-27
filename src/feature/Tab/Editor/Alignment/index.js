/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ElementDropdown from '../../../../common/components/element-editor/ElementDropdown';
import { alignment } from '../../../../common/constants/flex-box';
import colors from '../../../../common/theme/colors';
import stylesCommon from '../../../../common/theme/styles';

export default class Alignment extends Component {
  render() {
    const { justifyContent, alignItems, alignSelf, alignContent } = alignment;
    return (
      <View style={styles.container}>
        <ElementDropdown
          title={justifyContent.title}
          value={justifyContent.value[1]}
          style={[stylesCommon.elementEditor]}
        />
        <ElementDropdown
          title={alignItems.title}
          value={alignItems.value[1]}
          style={[stylesCommon.elementEditor]}
        />
        <ElementDropdown
          title={alignSelf.title}
          value={alignSelf.value[1]}
          style={[stylesCommon.elementEditor]}
        />
        <ElementDropdown
          title={alignContent.title}
          value={alignContent.value[1]}
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
