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

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
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

function App() {
  return (
    <AppContainer />
  );
};

export default App;
