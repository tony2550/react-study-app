import React, { useEffect, useState } from "react";
import classes from "./ExcelPage.module.css";
import {
  sampleusers,
  sampletimes,
  sampleips,
  samplemenus,
  samplecompanies,
} from "./LogoDummy.js";
import Axios from "axios";

const ExcelPage = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    function createData(name, time, ip, menu, company) {
      return { name, time, ip, menu, company };
    }

    const setDatas = () => {
      const dums = [];
      for (let i = 0; i < sampleusers.length; i++) {
        let dum = createData(
          sampleusers[i],
          sampletimes[i],
          sampleips[i],
          samplemenus[i],
          samplecompanies[i]
        );
        dums.push(dum);
      }
      setRows(dums);
    };
    setDatas();
  }, []);

  const headers = {
    "Content-Type": "application/json",
  };

  const downloadExcel = async () => {
    const rowsdata = JSON.stringify(rows);
    try {
      const response = await Axios({
        headers: headers,
        method: "post",
        url: "http://localhost:5000/excelDownload",
        responseType: "blob",
        data: rowsdata,
      });
      console.log(response.data);
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `accesslist.xlsx`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();

        // Clean up and remove the link
        link.parentNode.removeChild(link);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const testAxios = async () => {
    const a = "kdh";
    const b = "12345";
    const c = "더더더더";
    try {
      const response = await Axios({
        headers: headers,
        method: "post",
        url: "http://localhost:5000/testaxios",
        responseType: "blob",
        data: JSON.stringify({ a, b, c: "aaaaa" }),
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.Root}>
      <div className={classes.Container}>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>time</td>
              <td>ip</td>
              <td>menu</td>
              <td>company</td>
            </tr>
          </thead>
          <tbody>
            {rows &&
              rows.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                  <td>{item.ip}</td>
                  <td>{item.menu}</td>
                  <td>{item.company}</td>
                </tr>
              ))}
          </tbody>
        </table>
        <div>
          <button className={classes.Downbtn} onClick={downloadExcel}>
            DOWNLOAD
          </button>
          <button className={classes.Downbtn} onClick={testAxios}>
            TEST
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExcelPage;
