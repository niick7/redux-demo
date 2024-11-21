import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
  // We assign state to redux to manage
  // Now we get it from redux and only get a part of state, that is a counter
  const counter = useSelector((state) => state.counter);
  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
