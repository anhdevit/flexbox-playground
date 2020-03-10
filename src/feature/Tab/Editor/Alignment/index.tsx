/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text } from 'react-native';
import ElementDropdown from '../../../../common/components/element-editor/ElementDropdown';
import { alignment } from '../../../../common/constants/flex-box';
import colors from '../../../../common/theme/colors';
import stylesCommon from '../../../../common/theme/styles';

export default class Alignment extends Component {
  render() {
    const { justifyContent, alignItems, alignSelf, alignContent } = alignment;
    return (
      <ScrollView style={stylesCommon.viewEditor}>
        <ElementDropdown
          title={justifyContent.title}
          value={justifyContent.value[1]}
          option={justifyContent.value}
          style={[stylesCommon.elementEditor]}
        />
        <ElementDropdown
          title={alignItems.title}
          value={alignItems.value[1]}
          option={alignItems.value}
          style={[stylesCommon.elementEditor]}
        />
        <ElementDropdown
          title={alignSelf.title}
          value={alignSelf.value[1]}
          option={alignSelf.value}
          style={[stylesCommon.elementEditor]}
        />
        <ElementDropdown
          title={alignContent.title}
          value={alignContent.value[1]}
          option={alignContent.value}
          style={[stylesCommon.elementEditor]}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
