import React, { useReducer } from 'react';
import classes from './Counter.module.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const Counter = () => {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const onDecrease = () => {
    dispatch({ type: 'DECREMENT' });
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
