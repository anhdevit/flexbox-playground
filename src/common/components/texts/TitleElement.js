import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import colors from '../../../common/theme/colors';
import R from '@R/R';

class TitleElement extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title } = this.props;

    return (
      <View style={styles.view}>
        <Text style={styles.text}>{title}</Text>
        <TouchableOpacity>
          <Image style={styles.image} source={R.images.ic_info_outline} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default TitleElement;

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: colors.onBackground,
    fontSize: 15,
    fontWeight: '500'
  },
  image: {
    width: 20,
    height: 20,
    marginLeft: 5
  }
});
