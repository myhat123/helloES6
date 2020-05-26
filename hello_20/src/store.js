import { createStore } from "redux";

function reducer(state = { num: 0 }, action) {
    switch (action.type) {
      case "INCREMENT":
        return {
          ...state,
          num: state.num + action.step
        };
      case "DECREMENT":
        return {
          ...state,
          num: state.num - action.step
        };
      default:
        return state;
    }
  }

  const store = createStore(reducer);

  export default store;