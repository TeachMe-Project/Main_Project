import * as React from 'react';

import { Bar } from 'react-chartjs-2';
import '../../../../Assets/Styles/main.scss';
// @ts-ignore
import { faker } from '@faker-js/faker';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Weekly Bounce rate analysis',
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

const labels = ['1st week', '2nd Week', '3rd Week', '4th Week '];

export const data = {
  labels,
  datasets: [

    {
      label: 'Bounce Rate',
      data: labels.map(() => faker.datatype.number({ min: 0, max:  50})),
      backgroundColor: '#003865',
    },
  ],
};

export function Bouncerate() {
  return (
    <Bar
      options={options}
      data={data}
      style={{
        height: '350px',
        width: '565px',
        position: 'relative',
        bottom: '-58px',
      }}
    />
  );
}

export default Bouncerate;
