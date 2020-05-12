import colors from '@common/theme/colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export interface Props {
  onPress?: any,
  title: string;
}

const ButtonBorder: React.FC<Props> = (props) => {
  return (
    <Button
      style={styles.button}
      onPress={props.onPress}
    >{props.title}</Button>
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
