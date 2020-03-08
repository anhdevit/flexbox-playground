/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import ElementChoose from '../../../../common/components/element-editor/ElementChoose';
import ElementDropdown from '../../../../common/components/element-editor/ElementDropdown';
import ElementInput from '../../../../common/components/element-editor/ElementInput';
import { flex } from '../../../../common/constants/flex-box';
import colors from '../../../../common/theme/colors';
import stylesCommon from '../../../../common/theme/styles';

export default class Flex extends Component {
  render() {
    const { direction, flexDirection, basis, grow, shrink, flexWrap } = flex;
    return (
      <ScrollView style={stylesCommon.viewEditor}>
        <ElementChoose
          title={direction.title}
          data={direction.value}
          style={[stylesCommon.elementEditor]}
        />

        <ElementDropdown
          title={flexDirection.title}
          value={flexDirection.value[0]}
          option={flexDirection.value}
          style={[stylesCommon.elementEditor]}
        />
        <View style={styles.viewRow}>
          <ElementInput
            title={basis.title}
            defaultValue={basis.defaultValue}
            style={{ flex: 1 }}
          />
          <ElementInput
            title={grow.title}
            defaultValue={grow.defaultValue.toString()}
            style={{ flex: 1 }}
          />
          <ElementInput
            title={shrink.title}
            defaultValue={shrink.defaultValue.toString()}
            style={{ flex: 1 }}
          />
        </View>
        <ElementChoose
          title={flexWrap.title}
          data={flexWrap.value}
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
    paddingHorizontal: 20
  },
  viewRow: {
    flexDirection: 'row',
    marginTop: 20
  }
});
