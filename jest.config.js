module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.(png|svg|jpg|gif)$": "file-loader"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react|react-native|rescueshelter|react-native-button)/)"
  ]
};