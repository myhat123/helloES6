参考资料:

https://react.docschina.org/docs/rendering-elements.html

> npm start

> npm run build

> npx browserslist

删除不必要的文件，从最简单的代码开始

index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>中国，你好</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

index.html

```html
<div id="root"></div>
```

React DOM 会将元素和它的子元素与它们之前的状态进行比较，并只会进行必要的更新来使 DOM 达到预期的状态。