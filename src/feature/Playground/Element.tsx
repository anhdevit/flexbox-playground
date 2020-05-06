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

export interface Props {
  navigation: any,
}

const Element: React.FC<Props> = (props) => {
  return (
        <TouchableOpacity style={styles.rootView}>
        </TouchableOpacity>
  );
}

export default Element;

const styles = StyleSheet.create({
  rootView: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.background,
    width: '100%',
    aspectRatio: 1,
  },
});
