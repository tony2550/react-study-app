import React, { useEffect } from 'react';
import classes from './PlayerList.module.css';

const Player = React.memo(({ player }) => {
  useEffect(() => {
    console.log(player);
  }, []);

  return (
    <div>
      <div>
        <h3 style={{ cursor: 'pointer', color: player.active ? 'gold' : 'black' }} onClick={() => {}}>
          NAME : {player.name}
        </h3>
        <h3>BackNumber : {player.backnumber}</h3>
        <h3>Position : {player.position}</h3>
      </div>
      <div className={classes.DeleteDiv}>
        <button onClick={() => {}}>X</button>
      </div>
    </div>
  );
});

const PlayerList = ({ players }) => {
  return (
    <>
      <div className={classes.Root}>
        <div className={classes.Container}>
          {players.map((player) => (
            <Player player={player} key={player.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(PlayerList);
