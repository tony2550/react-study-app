import React from 'react';
import classes from './PlayerList.module.css';

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
          <div>
            <h3>NAME : {players[0].name}</h3>
            <h3>BackNumber : {players[0].backnumber}</h3>
            <h3>Position : {players[0].position}</h3>
          </div>
          <div>
            <h3>NAME : {players[1].name}</h3>
            <h3>BackNumber : {players[1].backnumber}</h3>
            <h3>Position : {players[1].position}</h3>
          </div>
          <div>
            <h3>NAME : {players[2].name}</h3>
            <h3>BackNumber : {players[2].backnumber}</h3>
            <h3>Position : {players[2].position}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlayerList;
