import React from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ chartData }: any) {
  return (
    <div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020",
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}

export default BarChart;
