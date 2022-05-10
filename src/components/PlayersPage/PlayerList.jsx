import React from 'react';
import classes from './PlayerList.module.css';

const Player = ({ player, onRemove, onToggle }) => {
  return (
    <div>
      <div>
        <h3 style={{ cursor: 'pointer', color: player.active ? 'gold' : 'black' }} onClick={() => onToggle(player.id)}>
          NAME : {player.name}
        </h3>
        <h3>BackNumber : {player.backnumber}</h3>
        <h3>Position : {player.position}</h3>
      </div>
      <div className={classes.DeleteDiv}>
        <button onClick={() => onRemove(player.id)}>X</button>
      </div>
    </div>
  );
};

const PlayerList = ({ players, onRemove, onToggle }) => {
  return (
    <>
      <div className={classes.Root}>
        <div className={classes.Container}>
          {players.map((player) => (
            <Player player={player} key={player.id} onRemove={onRemove} onToggle={onToggle} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PlayerList;
