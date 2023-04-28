import React from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import BarChart from "../bar";
import { WeeklySales } from "../../../../helpers/dummy-data";

Chart.register(CategoryScale);

function BarWeeklySales() {
  const [chartData, setChartData] = useState({
    labels: WeeklySales.map((data) => data.day), 
    datasets: [
      {
        label: "Users Gained ",
        data: WeeklySales.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",          
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "black",
        borderWidth: 1        
      }
    ]
  });

  return (
    <div className="App">
      <BarChart chartData={chartData} />
    </div>
  );
}

export default BarWeeklySales;
