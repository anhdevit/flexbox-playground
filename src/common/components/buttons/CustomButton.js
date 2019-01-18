import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';

class CustomButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      onPress,
      imageRight,
      title,
      styleCustom
    } = this.props;
    return (
      <TouchableOpacity
        style={[styles.button, styleCustom]}
        onPress={onPress}
      >
        <Image
          source={imageRight}
        />
        <Text
          style={styles.text}
        >{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#6FCDBB',
    borderRadius: 3,
  },
  text: {
    color: 'white',
    alignSelf: 'center',
  },
})