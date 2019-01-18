/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import AppContainer from './src/router/AppContainer';

export default class App extends Component {
  handleNavigationChange = (prevState, newState, action) => {
    console.log('Handle Navigation Change: prevState ----', prevState);
    console.log('Handle Navigation Change: newState ----', newState);
    console.log('Handle Navigation Change: action ----', action);
  }
  render() {
    return (
      <AppContainer 
        // onNavigationStateChange={this.handleNavigationChange}
        // uriPrefix="/app"
      />
    );
  }
}