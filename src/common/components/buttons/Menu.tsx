import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import R from '@R/R';

export interface Props {
  navigation: any,
}

const Menu: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.openDrawer()}
    >
      <Image
        style={styles.image}
        resizeMode="contain"
        source={R.images.ic_menu}
      />
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
