import React from 'react';
import classes from './CreatePlayer.module.css';

const CreatePlayer = ({ name, backnumber, position, onChange, onCreate }) => {
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
