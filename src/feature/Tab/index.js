/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Action from './Action';
import EditorTabbar from '../../router/EditorTabbar';
import EditorButton from './EditorButton';
import colors from '../../common/theme/colors';
import Close from '../../common/components/buttons/Close';
import HeaderTitle from '../../common/components/texts/HeaderTitle';

export default class Tab extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: <HeaderTitle title="Editor" />,
    headerLeft: <Close navigation={navigation} />
  });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Action />
        <EditorTabbar
          style={{
            flex: 1,
            backgroundColor: 'black'
          }}
        />
        <EditorButton />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background
  }
});
