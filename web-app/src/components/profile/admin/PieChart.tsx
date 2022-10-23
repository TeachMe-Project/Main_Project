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
  labels: ["Student", "Teacher","Institute"],
  datasets: [
    {
      label: "User Distribution",
      data: [120, 40, 12],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      
        
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
     
       
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