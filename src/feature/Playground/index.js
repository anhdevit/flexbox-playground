/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Editor from '../../common/components/buttons/Editor';
import Menu from '../../common/components/buttons/Menu';
import HeaderTitle from '../../common/components/texts/HeaderTitle';
import colors from '../../common/theme/colors';

export default class Playground extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle title="Playground" />,
    headerLeft: <Menu navigation={navigation} />,
    headerRight: <Editor navigation={navigation} />
  });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.rootView}>
          <TouchableOpacity style={styles.childView} />
          <TouchableOpacity style={styles.childView} />
          <TouchableOpacity style={styles.childView} />
          <Text>abc</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

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
