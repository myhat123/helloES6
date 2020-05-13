import React, { useContext, useReducer, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import Button from './button.js';
import './index.css';

//示例1
function App() {
  return (
    <div className="App">
      <Button/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

//示例2
const AppContext = React.createContext({});

const Navbar = () => {
  const { username } = useContext(AppContext)

  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  )
}

const Messages = () => {
  const { username } = useContext(AppContext)

  return (
    <div className="messages">
      <h1>Messages</h1>
      <p>1 message for {username}</p>
      <p className="message">useContext is awesome!</p>
    </div>
  )
}

function App02() {
  return (
    <AppContext.Provider value={{
      username: 'test'
    }}>
      <div className="App02">
        <Navbar />
        <Messages />
      </div>
    </AppContext.Provider>
  );
}

ReactDOM.render(<App02 />, document.getElementById('root02'));

//示例3
const myReducer = (state, action) => {
  switch(action.type) {
    case('countUp'):
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}

function App03() {
  const [state, dispatch] = useReducer(myReducer, { count: 0 })

  return (
    <div className="App03">
      <button onClick={() => dispatch({ type: 'countUp' })}>
        +1
      </button>
      <p>Count: {state.count}</p>
    </div>
  );
}

ReactDOM.render(<App03 />, document.getElementById('root03'));

//示例4
const ZhihuNews = ({ newsId }) => {
  const [loading, setLoading] = useState(true);
  const [zhihunews, setZhihunews] = useState({});

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/zhihu/news/${newsId}`)
      .then(response => response.json())
      .then(data => {
        setZhihunews(data);
        setLoading(false);
      });
  }, [newsId]);

  if (loading === true) {
    return <p>加载中 ...</p>;
  }

  return (
    <div>
      <p>你正在看: {zhihunews.title}</p>
      <p>地址: {zhihunews.url}</p>
      <p>内容: {zhihunews.body}</p>
    </div>
  );
};

function App04() {
  const [show, setShow] = useState("1");

  return (
    <div className="App">
      <ZhihuNews newsId={show} />
      <div>
        Show:
        <button onClick={() => setShow("9723718")}>经常喝方便面的汤会怎么样？</button>
        <button onClick={() => setShow("9723733")}>正确的洗脸方法应该是怎样的？</button>
      </div>
    </div>
  );
}

ReactDOM.render(<App04 />, document.getElementById('root04'));