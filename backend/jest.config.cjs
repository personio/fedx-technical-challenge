/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  resolver: 'ts-jest-resolver',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./src/testSetup/testSetup.ts'],
  collectCoverage: true,
  coverageReporters: ['html', 'text', 'json'],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    'src/testSetup',
    'src/v1/queries/findReleaseByFrontendPublic',
    'src/v1/queries',
  ],
  passWithNoTests: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
