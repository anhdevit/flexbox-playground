import React, { Component } from 'react';
import {
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native';
import colors from '../../../common/theme/colors';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {
      navigation,
      imageRight,
    } = this.props;
    
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tab')}
      >
          <Image
            style={styles.image}
            resizeMode='contain'
            source={require('../../../resources/assets/common/ic_mode_edit.png')}
          />
      </TouchableOpacity>
    );
  }
}

export default Editor;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginRight: 10,
    tintColor: colors.onBackground
  }
})