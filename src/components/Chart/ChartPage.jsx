import React from "react";
import { LineChart } from "./LineChart";
import classes from "./ChartPage.module.css";
const dataExample = [
  { xvalue: 1, yvalue: 4, date: "2020-01-12", sentence: "a start fight" },
  { xvalue: 2, yvalue: 15, date: "2020-03-12", sentence: "b start fight" },
  { xvalue: 3, yvalue: 13, date: "2020-04-12", sentence: "a start fight" },
  { xvalue: 4, yvalue: 11, date: "2020-05-12", sentence: "a start fight" },
  { xvalue: 5, yvalue: 12, date: "2020-01-20", sentence: "a start fight" },
  { xvalue: 6, yvalue: 8, date: "2020-02-12", sentence: "a start fight" },
  { xvalue: 7, yvalue: 15, date: "2020-06-12", sentence: "a start fight" },
  { xvalue: 8, yvalue: 4, date: "2020-02-12", sentence: "a start fight" },
];
const ChartPage = () => {
  return (
    <div className={classes.ChartContainer}>
      <LineChart list={dataExample} />
    </div>
  );
};

export default ChartPage;
