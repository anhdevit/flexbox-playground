/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { SafeAreaView } from 'react-navigation';
import {
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import colors from '../../common/theme/colors';
import Menu from '../../common/components/buttons/Menu';
import Editor from '../../common/components/buttons/Editor';
import HeaderTitle from '../../common/components/texts/HeaderTitle';

export default class Playground extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: (
      <HeaderTitle 
        title='Playground'
      />
    ),
    headerLeft: (
      <Menu
        navigation={navigation}
      />
    ),
    headerRight: (
      <Editor
        navigation={navigation}
      />
    )
  });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.rootView}
        >
          <Text>root</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  rootView: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
