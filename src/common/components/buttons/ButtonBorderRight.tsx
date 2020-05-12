import colors from '@common/theme/colors';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export interface Props {
  onPress?: any,
  title: string;
}

const ButtonBorderRight: React.FC<Props> = (props) => {
  return (
    <Button
      style={styles.button}
      onPress={props.onPress}
    >{props.title}</Button>
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
