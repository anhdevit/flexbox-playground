import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';
import styleCommon from '../../theme/styles';
import TitleElement from '../texts/TitleElement';
import { TextInput } from 'react-native-paper'

export interface Props {
  title: string,
  defaultValue: any,
  style: Object,
}

const ElementInput: React.FC<Props> = (props) => {

  const { title, defaultValue, style } = props;

  return (
    <View style={style}>
      <TitleElement title={title} />
      <TextInput
        defaultValue={defaultValue}
        style={[styles.textInput, styleCommon.heightElement]}
      />
    </View>
  );
}

export default ElementInput;

const styles = StyleSheet.create({
  text: {
    color: colors.onBackground,
    fontSize: 20,
    fontWeight: '500'
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
    height: 30,
    paddingLeft: 10,
    marginTop: 10
  }
});
