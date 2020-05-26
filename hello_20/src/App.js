import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>{counter.num}</h1>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            step: 1
          })
        }
      >
        Increment
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            step: 1
          })
        }
      >
        Decrement
      </button>
    </div>
  );
}

export default App;