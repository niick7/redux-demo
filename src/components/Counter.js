import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // We assign state to redux to manage
  // Now we get it from redux and only get a part of state, that is a counter
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const increamentHandler = () => {
    // dispatch will send an action to the redux
    // Based on this dispatch({ type: "increment", amount: 1 })
    // The action value should be { type: "increment", amount: 1 }
    // Then we can use action.type, action.amount
    dispatch({ type: "increment" });
  };
  const increaseHandler = () => {
    // dispatch will send an action to the redux
    // Based on this dispatch({ type: "increment", amount: 1 })
    // The action value should be { type: "increment", amount: 1 }
    // Then we can use action.type, action.amount
    dispatch({ type: "increase", amount: 5 });
  };
  const decreamentHandler = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increamentHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decreamentHandler}>Decrement</button>
      </div>
    </main>
  );
};

export default Counter;
