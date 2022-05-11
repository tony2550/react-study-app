import React, { useContext, useCallback, useRef } from 'react';
import classes from './CreatePlayer.module.css';
import useInputs from './hooks/useInputs';
import { UserDispatch } from '../App';

const CreatePlayer = () => {
  const dispatch = useContext(UserDispatch);
  const nextId = useRef(4);
  const [{ name, backnumber, position }, onChange, reset] = useInputs({
    name: '',
    backnumber: '',
    position: '',
  });

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_PLAYER',
      player: {
        id: nextId.current,
        name,
        backnumber,
        position,
      },
    });
    reset();
    nextId.current += 1;
  }, [name, backnumber, position, reset, dispatch]);

  return (
    <div className={classes.Root}>
      <div className={classes.Container}>
        <input name="name" placeholder="Player Name" onChange={onChange} value={name} />
        <input name="backnumber" placeholder="Back Number" onChange={onChange} value={backnumber} />
        <input name="position" placeholder="Position" onChange={onChange} value={position} />
        <button onClick={onCreate}>RESISTER</button>
      </div>
    </div>
  );
};

export default React.memo(CreatePlayer);
