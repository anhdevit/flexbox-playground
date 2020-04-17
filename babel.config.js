module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          "test/*": ["./test/"],
          '@common': './src/common',
          '@feature': './src/feature',
          '@router': './src/router',
        },
        extensions: [
          '.ios.js', 
          '.android.js', 
          '.js', 
          '.ts', 
          '.tsx', 
          '.json',
          '.ios.ts',
          '.android.ts',
          '.ios.tsx',
          '.android.tsx',
          '.jsx',
        ],
      }
    ]
  ]
};
