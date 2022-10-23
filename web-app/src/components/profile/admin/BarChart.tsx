import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data1 = [12, 10, 6, 4, 3, 4, 2];
const data2 = [14, 12, 8, 6, 2, 5, 7];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: data1,
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: data2,
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;