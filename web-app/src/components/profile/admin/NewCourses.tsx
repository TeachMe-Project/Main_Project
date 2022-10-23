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
      text: "New Courses ",
    },
  },
};

const labels = [
  "",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

const coursenumbers = [0, 40, 33, 34, 21, 50, 20, 45];

export const data = {
  labels,
  datasets: [
    {
      label: "Courses",
      data: coursenumbers,
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    }

  ],
};

export function NewCourses() {
  return <Line options={options} data={data} />;
}

export default NewCourses;