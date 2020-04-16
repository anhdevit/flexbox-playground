import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Documentation from '../feature/Documentation';
import { IconButton } from 'react-native-paper';

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
        options={({ navigation, route }) => ({
          headerLeft: () => <IconButton 
          icon="menu" 
          onPress={() => navigation.toggleDrawer()}
          />,
        })}
      />
    </Stack.Navigator>
  );
}

export default DocumentationStack;
