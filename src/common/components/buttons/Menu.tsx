import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '@common/theme/colors';

export interface Props {
  navigation: any,
}

const Menu: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.openDrawer()}
    >
    </TouchableOpacity>
  );
}

export default Menu;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginLeft: 10,
    tintColor: colors.onBackground
  }
});
