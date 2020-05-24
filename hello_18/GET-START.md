参考资料：

http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html  
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html  
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html  

https://github.com/reduxjs/redux/tree/master/examples/counter

https://chriscourses.com/blog/redux


Store

State

Action

Action Creator

store.dispatch()

Reducer

Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。  
Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。

纯函数

Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。  
不得改写参数
不能调用系统 I/O 的API
不能调用Date.now()或者Math.random()等不纯的方法，因为每次会得到不一样的结果

store.subscribe()

Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。

工作流程
-------

首先，用户发出 Action。

```js
store.dispatch(action) 
```

然后，Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action。 Reducer 会返回新的 State 。  
let nextState = todoApp(previousState, action);

State 一旦有变化，Store 就会调用监听函数。

```js
store.subscribe(listener);
```

listener可以通过store.getState()得到当前状态。如果使用的是 React，这时可以触发重新渲染 View。  

```js
function listerner() {
  let newState = store.getState();
  component.setState(newState);   
}
```