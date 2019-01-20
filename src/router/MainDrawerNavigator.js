import React, { Component } from 'react';
import {
    Image
} from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Documentation from '../feature/Documentation';
import PlaygroundStack from './PlaygroundStack'
import DocumentationStack from './DocumentationStack';
import colors from '../common/theme/colors';

const MainDrawerNavigator = createDrawerNavigator(
    {
        Playground: {
            screen: PlaygroundStack,
            navigationOptions: {
                drawerIcon: ({ tintColor, focused }) =>
                    <Image
                        source={require('../resources/assets/common/ic_view_quilt.png')}
                        style={{ tintColor: tintColor }}
                    />
            }
        },
        Documentation: {
            screen: DocumentationStack,
            navigationOptions: {
                drawerIcon: ({ tintColor, focused }) =>
                    <Image
                        source={require('../resources/assets/common/ic_format_align_left.png')}
                        style={{ tintColor: tintColor }}
                    />
            }
        },
    },
    {
        contentOptions: {
            activeTintColor: colors.primary,
            inactiveTintColor: colors.onBackground,
        }
    }
)

export default MainDrawerNavigator;