import React from 'react';
import classes from './Hello.module.css';
const Hello = ({ name, backnumber, team, isCaptain }) => {
  return (
    <div>
      <section className={classes.Root}>
        <div className={classes.Container}>
          <div>
            <span className={classes.Introduce}>Player's name is </span>
            <span className={classes.Username}>{name}</span>
            {isCaptain ? <span className={classes.Captain}>C</span> : null}
          </div>
          <div>
            <span className={classes.Introduce}>Back Number </span>
            <span className={classes.Backnumber}>{backnumber}</span>
          </div>
          <div>
            <span className={classes.Introduce}>Team Name </span>
            <span className={classes.Teamname}>{team}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hello;
