import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "User Distribution",
    },
  },
};

export const data = {
  labels: ["Student", "Teacher", "Institute", "Parent"],
  datasets: [
    {
      label: "User Distribution",
      data: [120, 40, 12, 80],
      backgroundColor: [
        "rgb(255, 108, 0)",
        "rgb(24, 185, 179)",
        "rgb(240, 233, 38)",
        "rgb(136, 0, 225)",
      ],
      borderColor: [
        "rgb(255, 108, 0)",
        "rgb(24, 185, 179)",
        "rgb(240, 233, 38)",
        "rgb(136, 0, 225 )",
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChart() {
  return (
   
      <Pie
        data={data} options={options}     
      />
 
  );
}

export default PieChart;