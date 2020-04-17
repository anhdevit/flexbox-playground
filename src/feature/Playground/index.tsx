/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import colors from '@common/theme/colors';
import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import SideBar from '../SideBar';

export interface Props {
  navigation: any,
}

const Playground: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.rootView}>
      </TouchableOpacity>
      <SideBar />
    </SafeAreaView>
  );
}

export default Playground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  rootView: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.background,
    width: '100%',
    aspectRatio: 1,
  },
  viewEditor: {
    flex: 1,
    backgroundColor: colors.primary
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 16,
    bottom: 40,
  },
});
