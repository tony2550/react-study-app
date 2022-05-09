import React, { useState } from 'react';
import classes from './Counter.module.css';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    setNumber(number - 1);
  };

  return (
    <div className={classes.Root}>
      <div className={classes.Container}>
        <div className={classes.CounterBoard}>
          <button className={classes.Btn} onClick={onDecrease}>
            -
          </button>

          <div className={classes.CounterNum}>{number}</div>

          <button className={classes.Btn} onClick={onIncrease}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
