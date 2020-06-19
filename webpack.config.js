/* eslint-disable */
// eslint-disable @typescript-eslint/no-var-requires
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    entry: {
        index: './src/index.tsx',
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.[tj]sx?$/,
                enforce: 'pre',
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    emitWarning: true,
                    configFile: '.eslintrc.js'
                }
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@electron': path.resolve(__dirname, 'src/electron/'),
            '@i18n': path.resolve(__dirname, 'src/i18n/'),
            '@store': path.resolve(__dirname, 'src/store/'),
            '@test': path.resolve(__dirname, 'src/test/'),
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    mode: "development"
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devServer = {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 3000
        }
    }

    return config;
};
