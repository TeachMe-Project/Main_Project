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
      text: "Payment Analysis for the last month",
    },
  },
};

export const data = {
  labels: ["Pending","Completed"],
  datasets: [
    {
      label: "User Distribution",
      data: [40, 140],
      backgroundColor: [
        "rgb(219, 0, 0)",
        "rgb(24, 185, 179)",
      
      ],
      borderColor: [
        "rgb(219, 0, 0)",
        "rgb(24, 185, 179)",
        
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChartPayment() {
  return <Pie data={data} options={options} />;
}

export default PieChartPayment;
