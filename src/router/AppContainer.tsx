/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import MainDrawerNavigator from './MainDrawerNavigator';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

function App() {
    return (
      <NavigationContainer>
        <MainDrawerNavigator />
      </NavigationContainer>
    );
  }
  
  export default App;