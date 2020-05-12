import colors from '@common/theme/colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export interface Props {
  onPress?: any,
  title: string;
}

const ButtonBorderLeft: React.FC<Props> = (props) => {
  return (
    <Button
      style={styles.button}
      onPress={props.onPress}
    >{props.title}</Button>
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
