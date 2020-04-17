import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import Playground from '../feature/Playground';
import colors from '@common/theme/colors';

const Stack = createStackNavigator();

function PlaygroundStack() {
  return (
    <Stack.Navigator
      initialRouteName="Playground"
      screenOptions={({ navigation, route }) => ({
        headerTitleAlign: 'center',
        headerStyle: styles.headerStyle,
      })}
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

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: colors.primary
  },
});


export default PlaygroundStack;
