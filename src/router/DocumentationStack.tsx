import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Documentation from '../feature/Documentation';

const Stack = createStackNavigator();

function DocumentationStack() {
  return (
    <Stack.Navigator
      initialRouteName="Documentation"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Documentation"
        component={Documentation}
        options={{ title: 'Documentation' }}
      />
    </Stack.Navigator>
  );
}

export default DocumentationStack;
