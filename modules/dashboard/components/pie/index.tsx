import React from "react";
import { Pie } from "react-chartjs-2";

function PieChart({ chartData }:any) {
  return (
    <div className="h-52 w-52">      
      <Pie
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2018-2020"
            }
          }
        }}
      />
    </div>
  );
}
export default PieChart;