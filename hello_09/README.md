react组件
========

https://react.docschina.org/docs/components-and-props.html

> npm start

函数组件
=======

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

class 组件
==========

```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

组件名称必须以大写字母开头  
把这两个js，放到Welcome.js模块中，index.js可以保持不变。  
所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。  

逐步推进每个代码，演变成index.js => App.js => Welcome.js