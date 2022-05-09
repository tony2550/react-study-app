import React, { useState, useRef } from 'react';
import classes from './Input.module.css';

const MultipleInputs = () => {
  const [inputs, setInputs] = useState({
    name: '',
    backnumber: '',
  });

  const nameInput = useRef();

  const { name, backnumber } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      backnumber: '',
    });
    nameInput.current.focus();
  };

  return (
    <div className={classes.Container}>
      <input name="name" placeholder="Player Name" onChange={onChange} value={name} ref={nameInput} />
      <input name="backnumber" placeholder="Back Number" onChange={onChange} value={backnumber} />
      <button onClick={onReset}>RESET</button>
      <div className={classes.Board}>
        <h1>PLAYER : </h1>
        <h1>{name}</h1>
        <h1>BACK NUMBER : </h1>
        <h1>{backnumber}</h1>
      </div>
    </div>
  );
};

export default MultipleInputs;
