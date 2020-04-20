import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../theme/colors';

export interface Props {
  title: string,
}

const TitleElement: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <View style={styles.view}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

export default TitleElement;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: colors.onBackground,
    fontSize: 15,
    fontWeight: '500'
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 5
  }
});
