import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counter, changeCounter] = useState(0); // set initial state to 0

  const addOne = (x) => {
    changeCounter(counter + 1);
  };

  const subOne = (x) => {
    changeCounter(counter - 1);
  };

  return (
    <div className="Counter">
      <h1 className="Counter__text">{counter}</h1>
      <button className="Counter__button" type="button" onClick={subOne}>
        -
      </button>
      <button className="Counter__button" type="button" onClick={addOne}>
        +
      </button>
    </div>
  );
};

export default Counter;
