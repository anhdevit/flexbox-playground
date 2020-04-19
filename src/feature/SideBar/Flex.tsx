/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import colors from '@common/theme/colors';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

export interface Props {
}

const Flex: React.FC<Props> = (props) => {
  return (
      <View style={styles.container}>
        <ScrollView>
          
        </ScrollView>
      </View>
  );
}

export default Flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
});
