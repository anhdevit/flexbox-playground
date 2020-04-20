import React from 'react';
import { StyleSheet, Text } from 'react-native';
import colors from '../../theme/colors';

export interface Props {
  title: string,
}

const HeaderTitle: React.FC<Props> = (props) => {
  const { title } = props;

  return <Text style={styles.text}>{title}</Text>;
}

export default HeaderTitle;

const styles = StyleSheet.create({
  text: {
    color: colors.onBackground,
    fontSize: 20,
    fontWeight: '500'
  }
});
