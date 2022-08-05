import React, {
  useEffect,
  useState,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart } from "react-chartjs-2";
import "./linchart.css";
import { jsPDF } from "jspdf";
ChartJS.register(...registerables);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    // annotation: {
    //   annotations: {},
    // },
    legend: {
      display: false,
    },
    interaction: {
      intersect: false,
      mode: "nearest",
      axix: "x",
    },
    tooltip: {
      position: "nearest",
      callbacks: {
        title: (context) => {
          return "date: " + context[0].raw.date;
        },
        label: (context) => {
          return "Feed Rate: " + context.raw.y;
        },
        labelTextColor: (context) => {
          return context.dataset.borderColor;
        },
        footer: (context) => {
          return "Main Engine: " + context[0].raw.x;
        },
      },
    },
  },
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      display: true,
      axis: "x",
      title: {
        display: true,
        text: "X",
        color: "#fff",
        font: {
          family: "Helvetica",
          size: 15,
          weight: "bold",
          lineHeight: 1.2,
        },
        padding: { top: 15, left: 0, right: 0, bottom: 15 },
      },
      grid: {
        drawBorder: false,
        color: function (context) {
          if (context.index !== 0) {
            return "#3B3B3B";
          }
          return "#fff";
        },
      },
      ticks: {
        backdropColor: "#303030",
        color: "white",
        font: {
          size: 14,
          family: "Helvetica",
          weight: 200,
        },
      },
    },
    y: {
      axis: "y",
      type: "linear",
      title: {
        display: true,
        text: "Y",
        color: "#fff",
        font: {
          family: "Helvetica",
          size: 15,
          weight: "bold",
          lineHeight: 1.2,
        },
        padding: { top: 15, left: 0, right: 0, bottom: 15 },
      },
      grid: {
        drawBorder: false,
        color: function (context) {
          if (context.tick.value !== 0) {
            return "#3B3B3B";
          }
          return "#fff";
        },
      },
      ticks: {
        color: "white",
        font: {
          size: 14,
          family: "Helvetica",
          weight: 200,
        },
        padding: 15,
        stepSize: 0.2,
        z: 1,
      },
    },
  },
};

export const LineChart = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    downloadPDF() {
      const chartcanvas = chartRef.current.canvas;
      var canvasImg = chartcanvas.toDataURL("image/jpeg", 1.0);
      const doc = new jsPDF("landscape");
      doc.setFontSize(20);
      doc.text(15, 15, "Cool Chart");
      doc.addImage(canvasImg, "JPEG", 10, 10, 280, 150);
      doc.save("Lincahrt.pdf");
    },
  }));

  const chartRef = useRef(null);
  const [data, setData] = useState({ datasets: [] });
  // const [option, setOption] = useState(options);

  useEffect(() => {
    const chart = chartRef.current;
    console.log(props.list);
    const makeDataset = () => {
      let arr = props.list;
      let chartdataArr = [];
      arr = arr.sort((a, b) => b.date - a.date);
      for (let i = 0; i < arr.length; i++) {
        let chartdata = { x: "", y: "", date: "", remark: "" };
        chartdata.x = arr[i].xvalue;
        chartdata.y = arr[i].yvalue;
        chartdata.date = arr[i].date;
        chartdata.remark = arr[i].sentence;
        chartdataArr.push(chartdata);
      }
      setData({
        datasets: [
          {
            label: "test chart",
            data: chartdataArr,
            showLine: true,
            fill: false,
            backgroundColor: "rgba(51,255,51,0.5)",
            borderColor: "rgba(51,255,51)",
            pointStyle: "rectRounded",
            pointRadius: 5,
            pointHoverRadius: 8,
            hoverBackgroundColor: "rgba(51,255,51)",
          },
        ],
      });
    };

    if (chart) {
      makeDataset();
    }
  }, [props.list]);

  return (
    <div className="chart_wrapper">
      <Chart ref={chartRef} type="line" options={options} data={data} />
    </div>
  );
});
