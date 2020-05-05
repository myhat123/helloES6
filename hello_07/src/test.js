const element1 = <h1>Hello, world!</h1>;

//在 JSX 中嵌入表达式
const name = 'Josh Perez';
const element2 = <h1>Hello, {name}</h1>;

ReactDOM.render(
  element2,
  document.getElementById('root')
);

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element3 = (
    <h1>
        Hello, {formatName(user)}!
    </h1>
);

ReactDOM.render(
    element3,
    document.getElementById('root')
);

//JSX 也是一个表达式
function getGreeting(user) {
    if (user) {
      return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

//JSX 特定属性
//JSX 里的 class 变成了 className，而 tabindex 则变为 tabIndex
const element4 = <div tabIndex="0"></div>;

const element5 = <img src={user.avatarUrl}></img>;

//使用 JSX 指定子元素
const element6 = <img src={user.avatarUrl} />;

const element7 = (
    <div>
        <h1>Hello!</h1>
        <h2>Good to see you here.</h2>
    </div>
);