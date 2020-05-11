/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import colors from '@common/theme/colors';
import TabEditor from '@router/TabEditor';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import { addNode, removeNode } from '../Playground/playgroundSlice';

export interface Props {
  addNode: Function,
  removeNode: Function
}

const SideBar: React.FC<Props> = (props) => {
  const { addNode, removeNode } = props;

  return (
    <View style={styles.container}>
      <TabEditor />
      <View style={styles.footer}>
        <Button icon="plus" mode="contained" onPress={() => addNode()}>
          add child node
        </Button>
        <Button
          icon="minus"
          mode="contained"
          onPress={() => removeNode()}
          style={{
            backgroundColor: 'gray'
          }}
          labelStyle={{
            color: 'white'
          }}
          color={'red'}
        >
          remove node
        </Button>
      </View>
    </View>
  );
}

const mapStateToProps = (state, ownProps) => {
  return ({
    elementIsSelect: state.playground.elementIsSelect,
    dataChildren: state.playground.dataChildren,
  })
}

const mapDispatch = {
  addNode,
  removeNode
}
export default connect(
  mapStateToProps,
  mapDispatch
)(SideBar);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    height: hp('50%')
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  }
})