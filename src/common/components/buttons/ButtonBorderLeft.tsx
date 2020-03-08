import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../theme/colors';
import styleCommon from '../../theme/styles';

export interface Props {
  onPress: () => {},
  title: string;
}

const ButtonBorderLeft: React.FC<Props> = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button, styleCommon.heightElement]}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonBorderLeft;

const styles = StyleSheet.create({
  button: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
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
