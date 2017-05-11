// webpack.config.js
var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: [
        './dev/entry.jsx',
        //'./dev/index.js'
        ], // 入口文件 可自定义

    devtool: 'source-map',　　// 调试时定位到编译前的代码位置，推荐安装react插件
    output: {
        path: path.resolve(__dirname, "./dist/js/"), //__dirname用于获取当前路径 ./dist/js可自定义
        filename: 'bundle.js' // 打包输出的文件 可自定义
        // filename: 'myapp.js'
    },
    module: {
        rules: [{
            test: /\.jsx?$/, // test 去判断是否为.js或.jsx,是的话就是进行es6和jsx的编译 可自定义
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            // loader: [{
            //     include: path.resolve(__dirname, "dev"),
            //     loader: "babel",
            // }],
            query: {
                presets: ['es2015', 'react']
            }
        }]
    },
    resolve: {
        // 现在你import文件的时候可以直接使用import Func from './file'，不用再使用import Func from './file.js'
        extensions: ['.js', '.jsx', '.json', '.coffee']
    }
};