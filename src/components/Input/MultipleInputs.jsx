import React, { useState } from 'react';
import classes from './Input.module.css';

const MultipleInputs = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {};

  const onReset = () => {};

  return (
    <div className={classes.Container}>
      <input placeholder="Player Name" />
      <input placeholder="Back Number" />
      <button onClick={onReset}>RESET</button>
      <div>
        <h1>PLAYER: {text}</h1>
        name BackNumber
      </div>
    </div>
  );
};

export default MultipleInputs;
