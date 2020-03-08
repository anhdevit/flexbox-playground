/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Menu from '../../common/components/buttons/Menu';
import HeaderTitle from '../../common/components/texts/HeaderTitle';
import colors from '../../common/theme/colors';

export default class App extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle title="Documentation" />,
    headerLeft: <Menu navigation={navigation} />
  });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Documentation</Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background
  }
});
