import React, { useContext } from 'react';
import classes from './PlayerList.module.css';
import { UserDispatch } from '../../App'; //import!

const Player = React.memo(({ player }) => {
  const dispatch = useContext(UserDispatch);

  return (
    <div>
      <div>
        <h3
          style={{ cursor: 'pointer', color: player.active ? 'gold' : 'black' }}
          onClick={() => {
            dispatch({ type: 'TOGGLE_PLAYER', id: player.id });
          }}
        >
          NAME : {player.name}
        </h3>
        <h3>BackNumber : {player.backnumber}</h3>
        <h3>Position : {player.position}</h3>
      </div>
      <div className={classes.DeleteDiv}>
        <button
          onClick={() => {
            dispatch({ type: 'REMOVE_PLAYER', id: player.id });
          }}
        >
          X
        </button>
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
