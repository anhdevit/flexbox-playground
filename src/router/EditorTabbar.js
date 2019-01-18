import React from 'react'
import { createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import Flex from '../feature/Tab/Editor/Flex';
import Layout from '../feature/Tab/Editor/Layout';
import Alignment from '../feature/Tab/Editor/Alignment';

const EditorTabbarTabbar = createMaterialTopTabNavigator(
    {
        Flex: {
            screen: Flex
        },
        Alignment: {
            screen: Alignment
        },
        Layout: {
            screen: Layout
        },
    },
    {
        initialRouteName: 'Flex',
    }
);

export default createAppContainer(EditorTabbarTabbar);