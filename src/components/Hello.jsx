import React from 'react';
import classes from './Hello.module.css';
const Hello = (props) => {
  return (
    <div>
      <section className={classes.Root}>
        <div className={classes.Container}>
          <div>
            <span className={classes.Introduce}>My name is </span>
            <span className={classes.Username}>{props.name}</span>
          </div>
          <div>
            <span className={classes.Introduce}>Back Number </span>
            <span className={classes.Backnumber}>{props.backnumber}</span>
          </div>
          <div>
            <span className={classes.Introduce}>Team Name </span>
            <span className={classes.Teamname}>{props.team}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hello;
