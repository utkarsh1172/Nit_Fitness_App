module.exports = {
  plugins: [
    [
        'react-native-reanimated/plugin',
        {
            globals: ['__scanPoseLandmarks'],
        },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
