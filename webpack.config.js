const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require("copy-webpack-plugin")
// const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const Dotenv = require('dotenv-webpack')

module.exports = {
    mode: "development", 
    entry: "./src/index.tsx",
    output: {
        filename: "[name].[hash:4].js", 
        path: path.resolve( __dirname,"build" ),
        // down code string for correct work with React-Router
        publicPath: '/'
    },
    devServer: {
        port: 8000,
        // down code string for correct work with React-Router
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({ 
            template : 'src/index.html',
            favicon: "src/assets/favicon.png"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:4].css', 
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "./static" },
            ],
        }),
        new Dotenv(),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader','sass-loader' ]
            },
            {
                test: /\.tsx?$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {loader: "babel-loader",
                    options: {
                        presets:["@babel/preset-env","@babel/preset-react"]
                    }
                }
            },    
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                type: 'asset/resource',
            }
        ]
    }
}
// new FaviconsWebpackPlugin('src/assets/favicon.png')
