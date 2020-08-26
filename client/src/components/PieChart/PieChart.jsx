import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./piechart.css";

function PieChart(props) {
  const chartColours = [
    "#bfdcae",
    "#b4f2e1",
    "#557571",
    "#f2ed6f",
    "#639a67",
    "#ccafaf",
    "#febf63",
    "#e4e3e3",
    "#e2979c",
    "#aacdbe",
  ];

  const data = props.data;
  const labels = [];
  const chartData = [];

  data.forEach((genre) => {
    labels.push(genre[0]);
    chartData.push(genre[1]);
  });

  const state = {
    labels: labels,
    datasets: [
      {
        label: "Genres",
        backgroundColor: chartColours,
        data: chartData,
      },
    ],
  };

  return (
    <div>
      <div className="pieContainer">
        <Doughnut
          data={state}
          options={{
            legend: {
              display: false,
            },
          }}
        />
      </div>

      <div className="key">
        {data.map((genre, index) => {
          return (
            <div className="keySection" key={index}>
              <span className="keyIndex">{index + 1} </span> {genre[0]}
              <div
                className="colourKey"
                style={{ backgroundColor: chartColours[index] }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PieChart;
