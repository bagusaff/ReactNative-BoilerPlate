module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'formatjs',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        ast: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
          '.ios.tsx',
          '.android.tsx',
          '.ios.ts',
          '.android.ts',
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
        ],
        alias: {
          components: './src/components',
          styles: './src/styles',
          assets: './src/assets',
          screens: './src/screens',
          navigation: './src/navigation',
          stacks: './src/stacks',
          store: './src/store',
          utils: './src/utils',
          theme: './src/theme',
          types: './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin', // needs to be last
  ],
};
