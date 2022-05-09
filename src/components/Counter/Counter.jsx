import React from 'react';
import classes from './Counter.module.css';

const Counter = () => {
  const onIncrease = () => {
    console.log('Plus / +');
  };

  const onDecrease = () => {
    console.log('Minus / -');
  };

  return (
    <div className={classes.Root}>
      <div className={classes.Container}>
        <div className={classes.CounterBoard}>
          <button className={classes.Btn} onClick={onIncrease}>
            -
          </button>

          <div className={classes.CounterNum}>0</div>

          <button className={classes.Btn} onClick={onDecrease}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
