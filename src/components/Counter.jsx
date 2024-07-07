import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  resetTheCount,
} from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    if (count > 0) dispatch(decrement());
  };
  const resetHandler = () => {
    dispatch(resetTheCount());
  };
  return (
    <div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <span style={{ margin: "0 25px " }}>Count: {count}</span>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button onClick={resetHandler}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
