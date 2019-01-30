import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import colors from '../../../common/theme/colors';
import styleCommon from '../../../common/theme/styles';
import R from '@R/R';

class DropdownButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onPress, title, option, styleCustom } = this.props;

    return (
      <ModalDropdown
        options={option}
        dropdownStyle={styles.styleDropdown}
        dropdownTextStyle={styles.textStyleDropDown}
        onPress={onPress}
      >
        <View
          style={[styles.button, styleCustom, styleCommon.heightElement]}
          onPress={onPress}
        >
          <Text style={styles.text}>{title}</Text>
          {<Image style={styles.image} source={R.images.ic_arrow_drop_down} />}
        </View>
      </ModalDropdown>
    );
  }
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
