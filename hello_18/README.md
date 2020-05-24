参考示例：  
https://chriscourses.com/blog/redux

npx create-react-app hello_19
npm install redux --save

mkdir -p src/store
touch src/store/index.js

In order to create a store, we need to use the createStore() function imported from Redux. This creates a JavaScript object with a small API (set of properties and functions) attached to it.

This API includes the following:

getState for accessing the current state of the application
dispatch for changing state via an action
subscribe for responding to state changes

典型的action

{
  type: 'ADD_POST',
  payload: { id: 1, title: 'Redux Tutorial 2019' }
}

调用action

store.dispatch({ type: 'ADD_POST', payload: { id: 1, title: 'How to Use Redux' } })

Remember, we want to create an updated clone so we can view exactly what our app looks like at certain states after actions are dispatched:

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_POST') {
    state.posts.push(action.payload)
  }

  return state
}

||
\/

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_POST') {
    return Object.assign({}, state, {
      posts: state.posts.concat(action.payload)
    })
  }

  return state
}

Testing The Store

import store from './store/index'
window.store = store

运行报错：

ENOSPC: System limit for number of file watchers reached

解决：

sudo vim /etc/sysctl.conf
	
fs.inotify.max_user_watches=524288

sudo sysctl -p

打开调试，观察state, store

store.getState()
store.dispatch({ type: 'ADD_POST', payload: { id: 1, title: 'How to Use Redux' } })
store.getState()

Redux is simply a library that ensures we follow a certain pattern to update our global state.

react-redux
===========

npm install react-redux --save

react-redux provides a component called Provider and a function called connect.

import { Provider } from 'react-redux'
import store from './store/index'
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

We can now access our state directly within components using react-redux's connect function.

作者提到了vue中的store处理方式

This is actually a lot of work just to get a store's state passed through to a component. I prefer Vue's way of accessing a store's state, which is through a global $state object (no importing of packages or mapStateToProps functions required).

In summary, to connect Redux to React, you must do the following:

1. Install and import react-redux
2. Wrap your root App component inside of react-redux's Provider component
3. Import connect into the component you'd like to pull Redux state into
4. Create a mapStateToProps function that determines what state you'd like to pull from your store
5. Export your component using connect, taking mapStateToProps as an argument
6. Pass through your state as an argument to your render function
7. Render your state

Dispatching Redux Events from Components
从组件中派发redux事件

需要把App转成组件

In addition to our mapStateToProps function, we're also going to add a mapDispatchToProps function which will give us access to our Redux store's dispatch method:

Redux Thunk
也可以不用

走完上述例子，再看中文资料

https://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html