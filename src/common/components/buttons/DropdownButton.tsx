import colors from '@common/theme/colors';
import stylesCommon from '@common/theme/styles';
import ModalDropdown from 'libs/react-native-modal-dropdown';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export interface Props {
  option: any,
  onPress?: any,
  title: string,
  styleCustom?: Object
}

const DropdownButton: React.FC<Props> = (props) => {
  return (
    <ModalDropdown
      options={props.option}
      dropdownStyle={styles.styleDropdown}
    >
      <View
        style={[styles.button, props.styleCustom, stylesCommon.heightElement]}
      >
        <Text style={styles.text}>{props.title}</Text>
        {/* {<Image style={styles.image} source={R.images.ic_arrow_drop_down} />} */}
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
