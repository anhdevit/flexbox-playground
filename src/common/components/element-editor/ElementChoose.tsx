import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../theme/colors';
import ButtonBorderCenter from '../buttons/ButtonBorderCenter';
import ButtonBorderLeft from '../buttons/ButtonBorderLeft';
import ButtonBorderRight from '../buttons/ButtonBorderRight';
import TitleElement from '../texts/TitleElement';

export interface Props {
  title: string,
  data: any,
  style: Object
}

const ElementChoose: React.FC<Props> = (props) => {
  const { title, data, style } = props;

  const RenderListButton = () => {
    return data.map((value: string, index: number) => {

      switch (index) {
        case 0:
          return <ButtonBorderLeft
            title={value}
            key={index}
          />;
        case data.length - 1:
          return <ButtonBorderRight
            title={value}
            key={index}
          />;
        default:
          return <ButtonBorderCenter
            title={value}
            key={index}
          />;
      }
    });
  };

  return (
    <View style={style}>
      <TitleElement title={title} />
      <View style={styles.viewListButton}>
        <RenderListButton />
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
