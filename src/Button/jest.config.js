module.export = {
    roots: ['<rootDir>/src'],
    transform: {
      '\\.(js|jsx)?$': 'babel-jest',
    },
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
    },
    jest: {
        "moduleNameMapper": {
          "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
        }
    },
    testMatch: ['<rootDir>/src/**/>(*.)test.{js, jsx}'], // finds test
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    testPathIgnorePatterns: ['/node_modules/', '/public/'],
    setupFilesAfterEnv: [
      '@testing-library/jest-dom/extend-expect', 
      '@testing-library/react/cleanup-after-each'
    ] // setupFiles before the tests are ran
  };