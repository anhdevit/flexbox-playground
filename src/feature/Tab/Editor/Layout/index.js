/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import colors from '../../../../common/theme/colors';
import stylesCommon from '../../../../common/theme/styles';
import ElementDoubleInput from '../../../../common/components/element-editor/ElementDoubleInput';
import ElementInput from '../../../../common/components/element-editor/ElementInput';
import ElementFourInput from '../../../../common/components/element-editor/ElementFourInput';
import ElementChoose from '../../../../common/components/element-editor/ElementChoose';

export default class Layout extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <ElementDoubleInput
          title='WIDTH x HEIGHT'
          style={[stylesCommon.elementEditor]}
        />
        <ElementDoubleInput
          title='MAX-WIDTH x MAX-HEIGHT'
          style={[stylesCommon.elementEditor]}
        />
        <ElementDoubleInput
          title='MIN-WIDTH x MIN-HEIGHT'
          style={[stylesCommon.elementEditor]}
        />
        <ElementInput
          title='ASPECT RATIO'
          style={[stylesCommon.elementEditor]}
        />
        <ElementFourInput
          title='PADDING'
          style={[stylesCommon.elementEditor]}
        />
        <ElementFourInput
          title='BORDER'
          style={[stylesCommon.elementEditor]}
        />
        <ElementFourInput
          title='MARGIN'
          style={[stylesCommon.elementEditor]}
        />
        <ElementChoose
          title='POSITION TYPE'
          data={['relative', 'absolute']}
        />
        <ElementFourInput
          title='POSITION'
          style={[stylesCommon.elementEditor]}
        />
      </ScrollView>
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
