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
      text: "Revenue Analysis",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data1 = [45000, 100000, 65000, 40000, 30000, 40000, 20000];

export const data = {
  labels,
  datasets: [
    {
      label: "Monthly Class Revenue Generated",
      data: data1,
      backgroundColor: "rgb(219, 0, 0)",
    },
  ],
};

export function PaymentChart() {
  return <Bar options={options} data={data} />;
}

export default PaymentChart;
