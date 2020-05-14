/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { setChildren, selectElement } from './playgroundSlice';
import colors from '@common/theme/colors';

export interface Props {
  navigation: any,
  stylesChildren: Object,
  keyParent: string,
  elementIsSelect: string,
  selectElement: Function,
  dataChildren: Object,
  dataElement: string,
  indexElement: Object,
  style: Object
}

const Element: React.FC<Props> = (props) => {
  const {
    stylesChildren,
    keyParent,
    elementIsSelect,
    selectElement,
    dataChildren,
    dataElement,
    style,
    indexElement,
    currentKey
  } = props
  console.log("props", props)
  console.log("dataElement", dataElement)
  console.log("keyParent", keyParent)
  console.log("indexElement", indexElement)
  console.log("currentKey", currentKey)

  return (
    <TouchableOpacity
      style={[style, { borderColor: elementIsSelect.currentKey === currentKey ? colors.primary : 'gray' }]}
      onPress={() => selectElement(keyParent, indexElement, currentKey)}
    >
      <View
        style={styles.container}
      >
        <Text>{currentKey}</Text>
      </View>
      {
        typeof dataElement === 'object' && dataElement.map((item, index) => {
          console.log("dataChildren[indexElement][index]", item)
          return <ElementConenct
            key={index}
            keyParent={keyParent}
            currentKey={item}
            indexElement={index}
            dataElement={dataChildren[item]}
            style={stylesChildren[item]}
          />
        })
      }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    ...StyleSheet.absoluteFill,
  }
})

const mapStateToProps = (state, ownProps) => {
  return ({
    stylesChildren: state.playground.stylesChildren,
    elementIsSelect: state.playground.elementIsSelect,
    dataChildren: state.playground.dataChildren,
  })
}

const mapDispatch = {
  setChildren,
  selectElement
}

export const ElementConenct = connect(
  mapStateToProps,
  mapDispatch
)(Element);