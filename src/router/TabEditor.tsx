import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import Alignment from '@feature/SideBar/Alignment';
import Layout from '@feature/SideBar/Layout';
import Flex from '@feature/SideBar/Flex';
import colors from '@common/theme/colors';

const Tab = createMaterialTopTabNavigator();

export default function TabEditor() {
  return (
      <Tab.Navigator
        lazy={true}
        style={{
          backgroundColor: 'white'
        }}
        tabBarOptions={{
          activeTintColor: colors.primary,
          indicatorStyle: {
            backgroundColor: colors.primary
          },
          inactiveTintColor: '#242424',
          style: {
            backgroundColor: '#F2F2F2'
          },
        }}
        backBehavior='none'
      >
        <Tab.Screen
          name="Giới thiệu"
          component={Flex}
        />
        <Tab.Screen name="Tiện ích" component={Alignment} />
        <Tab.Screen name="Thiết kế" component={Layout} />
      </Tab.Navigator>
  );
}
