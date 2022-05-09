import React from 'react';
import classes from './PlayerList.module.css';

const Player = ({ player }) => {
  return (
    <div>
      <h3>NAME : {player.name}</h3>
      <h3>BackNumber : {player.backnumber}</h3>
      <h3>Position : {player.position}</h3>
    </div>
  );
};

const PlayerList = () => {
  const players = [
    { id: 1, name: 'Mookie', backnumber: '27', position: 'pitcher' },
    { id: 2, name: 'Dohyun', backnumber: '45', position: 'Short Stop' },
    { id: 3, name: 'DoDoSam', backnumber: '4', position: 'Right Fielder' },
  ];
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

export default PlayerList;
