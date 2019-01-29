import React, { Component } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../common/theme/colors';

class Close extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;

    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../../resources/assets/common/ic_close.png')}
        />
      </TouchableOpacity>
    );
  }
}

export default Close;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    marginLeft: 10,
    tintColor: colors.onBackground
  }
});
