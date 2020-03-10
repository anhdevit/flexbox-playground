import React from 'react';
import PlaygroundStack from './PlaygroundStack';
import DocumentationStack from './DocumentationStack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function MainDrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName="PlaygroundStack">
        <Drawer.Screen name="PlaygroundStack" component={PlaygroundStack} />
        <Drawer.Screen name="DocumentationStack" component={DocumentationStack} />
      </Drawer.Navigator>
  );
}