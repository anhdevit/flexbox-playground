import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';

export interface Props {
  navigation: any,
}

const Close: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => props.navigation.goBack()}
    >
    </TouchableOpacity>
  );
}

export default Close;

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
