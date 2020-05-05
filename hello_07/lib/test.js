"use strict";

const element1 = /*#__PURE__*/React.createElement("h1", null, "Hello, world!"); //在 JSX 中嵌入表达式

const name = 'Josh Perez';
const element2 = /*#__PURE__*/React.createElement("h1", null, "Hello, ", name);
ReactDOM.render(element2, document.getElementById('root'));

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};
const element3 = /*#__PURE__*/React.createElement("h1", null, "Hello, ", formatName(user), "!");
ReactDOM.render(element3, document.getElementById('root')); //JSX 也是一个表达式

function getGreeting(user) {
  if (user) {
    return /*#__PURE__*/React.createElement("h1", null, "Hello, ", formatName(user), "!");
  }

  return /*#__PURE__*/React.createElement("h1", null, "Hello, Stranger.");
} //JSX 特定属性
//JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex


const element4 = /*#__PURE__*/React.createElement("div", {
  tabIndex: "0"
});
const element5 = /*#__PURE__*/React.createElement("img", {
  src: user.avatarUrl
}); //使用 JSX 指定子元素

const element6 = /*#__PURE__*/React.createElement("img", {
  src: user.avatarUrl
});
const element7 = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Hello!"), /*#__PURE__*/React.createElement("h2", null, "Good to see you here."));