import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import colors from '../../../common/theme/colors';

class ImageButton extends Component {
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
      styleCustom,
      disable
    } = this.props;
    let styleButtonDisable = {};
    let styleTextDisable = {};
    let styleImageDisable = {};

    if (disable) {
      styleButtonDisable = {
        backgroundColor: colors.disable,
        borderColor: colors.border,
        borderWidth: 1,
      };
      styleImageDisable = {
        tintColor: colors.border
      };

      styleTextDisable = {
        color: colors.border
      }
    }
    
    return (
      <TouchableOpacity
        style={[styles.button, styleCustom, styleButtonDisable]}
        onPress={onPress}
      >
        {
          imageRight && <Image
            style={[styles.image, styleImageDisable]}
            source={imageRight}
          />
        }
        <Text
          style={[styles.text, styleTextDisable]}
        >{title}</Text>
      </TouchableOpacity>
    );
  }
}

export default ImageButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    alignSelf: 'center',
  },
  image: {
    marginRight: 10,
    tintColor: colors.background
  }
})