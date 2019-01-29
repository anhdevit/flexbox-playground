/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import MainDrawerNavigator from './MainDrawerNavigator';

export default (AppContainer = createAppContainer(MainDrawerNavigator));
