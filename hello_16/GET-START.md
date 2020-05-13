参考资料:

https://react.docschina.org/docs/hooks-state.html  
http://www.ruanyifeng.com/blog/2019/09/react-hooks.html

React 团队希望，组件不要变成复杂的容器，最好只是数据流的管道。开发者根据需要，组合管道即可。 组件的最佳写法应该是函数，而不是类。

React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进来。

React 约定，钩子一律使用use前缀命名，便于识别。你要使用 xxx 功能，钩子就命名为 usexxx。  
默认提供的四个最常用的钩子:  
1. useState()
2. useContext()
3. useReducer()
4. useEffect()

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

上面是useReducer()的基本用法，它接受 Reducer 函数和状态的初始值作为参数，返回一个数组。数组的第一个成员是状态的当前值，第二个成员是发送 action 的dispatch函数。

发送 action 的dispatch函数

```js
<button onClick={() => dispatch({ type: 'countUp' })}>
```

```js
const myReducer = (state, action) => {
  switch(action.type)  {
    case('countUp'):
      return  {
        ...state,
        count: state.count + 1
      }
    default:
      return  state;
  }
}
```

由于 Hooks 可以提供共享状态和 Reducer 函数，所以它在这些方面可以取代 Redux。但是，它没法提供中间件（middleware）和时间旅行（time travel），如果你需要这两个功能，还是要用 Redux。

useEffect()用来引入具有副作用的操作，最常见的就是向服务器请求数据。以前，放在componentDidMount里面的代码，现在可以放在useEffect()。

useEffect()接受两个参数。第一个参数是一个函数，异步操作的代码放在里面。第二个参数是一个数组，用于给出 Effect 的依赖项，只要这个数组发生变化，useEffect()就会执行。第二个参数可以省略，这时每次组件渲染时，就会执行useEffect()。

阮一峰的示例，异步取数的地址有问题，所以换成知乎的API  
https://github.com/iKrelve/KuaiHu/blob/master/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5API.md