/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppContainer from './src/router/AppContainer';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './src/reducers'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store, persistor } from './src/reducers/store';
import { PersistGate } from 'redux-persist/integration/react'

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any) => cb('en'),
  init: () => { },
  cacheUserLanguage: () => { },
};

i18next
  .use(languageDetector as any)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: {
        translation: require('./src/translations/en.json')
      },
      sv: {
        translation: require('./src/translations/vi.json'),
      },
    },
  });

const fontConfig = {
  default: {
    regular: {
      fontFamily: 'sans-serif',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'sans-serif-medium',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig as any),
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6bcebb',
  },
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={theme}>
          <AppContainer />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
