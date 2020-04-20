/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import TabEditor from '@router/TabEditor';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import colors from '@common/theme/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export interface Props {
}

const SideBar: React.FC<Props> = (props) => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <TabEditor />
      </KeyboardAwareScrollView>
      <View style={styles.footer} >
        <Button icon="plus" mode="contained" onPress={() => console.log('Pressed')}>
          add child node
        </Button>
        <Button icon="minus" mode="contained" onPress={() => console.log('Pressed')}>
          remove node
        </Button>
      </View>
    </View>
  );
}

export default SideBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  }
})