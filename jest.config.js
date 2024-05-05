module.exports = {
  preset: 'react-native',
  collectCoverageFrom: ['src/**/{components,utils}/**/*.{js,jsx,ts,tsx}'],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.js'],
  moduleDirectories: ['node_modules', './src/test'],
};
