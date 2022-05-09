import React from 'react';
import classes from './Counter.module.css';

const Counter = () => {
  return (
    <div className={classes.Root}>
      <div className={classes.Container}>
        <div className={classes.CounterBoard}>
          <button className={classes.Btn}>+</button>
          <div className={classes.CounterNum}>0</div>
          <button className={classes.Btn}>-</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
