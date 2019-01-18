import React from 'react'
import { createStackNavigator } from 'react-navigation';
import Playground from '../feature/Playground';
import Tab from '../feature/Tab';

const PlaygroundStack = createStackNavigator(
    {
        Playground: {
            screen: Playground
        },
        Tab: {
            screen: Tab
        }
    }, {
        mode: 'modal',
    }
);

export default PlaygroundStack;