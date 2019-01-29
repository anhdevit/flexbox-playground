import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../common/theme/colors';

class Menu extends Component {
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
        onPress={() => navigation.openDrawer()}
      >
          <Image
            style={styles.image}
            resizeMode='contain'
            source={require('../../../resources/assets/common/ic_menu.png')}
          />
      </TouchableOpacity>
    );
  }
}

export default Menu;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginLeft: 10,
    tintColor: colors.onBackground
  }
})