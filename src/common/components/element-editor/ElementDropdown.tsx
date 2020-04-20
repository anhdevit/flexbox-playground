import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';
import DropdownButton from '../buttons/DropdownButton';
import TitleElement from '../texts/TitleElement';

export interface Props {
  title: string;
  value: string;
  option: Object;
  style: Object;
}

const ElementDropdown: React.FC<Props> = (props) => {
  const { title, value, option, style } = props;

  return (
    <View style={style}>
      <TitleElement title={title} />
      <DropdownButton
        title={value}
        option={option}
        styleCustom={{
          marginTop: 10
        }}
      />
    </View>
  );
}

export default ElementDropdown;

const styles = StyleSheet.create({
  text: {
    color: colors.onBackground,
    fontSize: 20,
    fontWeight: '500'
  }
});
