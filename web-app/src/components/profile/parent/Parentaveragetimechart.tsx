import * as React from 'react';

import { Pie } from 'react-chartjs-2';

// @ts-ignore
import { faker } from '@faker-js/faker';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Student Average Attendance time for Course',
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

const labels = ['1st Week', '2nd Week', '3rd Week', '4th Week '];


export function Parentsaveragetimechart(props: {subject:any}) {


  const data = {
    labels,
    datasets: [
      {
        label: props.subject,
        data: labels.map(() => faker.datatype.number({ min: 0, max: 2 })),
        backgroundColor: '#f39c12',
      },
    ],
  };

  return (
    <Bar
      options={options}
      data={data}
      style={{
        height: '350px',
        width: '565px',
        position: 'relative',
        bottom: '-30px',
      }}
    />
  );
}

export default Parentsaveragetimechart;
