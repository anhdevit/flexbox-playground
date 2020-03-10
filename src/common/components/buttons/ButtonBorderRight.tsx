import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';

export interface Props {
  onPress?: any,
  title: string;
}

const ButtonBorderRight: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonBorderRight;

const styles = StyleSheet.create({
  button: {
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border,
    flex: 1
  },
  text: {
    color: colors.onBackground,
    alignSelf: 'center'
  }
});
