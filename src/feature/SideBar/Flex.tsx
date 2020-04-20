/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import colors from '@common/theme/colors';
import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Button, Paragraph, Menu, Divider, Provider } from 'react-native-paper';

export interface Props {
}

const Flex: React.FC<Props> = (props) => {
  const [visible, setVisible] = useState(false)

  const _openMenu = () => setVisible(true);

  const _closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            paddingTop: 50,
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
          <Menu
            visible={visible}
            onDismiss={_closeMenu}
            anchor={
              <Button 
              onPress={_openMenu}
              color={'red'}
              >Show menu</Button>
            }
          >
            <Menu.Item onPress={() => { }} title="Item 1" />
            <Menu.Item onPress={() => { }} title="Item 2" />
            <Divider />
            <Menu.Item onPress={() => { }} title="Item 3" />
          </Menu>
        </View>
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
