/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.spec.ts', '**/*.spec.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
}; 
