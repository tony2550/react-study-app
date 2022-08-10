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
import { gothicfont } from "../../font/NanumBarunGothicBold-normal.js";
ChartJS.register(...registerables);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 15,
  },
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

(function (API) {
  API.myText = function (txt, options, x, y) {
    options = options || {};
    /* Use the options align property to specify desired text alignment
     * Param x will be ignored if desired text alignment is 'center'.
     * Usage of options can easily extend the function to apply different text
     * styles and sizes
     */
    if (options.align === "center") {
      // Get current font size
      const fontSize = this.internal.getFontSize();

      // Get page width
      const pageWidth = this.internal.pageSize.width;

      // Get the actual text's width
      /* You multiply the unit width of your string by your font size and divide
       * by the internal scale factor. The division is necessary
       * for the case where you use units other than 'pt' in the constructor
       * of jsPDF.
       */
      const txtWidth =
        (this.getStringUnitWidth(txt) * fontSize) / this.internal.scaleFactor;

      // Calculate text's x coordinate
      x = (pageWidth - txtWidth) / 2;
    }

    // Draw text at x,y
    this.text(txt, x, y);
  };
})(jsPDF.API);

export const LineChart = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    downloadPDF() {
      const chartcanvas = chartRef.current.canvas;
      var canvasImg = chartcanvas.toDataURL("image/jpeg", 1.0);
      // HTMLCanvasElement.toDataURL()
      console.log(canvasImg);
      const doc = new jsPDF("p", "mm", "a4");

      doc.addFileToVFS("Gothic", gothicfont);
      doc.addFont("Gothic", "gothic", "bold");
      // doc.line(15, 18, 195, 18);
      doc.rect(0, 18, 210, 18, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(30);
      doc.setTextColor("#FFFFFF");
      // doc.text("VDC Access Stats Chart", 30, 30); // 왼쪽부터 이동
      doc.myText("VDC Access Stats Chart", { align: "center" }, 0, 31);
      // 센터 배치
      doc.setDrawColor(11, 11, 69);
      doc.setFillColor(11, 11, 69);
      doc.rect(25, 45, 5, 5, "F");
      // x, y 좌표 rect 길이만큼 빼줘야 글자랑 맞음
      doc.setFontSize(20);
      doc.setTextColor("rgb(11,11,69)");
      const middleTitle = "Line Chart";
      doc.text(35, 50, middleTitle);
      //doc.text(시작x, 시작y, 내용)
      doc.addImage(canvasImg, "JPEG", 25, 55, 160, 90);
      /// -----------------------
      // 요청 user small title
      doc.setDrawColor(11, 11, 69);
      doc.setFillColor(11, 11, 69);
      doc.rect(25, 155, 5, 5, "F"); // 195 -> 155
      doc.setFontSize(20);
      doc.setTextColor("rgb(11,11,69)");
      doc.text("Request User", 35, 160);
      // 요청 user content
      doc.setFontSize(15);
      doc.setTextColor("#1d1d1d");
      doc.text("dhkim@sdenet.net", 35, 170);

      // 다운로드 일시 small title
      const date = new Date().toLocaleString();
      doc.setDrawColor(11, 11, 69);
      doc.setFillColor(11, 11, 69);
      doc.rect(25, 175, 5, 5, "F"); // 215 -> 185
      doc.setFontSize(20);
      doc.setTextColor("rgb(11,11,69)");
      doc.text("Request Date", 35, 180);
      doc.text("Download Menu", 35, 200);
      doc.text("Description", 35, 220);
      // 다운로드 일시 content
      doc.setFontSize(15);
      doc.setTextColor("#1d1d1d");
      doc.setFont("Gothic");
      doc.text(date, 35, 190);

      // 다운로드 메뉴small title
      doc.setDrawColor(11, 11, 69);
      doc.setFillColor(11, 11, 69);
      doc.rect(25, 195, 5, 5, "F"); // 215
      doc.setFontSize(20);
      doc.setTextColor("rgb(11,11,69)");

      // 다운로드 메뉴content
      const downRoute = "VDC > Log History > Log Chart";
      doc.setFontSize(15);
      doc.setTextColor("#1d1d1d");
      doc.text(downRoute, 35, 210);

      // 주의 경고
      doc.setDrawColor(11, 11, 69);
      doc.setFillColor(11, 11, 69);
      doc.rect(25, 215, 5, 5, "F"); // 260
      doc.setFontSize(20);
      doc.setTextColor("rgb(11,11,69)");
      // doc.text("Description", 35, 220);

      const description1 = " - 선택하신 Start date 부터 Request date까지";
      const description2 = "   기록된 정보를 차트로 제공합니다.";
      const description3 =
        " - 메뉴 접속 기록은 Log History > Access Time 메뉴로 이동해주세요.";
      const description4 =
        " - 로그인 정보는 Log History > Access User 메뉴로 이동해주세요.";

      doc.setFontSize(15);
      doc.setTextColor("#1d1d1d");
      doc.text(description1, 35, 230);
      doc.text(description2, 35, 240);
      doc.text(description3, 35, 250);
      doc.text(description4, 35, 260);

      // copyright
      doc.setDrawColor(100, 149, 237); // line color cornflowerblue
      doc.setLineWidth(0.2);
      doc.line(0, 285, 210, 285); // vertical line
      const copy = "Copyright©2020 All rights reserved by S DENET";
      doc.setFontSize(8);
      doc.setTextColor("#808080");
      doc.text(15, 292, copy);
      // Page
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
