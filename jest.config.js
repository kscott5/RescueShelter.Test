module.exports = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  setupFilesAfterEnv:  ["<rootDir>/setuptest.env.ts"],
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy",
    "\\.(png|svg|jpg|gif)$": "file-loader",
    "\\.(tsx|ts)$": "ts-loader"
  },
  transformIgnorePatterns: [
    "node_modules/(?!(react|react-native|rescueshelter|react-native-button)/)"
  ]
};