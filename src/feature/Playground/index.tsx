/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import colors from '../../common/theme/colors';
import { FAB } from 'react-native-paper';

export interface Props {
  navigation: any,
}

const Playground: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.rootView}>
      </TouchableOpacity>
      <View style={styles.viewEditor}/>
      <FAB
        style={styles.fab}
        small
        icon="plus"
        onPress={() => console.log('Pressed')}
      />
    </SafeAreaView>
  );
}

export default Playground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  rootView: {
    borderWidth: 2,
    borderColor: colors.primary,
    // flex: 1,
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
