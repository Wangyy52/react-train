const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:
        {
            path: path.join(__dirname, '/dist'),
            filename: 'bundle.js'

        },
    plugins: [
        // eslint-disable-next-line new-cap
        new htmlWebpackPlugin({
            template: path.join(__dirname, './public/index.html'),// 指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
            filename: 'index.html'// 指定生成的页面的名称
        })
    ],
    mode: 'production',
    module: {
        // eslint-disable-next-line no-sparse-arrays
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.lss$/,
                use: ['style-loader', 'lss-loader']
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {test: /\.js$/,
                exclude:/node_modules/,
                enforce:"pre", use: ['babel-loader' ,'eslint-loader']
            }
        ]
    },
    devServer:{
        historyApiFallback:true,
        hot:true,
        inline:true,
        progress:true,
    }

}