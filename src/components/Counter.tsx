import React from "react";
import * as classes from "./Counter.module.scss"

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className={classes.btn}>
      <h1>{counter}</h1>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};
