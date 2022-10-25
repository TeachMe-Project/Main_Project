import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Monthly User Enrollment Analysis",
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

const labels = ["May","June","July","August","September", "October"];

const studentenrollmentnumbers = [0,40,33,34,21,50,20,45];
const tutorenrollmentnumbers = [0,20, 43, 20, 26, 27, 31, 37];
const parentenrollmentnumbers = [0, 20, 23, 16, 12, 27, 17, 20];
const instituteenrollmentnumbers = [0, 2, 3, 5, 4, 3, 7, 9];
export const data = {
  labels,
  datasets: [
    {
      label: "Teacher",
      data: tutorenrollmentnumbers,
      borderColor: "rgb(33, 31, 143)",
      backgroundColor: "rgba(33, 31, 143)",
    },
    {
      label: "Student",
      data: studentenrollmentnumbers,
      borderColor: "rgb(255, 108, 0)",
      backgroundColor: "rgb(255, 108, 0)",
    },
    {
      label: "Parent",
      data: parentenrollmentnumbers,
      borderColor: "rgb(55, 255, 27)",
      backgroundColor: "rgb(55, 255, 27)",
    },
    {
      label: "Institute",
      data: instituteenrollmentnumbers,
      borderColor: "rgb(136, 0, 225)",
      backgroundColor: "rgb(136, 0, 225)",
    },
  ],
};

export function EnrollmentChart() {
  return <Line options={options} data={data} />;
}

export default EnrollmentChart;
