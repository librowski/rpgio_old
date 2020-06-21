module.exports = (api) => {
    const isTest = api.env('test');

    return {
        'presets': [
            [
                '@babel/preset-env',
                {
                    'useBuiltIns': 'usage',
                    'corejs': '3.6.5'
                }
            ],
            [
                '@babel/preset-typescript',
                {
                    'onlyRemoveTypeImports': !isTest
                }
            ],
            '@babel/preset-react'
        ],
        'plugins': [
            [
                '@babel/plugin-transform-runtime',
                {
                    'corejs': 3
                }
            ],
            [
                'babel-plugin-styled-components',
                {
                    'displayName': !isTest,
                    'ssr': !isTest
                }
            ],
            [
                'module-resolver',
                {
                    alias: {
                        '@assets': './src/assets',
                        '@components': './src/components',
                        '@store': './src/store',
                        '@test': './src/test',
                        '@electron': './src/electron',
                        '@player': './src/player',
                        '@i18n': './src/i18n',
                    },
                }
            ],
            'lodash'
        ]
    };
}
