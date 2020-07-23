module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "^lodash-es$": "lodash"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react|react-native|rescueshelter|react-native-button)/)"
  ]
};