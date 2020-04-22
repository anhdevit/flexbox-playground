/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import SideBar from '../SideBar';
import colors from '@common/theme/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

export interface Props {
  navigation: any,
}

const Playground: React.FC<Props> = (props) => {
  return (
    <KeyboardAwareScrollView>
      <TouchableOpacity style={styles.rootView}>
      </TouchableOpacity>
        <SideBar />
    </KeyboardAwareScrollView>

  );
}

export default Playground;

const styles = StyleSheet.create({
  rootView: {
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.background,
    width: '100%',
    aspectRatio: 1,
  },
});
