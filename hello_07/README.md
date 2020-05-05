
jsx入门
========

https://react.docschina.org/docs/introducing-jsx.html

> npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/plugin-transform-react-jsx

> npm install --save @babel/polyfill

> npm info @babel/core

创建 babel.config.json，在项目代码目录中

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "chrome": "80",
        },
        "useBuiltIns": "usage",
        "corejs": 2,
      }
    ]
  ]
}
```

> ./node_modules/.bin/babel src --out-dir lib

或

> npx babel src --out-dir lib

把test.js中jsx语句，由babel编译之后放入lib中

了解了jsx之后，再回头看hello_03的代码

index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
```

从js文件import，不用加".js"后缀
从css文件import，带路径和".css"后缀

App.js

```js
import React from 'react';
import logo from './logo.svg';
import './App.css';
```

注意从logo.svg导入的logo

```js
export default App;
```

引入 css, svg 文件，这些并不是 ES6 的内容，是由 webpack 来提供的插件处理。  
详情见: https://create-react-app.dev/docs/getting-started/