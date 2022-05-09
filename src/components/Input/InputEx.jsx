import React, { useState } from 'react';
import classes from './Input.module.css';
import MultipleInputs from './MultipleInputs';

const InputEx = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onReset = (e) => {
    setText('');
    // 초기화 값으로 set
  };

  return (
    <>
      <div className={classes.Root}>
        <div className={classes.Container}>
          <input onChange={onChange} value={text} />
          <button onClick={onReset}>RESET</button>
          <div>
            <h1>값: {text}</h1>
          </div>
        </div>
        <MultipleInputs />
      </div>
    </>
  );
};

export default InputEx;
