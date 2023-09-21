module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins:[
    [
      "module-resolver",
      {
          "root": ["./src"],
          "extensions":[
              ".js",
              ".ts",
              ".jsx",
              ".tsx",
              ".ios.tsx",
              ".android.tsx",
              ".ios.ts",
              ".android.ts",
              ".ios.js",
              ".android.js",
              ".ios.jsx",
              ".android.jsx"
          ],
          "alias":{
              "components":"./src/components",
              "styles":"./src/styles",
              "assets":"./src/assets",
              "screens":"./src/screens",
              "navigation":"./src/navigation",
              "stacks":"./src/stacks",
              "store":"./src/store",
              "utils":"./src/utils",
              "theme":"./src/theme",
              "types":"./src/types",
          }
      }
  ],
  'react-native-reanimated/plugin', // needs to be last

  ]
};
