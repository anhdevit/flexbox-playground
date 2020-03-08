import React from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';
import TitleElement from '../texts/TitleElement';
import ButtonBorderLeft from '../buttons/ButtonBorderLeft';
import ButtonBorderCenter from '../buttons/ButtonBorderCenter';
import ButtonBorderRight from '../buttons/ButtonBorderRight';

export interface Props {
  title: string,
  data: any,
  style: Object
}

const ElementChoose: React.FC<Props> = (props) => {
  const { title, data, style } = props;

  const RenderListButton = ({ data = [] }) => {
    return data.map((value, index) => {

      switch (index) {
        case 0:
          return <ButtonBorderLeft
            title={value}
            key={index}
            onPress={() => { }}
          />;
        case data.length - 1:
          return <ButtonBorderRight
            title={value}
            key={index}
            onPress={() => { }}
          />;
        default:
          return <ButtonBorderCenter
            title={value}
            key={index}
            onPress={() => { }}
          />;
      }
    });
  };

  return (
    <View style={style}>
      <TitleElement title={title} />
      <View style={styles.viewListButton}>
        <RenderListButton data={data} />
      </View>
    </View>
  );
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
    paddingVertical: 10
  }
});
