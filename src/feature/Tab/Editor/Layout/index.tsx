/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ElementChoose from '../../../../common/components/element-editor/ElementChoose';
import ElementDoubleInput from '../../../../common/components/element-editor/ElementDoubleInput';
import ElementFourInput from '../../../../common/components/element-editor/ElementFourInput';
import ElementInput from '../../../../common/components/element-editor/ElementInput';
import colors from '../../../../common/theme/colors';
import stylesCommon from '../../../../common/theme/styles';
import { layout } from '../../../../common/constants/flex-box';

export default class Layout extends Component {
  render() {
    const {
      width,
      height,
      maxWidth,
      maxHeight,
      minWidth,
      minHeight,
      aspectRatio,
      padding,
      border,
      margin,
      position,
      positionType
    } = layout;
    return (
      <ScrollView style={stylesCommon.viewEditor}>
        <ElementDoubleInput
          title={`${width.title} x ${height.title}`}
          defaultValueLeft={width.defaultValue.toString()}
          defaultValueRight={height.defaultValue.toString()}
          style={[stylesCommon.elementEditor]}
        />
        <ElementDoubleInput
          title={`${maxWidth.title} x ${maxHeight.title}`}
          defaultValueLeft={maxWidth.defaultValue}
          defaultValueRight={maxHeight.defaultValue}
          style={[stylesCommon.elementEditor]}
        />
        <ElementDoubleInput
          title={`${minWidth.title} x ${minHeight.title}`}
          defaultValueLeft={minWidth.defaultValue.toString()}
          defaultValueRight={minHeight.defaultValue.toString()}
          style={[stylesCommon.elementEditor]}
        />
        <ElementInput
          title={aspectRatio.title}
          defaultValue={aspectRatio.defaultValue}
          style={[stylesCommon.elementEditor]}
        />
        <ElementFourInput
          title={padding.title}
          defaultValueTop={padding.value.defaultValueTop.toString()}
          defaultValueLeft={padding.value.defaultValueLeft.toString()}
          defaultValueRight={padding.value.defaultValueRight.toString()}
          defaultValueBottom={padding.value.defaultValueBottom.toString()}
          style={[stylesCommon.elementEditor]}
        />
        <ElementFourInput
          title={border.title}
          defaultValueTop={border.value.defaultValueTop.toString()}
          defaultValueLeft={border.value.defaultValueLeft.toString()}
          defaultValueRight={border.value.defaultValueRight.toString()}
          defaultValueBottom={border.value.defaultValueBottom.toString()}
          style={[stylesCommon.elementEditor]}
        />
        <ElementFourInput
          title={margin.title}
          defaultValueTop={margin.value.defaultValueTop.toString()}
          defaultValueLeft={margin.value.defaultValueLeft.toString()}
          defaultValueRight={margin.value.defaultValueRight.toString()}
          defaultValueBottom={margin.value.defaultValueBottom.toString()}
          style={[stylesCommon.elementEditor]}
        />
        <ElementChoose
          title={positionType.title}
          data={positionType.value}
          style={[stylesCommon.elementEditor]}
        />
        <ElementFourInput
          title={position.title}
          defaultValueTop={position.value.defaultValueTop.toString()}
          defaultValueLeft={position.value.defaultValueLeft.toString()}
          defaultValueRight={position.value.defaultValueRight.toString()}
          defaultValueBottom={position.value.defaultValueBottom.toString()}
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
  }
});
