import React from 'react';
import {
  createAppContainer,
  createMaterialTopTabNavigator
} from 'react-navigation';
import Flex from '../feature/Tab/Editor/Flex';
import Layout from '../feature/Tab/Editor/Layout';
import Alignment from '../feature/Tab/Editor/Alignment';
import colors, { hexToRGB } from '../common/theme/colors';

const EditorTabbarTabbar = createMaterialTopTabNavigator(
  {
    Flex: Flex,
    Alignment: Alignment,
    Layout: Layout
  },
  {
    initialRouteName: 'Flex',
    tabBarOptions: {
      upperCaseLabel: false,
      activeTintColor: colors.primary,
      inactiveTintColor: colors.onBackground,
      labelStyle: {
        fontSize: 14,
        fontWeight: '500'
      },
      style: {
        backgroundColor: colors.background
      },
      indicatorStyle: {
        backgroundColor: colors.primary,
        height: 3
      }
    }
  }
);

export default createAppContainer(EditorTabbarTabbar);
