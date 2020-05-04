学习webpack(2)
=============

https://www.webpackjs.com/guides/getting-started/

在安装一个要打包到生产环境的安装包时，你应该使用 npm install --save，如果你在安装一个用于开发环境的安装包（例如，linter, 测试库等），你应该使用 npm install --save-dev。请在 npm 文档 中查找更多信息。

> npm install --save lodash

在这个设置中，index.js 显式要求引入的 lodash 必须存在，然后将它绑定为 _（没有全局作用域污染）。通过声明模块所需的依赖，webpack 能够利用这些信息去构建依赖图，然后使用图生成一个优化过的，会以正确顺序执行的 bundle。

> npx webpack

```
hzg@gofast:~/work/helloES6/hello_06$ npx webpack
Hash: 9ffa3be4731cf0ef96d4
Version: webpack 4.43.0
Time: 1859ms
Built at: 2020-05-04 20:35:02
  Asset      Size  Chunks             Chunk Names
main.js  72.1 KiB       0  [emitted]  main
Entrypoint main = main.js
[1] ./src/index.js 263 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
```

执行 npx webpack，会将我们的脚本作为入口起点，然后 输出 为 main.js。

模块
====

ES2015 中的 import 和 export 语句已经被标准化。虽然大多数浏览器还无法支持它们，但是 webpack 却能够提供开箱即用般的支持。

事实上，webpack 在幕后会将代码“转译”，以便旧版本浏览器可以执行。如果你检查 dist/bundle.js，你可以看到 webpack 具体如何实现，这是独创精巧的设计！除了 import 和 export，webpack 还能够很好地支持多种其他模块语法，更多信息请查看模块 API。

注意，webpack 不会更改代码中除 import 和 export 语句以外的部分。如果你在使用其它 ES2015 特性，请确保你在 webpack 的 loader 系统中使用了一个像是 Babel 或 Bublé 的转译器。

配置文件
=======

在 webpack 4 中，可以无须任何配置使用，然而大多数项目会需要很复杂的设置，这就是为什么 webpack 仍然要支持 配置文件。这比在终端(terminal)中手动输入大量命令要高效的多。

webpack.config.js

```js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

如果 webpack.config.js 存在，则 webpack 命令将默认选择使用它。

> npx webpack --config webpack.config.js

```
hzg@gofast:~/work/helloES6/hello_06$ npx webpack --config webpack.config.js
Hash: e4ca1a09ba5f6979b167
Version: webpack 4.43.0
Time: 281ms
Built at: 2020-05-04 20:52:16
    Asset      Size  Chunks             Chunk Names
bundle.js  72.1 KiB       0  [emitted]  main
Entrypoint main = bundle.js
[1] ./src/index.js 263 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module
```

比起 CLI 这种简单直接的使用方式，配置文件具有更多的灵活性。我们可以通过配置方式指定 loader 规则(loader rules)、插件(plugins)、解析选项(resolve options)，以及许多其他增强功能。了解更多详细信息，请查看配置文档。

NPM 脚本(NPM Scripts)
====================

package.json里增加

"build": "webpack"

> npm run build