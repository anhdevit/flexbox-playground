import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../theme/colors';
import styleCommon from '../../theme/styles';
import { TextInput } from 'react-native-paper'

export interface Props {
  title: string,
  defaultValueLeft: any,
  defaultValueTop: any,
  defaultValueRight: any,
  defaultValueBottom: any,
  style: Object,
}

const ElementFourInput: React.FC<Props> = (props) => {

  const {
    title,
    defaultValueLeft,
    defaultValueTop,
    defaultValueRight,
    defaultValueBottom,
    style
  } = props;

  return (
    <View style={[styles.viewElement, style]}>
      <TextInput
        defaultValue={defaultValueTop}
        style={[styles.textInput, styleCommon.heightElement]}
      />
      <View style={styles.viewInput}>
        <TextInput
          defaultValue={defaultValueLeft}
          style={[styles.textInput, styleCommon.heightElement]}
        />
        <Text style={styles.textCenter}>{title}</Text>
        <TextInput
          defaultValue={defaultValueRight}
          style={[styles.textInput, styleCommon.heightElement]}
        />
      </View>
      <TextInput
        defaultValue={defaultValueBottom}
        style={[styles.textInput, styleCommon.heightElement]}
      />
    </View>
  );
}

export default ElementFourInput;

const styles = StyleSheet.create({
  viewElement: {
    alignItems: 'center'
  },
  text: {
    color: colors.onBackground,
    fontSize: 20,
    fontWeight: '500'
  },
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textCenter: {
    marginHorizontal: 20
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    height: 30,
    paddingLeft: 10,
    width: 70
  }
});
