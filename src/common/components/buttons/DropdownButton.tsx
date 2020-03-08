import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import colors from '../../theme/colors';
import styleCommon from '../../theme/styles';
import R from '@R/R';

export interface Props {
  option: any,
  onPress: () => {},
  title: string,
  styleCustom: Object
}

const DropdownButton: React.FC<Props> = (props) => {
  return (
    <ModalDropdown
      options={props.option}
      dropdownStyle={styles.styleDropdown}
      onPress={props.onPress}
    >
      <View
        style={[styles.button, props.styleCustom, styleCommon.heightElement]}
      >
        <Text style={styles.text}>{props.title}</Text>
        {<Image style={styles.image} source={R.images.ic_arrow_drop_down} />}
      </View>
    </ModalDropdown>
  );
}

export default DropdownButton;

const styles = StyleSheet.create({
  styleDropdown: {
    width: '90%'
  },
  button: {
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: colors.border,
    borderWidth: 1
  },
  text: {
    alignSelf: 'center',
    color: colors.surface
  },
  image: {
    tintColor: colors.surface
  }
});
