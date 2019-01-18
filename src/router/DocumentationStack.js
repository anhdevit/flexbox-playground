import React from 'react'
import { createStackNavigator } from 'react-navigation';
import Documentation from '../feature/Documentation';

const DocumentationStack = createStackNavigator(
    {
        Documentation: {
            screen: Documentation
        },
    }
);

export default DocumentationStack;