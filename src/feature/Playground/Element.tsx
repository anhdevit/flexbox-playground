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
  id: string,
  elementIsSelect: string,
  selectElement: Function,
  dataChildren: Object,
  indexElement: string,
  style: Object
}

const Element: React.FC<Props> = (props) => {
  const {
    stylesChildren,
    id,
    elementIsSelect,
    selectElement,
    dataChildren,
    data,
    style
  } = props
  console.log("props", props)
  console.log("id", id)

  return (
    <TouchableOpacity
      style={[style, { borderColor: elementIsSelect === id.toString() ? colors.primary : 'gray' }]}
      onPress={() => selectElement(id.toString())}
    >
      <View
        style={styles.container}
      >
        <Text>{id}</Text>
      </View>
      {
        typeof data === 'object' && data.map((item, index) => {
          console.log("dataChildren[indexElement][index]", item)
          return <ElementConenct
            key={index}
            id={item}
            data={dataChildren[item]}
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