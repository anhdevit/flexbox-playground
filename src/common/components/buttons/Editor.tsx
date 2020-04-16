import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';

export interface Props {
  navigation: any,
}

const Editor: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.navigate('Tab')}
    >
      <Image
        style={styles.image}
        resizeMode="contain"
        source={R.images.ic_mode_edit}
      />
    </TouchableOpacity>
  );
}

export default Editor;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginRight: 10,
    tintColor: colors.onBackground
  }
});
