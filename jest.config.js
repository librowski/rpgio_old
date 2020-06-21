module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    setupFilesAfterEnv: ['./src/test/jest-setup.ts', 'jest-enzyme'],
    roots: ['src'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
    moduleNameMapper: {
        // eslint-disable-next-line max-len
        '@(components|electron|assets|test|store|i18n|player)(.*)$': '<rootDir>/src/$1/$2',
        // eslint-disable-next-line max-len
        '\\.(css|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/test/__mocks__/filesMock.ts',
    },
    testEnvironment: 'enzyme',
    testEnvironmentOptions: {
        enzymeAdapter: 'react16'
    }
};
