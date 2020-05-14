/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import colors from '@common/theme/colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import SideBar from '../SideBar';
import { ElementConenct } from './Element';
import { addNode, removeNode } from './playgroundSlice';
export interface Props {
  navigation: any,
  dataChildren: {},
  stylesChildren: {}
}

const Playground: React.FC<Props> = (props) => {
  const { dataChildren, stylesChildren } = props;
  return (
    <KeyboardAwareScrollView>
      <ElementConenct
        id={'root'}
        data={dataChildren['root']}
        indexElement={'root'}
        style={stylesChildren['root']} 
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