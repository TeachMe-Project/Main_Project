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
};

const labels = ["","January", "February", "March", "April", "May", "June", "July"];

const studentenrollmentnumbers = [0,40,33,34,21,50,20,45];
const tutorenrollmentnumbers = [0,20, 43, 20, 26, 27, 31, 37];
export const data = {
  labels,
  datasets: [
    {
      label: "Teacher",
      data: tutorenrollmentnumbers,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Student",
      data:studentenrollmentnumbers,
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function EnrollmentChart() {
  return <Line options={options} data={data} />;
}

export default EnrollmentChart;
