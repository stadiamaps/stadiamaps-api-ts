module.exports = {
  preset: 'ts-jest',

  roots: ['__tests__'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '__tests__/utils.ts'],
};
