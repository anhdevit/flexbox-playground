/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import colors from '@common/theme/colors';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SideBar from '../SideBar';
import { connect } from 'react-redux';
import { addNode, removeNode } from './playgroundSlice';
import Element from './Element';
export interface Props {
  navigation: any,
  dataChildren: {},
  stylesChildren: {}
}

const Playground: React.FC<Props> = (props) => {
  const { dataChildren, stylesChildren } = props;
  return (
    <KeyboardAwareScrollView>
      <Element
        id={0}
        dataChildren={dataChildren}
        indexElement={0}
        style={stylesChildren['0']} 
      />
      <SideBar />
    </KeyboardAwareScrollView>
  );
}

const mapStateToProps = (state, ownProps) => {
  return ({
    dataChildren: state.playground.dataChildren,
    stylesChildren: state.playground.stylesChildren
  })
}

const mapDispatch = {
  addNode,
  removeNode
}

export default connect(
  mapStateToProps,
  mapDispatch
)(Playground);

const styles = StyleSheet.create({
  rootView: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.background,
    width: '100%',
    aspectRatio: 1,
  },
});
