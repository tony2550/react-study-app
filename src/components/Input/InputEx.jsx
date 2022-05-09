import React from 'react';
import classes from './Input.module.css';

const InputEx = () => {
  return (
    <div className={classes.Root}>
      <div className={classes.Container}>
        <input />
        <button>RESET</button>
        <div>
          <h1>값: </h1>
        </div>
      </div>
    </div>
  );
};

export default InputEx;
