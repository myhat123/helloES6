学习webpack(1)
=============

https://www.webpackjs.com/guides/getting-started/

> npm init -y

生成 package.json

> npm install webpack webpack-cli --save-dev

```
hzg@gofast:~/work/helloES6/hello_05$ npm install webpack webpack-cli --save-dev
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated fsevents@1.2.12: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN hello_05@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.12 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.12: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ webpack@4.43.0
+ webpack-cli@3.3.11
added 388 packages from 217 contributors in 27.127s

3 packages are looking for funding
  run `npm fund` for details
```

安装完了之后，package.json里增加了

```json
"devDependencies": {
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.11"
}
```

在此示例中，<script> 标签之间存在隐式依赖关系。index.js 文件执行之前，还依赖于页面中引入的 lodash。之所以说是隐式的是因为 index.js 并未显式声明需要引入 lodash，只是假定推测已经存在一个全局变量 _。

使用这种方式去管理 JavaScript 项目会有一些问题：

无法立即体现，脚本的执行依赖于外部扩展库(external library)。  
如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行。  
如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码。  

让我们使用 webpack 来管理这些脚本。