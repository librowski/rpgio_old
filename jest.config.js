module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
    setupFilesAfterEnv: ['./src/test/jest-setup.ts'],
    roots: ['/src/'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/', '/build/'],
};
