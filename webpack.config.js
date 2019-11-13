const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: 
        {
            path: path.join(__dirname, 'dist'),
            filename:'bundle.js'

        },
        plugins:[
            new htmlWebpackPlugin({
                template: path.join(__dirname, './22.React-flex布局-打包.html'),//指定模板页面，将来会根据指定的页面路径，去生成内存中的页面
                filename: 'index.html'//指定生成的页面的名称
            })
        ],
        mode:'development',
        module: {
            rules: [
              {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
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
              { test: /\.js$/, use: 'babel-loader'} 
            ]
          }
   
}