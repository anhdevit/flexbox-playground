module.exports = {
    preset: 'react-native',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    "setupFiles": [
        "./node_modules/react-native-gesture-handler/jestSetup.js"
      ],
      "transformIgnorePatterns": [
        "node_modules/(?!(jest-)?react-native|react-navigation|react-navigation-redux-helpers|@react-navigation/.*)"
      ],
      "moduleFileExtensions": [
        "ts",
        "tsx",
        "js"
      ],
      "transform": {
        "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
        "\\.(ts|tsx)$": "<rootDir>/node_modules/ts-jest/preprocessor.js"
      },
      "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
      "testPathIgnorePatterns": [
        "\\.snap$",
        "<rootDir>/node_modules/"
      ],
      "cacheDirectory": ".jest/cache"
};