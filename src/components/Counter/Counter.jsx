import React, { useState } from 'react';
import classes from './Counter.module.css';

const Counter = () => {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber((prevNumber) => prevNumber + 1);
    // 값을 업데이트 하는 함수를 파라미터로 넣기
  };

  const onDecrease = () => {
    setNumber((prevNumber) => prevNumber - 1);
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
