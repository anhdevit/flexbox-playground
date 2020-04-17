module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
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
        alias: {
          "test/*": ["./test/"],
          '@common': './src/common',
          '@router': './src/router',
          '@feature': './src/feature',
        }
      }
    ]
  ]
};
