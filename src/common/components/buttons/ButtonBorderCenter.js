import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../../../common/theme/colors';

class ButtonBorder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onPress, title } = this.props;
    return (
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default ButtonBorder;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.border,
    flex: 1,
    paddingVertical: 5
  },
  text: {
    color: colors.onBackground,
    alignSelf: 'center'
  }
});
