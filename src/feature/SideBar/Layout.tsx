/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '@common/theme/colors';

export interface Props {
}

const Layout: React.FC<Props> = (props) => {
  return (
      <View style={styles.container}/>
  );
}

export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
