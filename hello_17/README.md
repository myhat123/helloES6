webpack，Babel，babel-loader的关系
================================

学习资料：  
https://www.cnblogs.com/whosMeya/p/12535654.html

https://babeljs.io/docs/en/babel-preset-react/

@babel/preset-react包含三个:  

1. @babel/plugin-syntax-jsx
2. @babel/plugin-transform-react-jsx
3. @babel/plugin-transform-react-display-name

@babel/preset-es2015 推荐使用 @babel/preset-env  

https://babeljs.io/docs/en/babel-preset-es2015
https://babeljs.io/docs/en/babel-preset-env

@babel/cli  Babel附带了一个内置的CLI，可用于从命令行编译文件。  
@babel/core  使用本地配置文件  
@babel/preset-env  编译最新版本JavaScript  
@babel/preset-react  编译react  
@babel/plugin-proposal-class-properties 编译 class
@babel/polyfill 通过 Polyfill 方式在目标环境中添加缺失的特性

初始化
-----
npm init --y

生成一个文件 package.json

配置 Babel
----------
npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/polyfill

新建文件 babel.config.json，参考hello_02

{
  "presets": [
    "@babel/preset-env"
  ],
  "plugins": []
}

./node_modules/.bin/babel src --out-dir lib

配置 React
---------
npm install --save-dev @babel/preset-react @babel/plugin-proposal-class-properties

babel.config.json 添加 React 相关配置

{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties"
  ]
}

npm install --save react react-dom

./node_modules/.bin/babel src --out-dir lib

配置 webpack
-----------
npm install --save-dev webpack webpack-cli

根目录新建文件 webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  }
};

在 package.json 的 scripts 中加入命令

"build": "webpack --mode development",

npm run build

webpack 不认识 react 语法，在 webpack.config.js 中加入 babel-loader

const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: []
};

babel-loader
------------
npm install --save-dev babel-loader

参考  
https://github.com/babel/babel-loader  
npm install -D babel-loader @babel/core @babel/preset-env webpack

module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}

我们来看 Babel 编译结果 lib/main.js 和 webpack 编译结果 dist/main.js，发现 Babel 仅仅是将 src/main.js 的react语法编译成了js语法，而 webpack 将 src/main.js 和引入的 node_modules 融合后用 Babel 编译。

浏览器不认识 require，webpack 实现了一套浏览器认识的 require。

Babel 是编译工具，把高版本语法编译成低版本语法，或者将文件按照自定义规则转换成js语法。

webpack 是打包工具，定义入口文件，将所有模块引入整理后，通过loader和plugin处理后，打包输出。

webpack 通过 babel-loader 使用 Babel 。