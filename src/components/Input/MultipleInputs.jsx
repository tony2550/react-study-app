import React, { useState } from 'react';
import classes from './Input.module.css';

const MultipleInputs = () => {
  const [inputs, setInputs] = useState({
    name: '',
    backnumber: '',
  });

  const { name, backnumber } = inputs; // 구조 분해 할당으로 각각의 값 추출

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs, // 기존의 input 객체 copy
      [name]: value, // name 키를 가진 값을 value로 설정하기
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      backnumber: '',
    });
  };

  return (
    <div className={classes.Container}>
      <input name="name" placeholder="Player Name" onChange={onChange} value={name} />
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
