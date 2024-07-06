import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };
  const decrementHandler = () => {
    if (count > 0) dispatch(decrement());
  };
  return (
    <div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <span style={{ margin: "0 25px " }}>Count: {count}</span>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
