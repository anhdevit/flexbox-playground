import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '@common/theme/colors';

export interface Props {
  onPress?: any,
  title: string;
}

const ButtonBorder: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonBorder;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border,
    flex: 1,
    paddingVertical: 5
  },
  text: {
    color: colors.onBackground,
    alignSelf: 'center'
  }
});
