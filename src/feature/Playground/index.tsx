/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../common/theme/colors';

export interface Props {
  navigation: any,
}

const Playground: React.FC<Props> = (props) => {
  // static navigationOptions = ({ navigation }) => ({
  //   headerTitle: <HeaderTitle title="Playground" />,
  //   headerLeft: <Menu navigation={navigation} />,
  //   headerRight: <Editor navigation={navigation} />
  // });

  return (
    <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.rootView}>
      <TouchableOpacity style={styles.childView} />
      <TouchableOpacity style={styles.childView} />
      <TouchableOpacity style={styles.childView} />
    </TouchableOpacity>
  </SafeAreaView>
  );
}

export default Playground;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  rootView: {
    margin: 10,
    borderWidth: 2,
    borderColor: colors.primary,
    width: 300,
    height: 300
  },
  icon: {
    width: 24,
    height: 24
  },
  childView: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'gray'
  }
});
