参考资料

https://react.docschina.org/docs/create-a-new-react-app.html#create-react-app

> npx create-react-app hello_03

> npm start

Create React App 不会处理后端逻辑或操纵数据库；它只是创建一个前端构建流水线（build pipeline），所以你可以使用它来配合任何你想使用的后端。它在内部使用 Babel 和 webpack，但你无需了解它们的任何细节。

当你准备好部署到生产环境时，执行 npm run build 会在 build 文件夹内生成你应用的优化版本。你能从它的 README 和用户指南了解 Create React App 的更多信息。

> npm run build

```
hzg@gofast:~/work/helloES6/hello_03$ npm run build

> hello_03@0.1.0 build /home/hzg/work/helloES6/hello_03
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  39.39 KB  build/static/js/2.8c5d75be.chunk.js
  774 B     build/static/js/runtime-main.59485da1.js
  645 B     build/static/js/main.508baf73.chunk.js
  557 B     build/static/css/main.520675f0.chunk.css

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  bit.ly/CRA-deploy
```

> python -m http.server

在build目录下，一样访问 http://localhost:8000