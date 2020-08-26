import React from "react";
import { Doughnut } from "react-chartjs-2";
import "./piechart.css";

function PieChart(props) {
  const colours = [
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
  let state = {};

  if (data.length > 1) {
    state = {
      labels: [
        data[0][0],
        data[1][0],
        data[2][0],
        data[3][0],
        data[4][0],
        data[5][0],
        data[6][0],
        data[7][0],
        data[8][0],
      ],
      datasets: [
        {
          label: "Genres",
          backgroundColor: [
            colours[0],
            colours[1],
            colours[2],
            colours[3],
            colours[4],
            colours[5],
            colours[6],
            colours[7],
            colours[8],
            colours[9],
          ],
          data: [
            data[0][1],
            data[1][1],
            data[2][1],
            data[3][1],
            data[4][1],
            data[5][1],
            data[6][1],
            data[7][1],
            data[8][1],
          ],
        },
      ],
    };
  }

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
                style={{ backgroundColor: colours[index] }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PieChart;
