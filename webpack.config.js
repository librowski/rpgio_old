const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const config = {
    entry: path.resolve('src', 'index.tsx'),
    devtool: 'inline-source-map',
    plugins: [
        new ESLintPlugin({
            extensions: ['ts', 'tsx'],
        }),
        new HtmlWebpackPlugin({
            template: 'src/assets/index.html'
        }),
        new ForkTsCheckerWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: ['lodash'],
                        }
                    },
                ]
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf)$/i,
                use: ['file-loader']
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader: 'source-map-loader'
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
            '@player': path.resolve(__dirname, 'src/player/'),
        },
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },
    mode: 'development'
};

module.exports = (env, argv) => {

    if (argv.mode === 'development') {
        config.devServer = {
            contentBase: path.join(__dirname, 'dist'),
            hot: true,
            injectHot: true,
            port: 3000
        }
    }

    return config;
};
