module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: [
        'react-hooks',
        '@typescript-eslint',
        'import'
    ],
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended'
    ],
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        ecmaFeatures: {
            jsx: true
        }
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
        'react-hooks/rules-of-hooks': 2,
        'react-hooks/exhaustive-deps': 1,
        'react/prop-types': 0,
        'import/no-extraneous-dependencies': [
            2,
            {
                devDependencies: [
                    '**/*.test.{ts,tsx,js}',
                    './src/test/*.ts',
                    './src/electron/*.js'
                ]
            }
        ],
        'no-console': 1,
        'linebreak-style': 0,
        'no-trailing-spaces': 1,
        'no-magic-numbers': 0,
        'indent': [
            1,
            4
        ],
        'quotes': [
            1,
            'single'
        ],
        'object-curly-spacing': [
            1,
            'always'
        ],
        'curly': 1,
        'max-len': 1,
        'react/jsx-curly-spacing': [
            'warn',
            {
                'when': 'always',
                'attributes': {
                    'when': 'never'
                },
                'children': {
                    'when': 'always'
                }
            }
        ],
        'react/jsx-tag-spacing': 'warn',
        '@typescript-eslint/consistent-type-definitions': [
            'warn',
            'type'
        ],
        'import/no-relative-parent-imports': 'warn'
    },
    settings: {
        react: {
            version: 'detect'
        }
    }
};
