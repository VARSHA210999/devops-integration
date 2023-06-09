import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import PieChart from "../pie";
import { Data } from "../../../../helpers/dummy-data";

Chart.register(CategoryScale);

function PieData() {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
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
    <div className="h-52 w-52 rounded-full">
      <PieChart chartData={chartData} />
    </div>
  );
  }
  export default PieData;