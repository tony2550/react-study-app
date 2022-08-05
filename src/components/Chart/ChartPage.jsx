import React, { useRef } from "react";
import { LineChart } from "./LineChart";
import classes from "./ChartPage.module.css";
import { jsPDF } from "jspdf";

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
  const childRef = useRef();
  // const downloadPDF = () => {
  //   const doc = new jsPDF();

  //   doc.text("Hello world!", 10, 10);
  //   doc.save("a4.pdf");
  // };

  return (
    <div className={classes.ChartContainer}>
      <button
        onClick={() => {
          childRef.current.downloadPDF();
        }}
      >
        다운로드
      </button>
      <LineChart ref={childRef} list={dataExample} />
    </div>
  );
};

export default ChartPage;
