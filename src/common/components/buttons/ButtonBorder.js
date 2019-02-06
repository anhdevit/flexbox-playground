import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight } from 'react-native';
import colors from '../../../common/theme/colors';
import styleCommon from '../../../common/theme/styles';

class ButtonBorder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onPress, title, styleCustom } = this.props;
    return (
      <TouchableHighlight
        style={[styles.button, styleCommon.heightElement, styleCustom]}
        onPress={() => {
          console.log('abc');
        }}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableHighlight>
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
    flex: 1
  },
  text: {
    color: colors.onBackground,
    alignSelf: 'center'
  }
});
