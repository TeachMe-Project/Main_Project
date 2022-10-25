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
      text: "Student Count Analysis - Subjects",
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

const labels = ["1", "2", "3", "4", "5", "6", "7","8","9","10","11","A/L"];

const data1 = [45, 30, 20, 32, 43, 34, 65,50,47,31,48,70,80,93];

export const data = {
  labels,
  datasets: [
    {
      label: "Student Count by Grade",
      data: data1,
      backgroundColor: "rgb(255, 138, 0)",
    },
  ],
};

export function GradeEnrollment() {
  return <Bar options={options} data={data} />;
}

export default GradeEnrollment;
