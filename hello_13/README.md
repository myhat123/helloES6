列表 & Key
=========

https://react.docschina.org/docs/lists-and-keys.html

尽管显示都正常，但在调试器中示例2,3都出现了：

react.development.js:401 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `NumberList`. See https://fb.me/react-warning-keys for more information.
    in li (created by NumberList)
    in NumberList

key 帮助 React 识别哪些元素改变了，比如被添加或删除。因此你应当给数组中的每一个元素赋予一个确定的标识。

数组元素中使用的 key 在其兄弟节点之间应该是独一无二的。然而，它们不需要是全局唯一的。当我们生成两个不同的数组时，我们可以使用相同的 key 值