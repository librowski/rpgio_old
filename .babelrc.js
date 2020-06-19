const { isTest } = require('./dev-utils/modeCheck');

module.exports = {
    presets: [
        [
            '@babel/env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/typescript',
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        [
            'babel-plugin-styled-components',
            {
                displayName: !isTest(),
                ssr: !isTest(),
            }
        ]
    ]
}
