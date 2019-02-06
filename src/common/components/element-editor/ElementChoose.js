import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../../common/theme/colors';
import ButtonBorder from '../buttons/ButtonBorder';
import TitleElement from '../texts/TitleElement';

const RenderListButton = ({ data = [] }) => {
  return data.map((value, index) => {
    switch (index) {
      case 0:
        return (
          <ButtonBorder
            title={value}
            key={index}
            styleCustom={styles.buttonLeft}
          />
        );
      case data.length - 1:
        return (
          <ButtonBorder
            title={value}
            key={index}
            styleCustom={styles.buttonRight}
          />
        );
      default:
        return (
          <ButtonBorder
            title={value}
            key={index}
            styleCustom={styles.buttonCenter}
          />
        );
    }
  });
};

class ElementChoose extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, data, style } = this.props;

    return (
      <View style={style}>
        <TitleElement title={title} />
        <View style={styles.viewListButton}>
          <RenderListButton data={data} />
        </View>
      </View>
    );
  }
}

export default ElementChoose;

const styles = StyleSheet.create({
  text: {
    color: colors.onBackground,
    fontSize: 20,
    fontWeight: '500'
  },
  viewListButton: {
    flexDirection: 'row',
    paddingVertical: 10,
    flex: 1
  },

  buttonCenter: {
    paddingVertical: 5
  },
  buttonLeft: {
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    marginRight: -0.5
  },
  buttonRight: {
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    marginLeft: -0.5
  }
});
