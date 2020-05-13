import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Field, reduxForm } from 'redux-form';
import colors from '../../theme/colors';
import styleCommon from '../../theme/styles';
import TitleElement from '../texts/TitleElement';

export interface Props {
  navigation?: any,
  title: string,
  nameField1: string,
  nameField2: string,
  style: any,
}

const ElementDoubleInput: React.FC<Props> = (props) => {
  const {
    title,
    nameField1,
    nameField2,
    style
  } = props;

  return (
    <View style={style}>
      <TitleElement title={title} />
      <View style={styles.viewInput}>
        <Field
          name={nameField1}
          component={({ input }) =>
            (<TextInput
              value={input.value}
              style={[styles.textInput, styleCommon.heightElement]}
              onChangeText={(text) => input.onChange(text)}
            />)}
        />
        <Field
          name={nameField1}
          component={({ input }) => (
            <TextInput
              value={input.value}
              style={[styles.textInput, styleCommon.heightElement]}
              onChangeText={(text) => input.onChange(text)}
            />
          )}
        />
      </View>
    </View>
  );
}

const ElementDoubleInputForm = reduxForm({
  form: 'signinForm',
  validate: (values) => { },
  destroyOnUnmount: true
})(ElementDoubleInput)

export default ElementDoubleInputForm

const styles = StyleSheet.create({
  text: {
    color: colors.onBackground,
    fontSize: 20,
    fontWeight: '500'
  },
  viewInput: {
    flexDirection: 'row'
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 5,
    height: 30,
    paddingLeft: 10,
    marginTop: 10,
    flex: 1
  }
});
