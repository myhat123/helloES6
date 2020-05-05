state及生命周期
=============

https://react.docschina.org/docs/state-and-lifecycle.html

将函数组件转换成 class 组件  
向 class 组件中添加局部的 state  
将生命周期方法添加到 Class 中  

根据文档，逐步增加代码

正确地使用 State
1. 不要直接修改 State，应该使用 setState()，构造函数是唯一可以给 this.state 赋值的地方
2. State 的更新可能是异步的，
3. State 的更新会被合并

数据是向下流动的，组件可以选择把它的 state 作为 props 向下传递到它的子组件中