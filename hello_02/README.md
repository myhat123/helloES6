如果 ES2015 完全普及了，我们还需要 Babel 吗？

https://www.zhihu.com/question/264672005/answer/283906948

需要。因为 Babel 帮助开发者提前尝试使用尚未正式成为规范的 ES 特性，以便评估新特性的价值。ES 规范现在是每年更新，ES 2015 普及了，后面还有 2016、2017、2018、……。TC39 的 ES 规范推进流程会把新特性提案分为，其中 Stage-2 要求新特性有两个 demo 实现，其中一个就可以是包括 Babel 在内的转译器。只要有包括 Babel 在内的工具成功实（模）现（拟）了新特性，就可以视为满足 Stage-2 的要求。在后面的阶段要继续推进，就再等待浏览器等运行环境进行实验性的原生支持。

为什么会允许babel这种解析工具的存在？  
为什么不让ES6包含的这些被大多数前端开发人员广泛使用的语法允许浏览器直接解析，而是通过类似babel这种第三方的解析工具来解析成ES5的语法，这样不是让开发者增加了一些完全可以避免的步骤吗？

https://www.zhihu.com/question/315934143/answer/636898768

上述问题，主要是解答了Babel存在的意义。

什么是Babel?
===========

https://babel.docschina.org/docs/en/

Babel 是一个 JavaScript 编译器
Babel 是一个工具链，主要用于在旧的浏览器或环境中将 ECMAScript 2015+ 代码转换为向后兼容版本的 JavaScript 代码：

1. 转换语法
2. Polyfill 实现目标环境中缺少的功能 (通过 @babel/polyfill)
3. 源代码转换 (codemods)
4. 更多！（查看视频）

准备环境
=======

安装 nodejs v12.16.3 LTS 包含 npm

npm就是javascript的包管理工具

npm入门  
https://www.jianshu.com/p/4643a8e43b79

```
hzg@gofast:~$ node -v
v12.16.3
hzg@gofast:~$ npm -v
6.14.4
```

默认情况下。我们执行默认的安装命令安装的包都是安装到当前目录下的，只能在当前目录下使用。

配置npm源

```
hzg@gofast:~$ npm config list -l
; cli configs
long = true
metrics-registry = "https://registry.npmjs.org/"
scope = ""
user-agent = "npm/6.14.4 node/v12.16.3 linux x64"

; default values
access = null
allow-same-version = false
also = null
always-auth = false
```

临时使用, 安装包的时候通过--registry参数即可

> npm install express --registry https://registry.npm.taobao.org

全局使用

> npm config set registry https://registry.npm.taobao.org

配置后可通过下面方式来验证是否成功
  
> npm config get registry

Babel用法
========

https://babeljs.io/docs/en/usage

> npm install --save-dev @babel/core @babel/cli @babel/preset-env

```
hzg@gofast:~/work/helloES6/hello_02$ npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm WARN deprecated chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated fsevents@1.2.12: fsevents 1 will break on node v14+ and could be using insecure binaries. Upgrade to fsevents 2.
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN saveError ENOENT: no such file or directory, open '/home/hzg/work/helloES6/hello_02/package.json'
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN enoent ENOENT: no such file or directory, open '/home/hzg/work/helloES6/hello_02/package.json'
npm WARN hello_02 No description
npm WARN hello_02 No repository field.
npm WARN hello_02 No README data
npm WARN hello_02 No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.12 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.12: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ @babel/core@7.9.6
+ @babel/preset-env@7.9.6
+ @babel/cli@7.8.4
added 290 packages from 138 contributors in 14.191s

6 packages are looking for funding
  run `npm fund` for details
```

> npm install --save @babel/polyfill

```
hzg@gofast:~/work/helloES6/hello_02$ npm install --save @babel/polyfill
npm WARN deprecated core-js@2.6.11: core-js@<3 is no longer maintained and not recommended for usage due to the number of issues. Please, upgrade your dependencies to the actual version of core-js@3.

> core-js@2.6.11 postinstall /home/hzg/work/helloES6/hello_02/node_modules/core-js
> node -e "try{require('./postinstall')}catch(e){}"

Thank you for using core-js ( https://github.com/zloirock/core-js ) for polyfilling JavaScript standard library!

The project needs your help! Please consider supporting of core-js on Open Collective or Patreon: 
> https://opencollective.com/core-js 
> https://www.patreon.com/zloirock 

Also, the author of core-js ( https://github.com/zloirock ) is looking for a good job -)

npm WARN saveError ENOENT: no such file or directory, open '/home/hzg/work/helloES6/hello_02/package.json'
npm WARN enoent ENOENT: no such file or directory, open '/home/hzg/work/helloES6/hello_02/package.json'
npm WARN hello_02 No description
npm WARN hello_02 No repository field.
npm WARN hello_02 No README data
npm WARN hello_02 No license field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.12 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.12: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

+ @babel/polyfill@7.8.7
added 2 packages from 1 contributor in 8.17s

6 packages are looking for funding
  run `npm fund` for details
```

> npm info @babel/core

```
hzg@gofast:~$ npm info @babel/core

@babel/core@7.9.6 | MIT | deps: 16 | versions: 68
Babel compiler core.
https://babeljs.io/

dist
.tarball: https://registry.npm.taobao.org/@babel/core/download/@babel/core-7.9.6.tgz
.shasum: d9aa1f580abf3b2286ef40b6904d390904c63376

dependencies:
@babel/code-frame: ^7.8.3               convert-source-map: ^1.7.0              
@babel/generator: ^7.9.6                debug: ^4.1.0                           
@babel/helper-module-transforms: ^7.9.0 gensync: ^1.0.0-beta.1                  
@babel/helpers: ^7.9.6                  json5: ^2.1.2                           
@babel/parser: ^7.9.6                   lodash: ^4.17.13                        
@babel/template: ^7.8.6                 resolve: ^1.3.2                         
@babel/traverse: ^7.9.6                 semver: ^5.4.1                          
@babel/types: ^7.9.6                    source-map: ^0.5.0                      

maintainers:
- danez <daniel@tschinder.de>
- existentialism <bng412@gmail.com>
- hzoo <hi@henryzoo.com>
- loganfsmyth <loganfsmyth@gmail.com>
- nicolo-ribaudo <nicolo.ribaudo@gmail.com>

dist-tags:
bridge6: 6.0.0-bridge.1  latest: 7.9.6            

published 4 days ago by nicolo-ribaudo <nicolo.ribaudo@gmail.com>
```

创建 babel.config.json，在项目代码目录中

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1",
        },
        "useBuiltIns": "usage",
      }
    ]
  ]
}
```

> ./node_modules/.bin/babel src --out-dir lib

或

> npx babel src --out-dir lib

调整浏览器的版本，chrome: 38，babel编译之后，代码会变化。

```js
input.map(item => item + 1);
```

编译后

```js
"use strict";

input.map(function (item) {
  return item + 1;
});
```

@babel/preset-env useBuiltIns 说明  
https://www.cnblogs.com/amiezhang/p/11384309.html  
https://blog.hhking.cn/2019/04/02/babel-v7-update/