module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['react-hooks', '@typescript-eslint', 'import'],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'react/prop-types': 0,
        'import/no-extraneous-dependencies': [
            2,
            { devDependencies: ['**/*.test.{ts,tsx,js}']}
        ],
        'no-console': 1,
        'linebreak-style': 0,
        'no-trailing-spaces': 1,
        'no-magic-numbers': 0,
        'indent': [1, 4],
        'quotes': [1, 'single'],
        'object-curly-spacing': [1, 'always'],
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
