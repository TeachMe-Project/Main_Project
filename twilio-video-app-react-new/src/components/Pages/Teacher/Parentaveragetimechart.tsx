import * as React from "react";

import { Bar } from "react-chartjs-2";
import "../../../Assets/Styles/main.scss";
// @ts-ignore
import { faker } from "@faker-js/faker";

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const
    },
    title: {
      display: true,
      text: "Monthly Student Average Attendance time for Course"
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      grid: {
        display: false
      }
    }
  }
};

const labels = ["1st Week", "2nd Week", "3rd Week", "4th Week "];

export const data = {
  labels,
  datasets: [
    {
      label: "Mathematics",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 3 })),
      backgroundColor: "#f39c12"
    }
  ]
};

export function Parentsaveragetimechart() {
  return (
    <Bar
      options={options}
      data={data}
      style={{
        height: "350px",
        width: "565px",
        position: "relative",
        bottom: "-30px"
      }}
    />
  );
}

export default Parentsaveragetimechart;
