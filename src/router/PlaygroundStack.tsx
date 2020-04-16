import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { IconButton } from 'react-native-paper';
import Playground from '../feature/Playground';

const Stack = createStackNavigator();

function PlaygroundStack() {
  return (
    <Stack.Navigator
      initialRouteName="Playground"
      screenOptions={{
        gestureEnabled: false,
      }}
    >
      <Stack.Screen
        name="Playground"
        component={Playground}
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

export default PlaygroundStack;
