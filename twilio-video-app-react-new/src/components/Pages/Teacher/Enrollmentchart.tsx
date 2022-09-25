import * as React from 'react';
import { ChartData, ChartArea } from 'chart.js';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Chart } from 'react-chartjs-2';
// @ts-ignore
import { faker } from '@faker-js/faker';
import { useEffect, useRef, useState } from 'react';
import axios, { AxiosResponse } from "axios";
import { useAuth0 } from "@auth0/auth0-react";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];
const colors = ['red', 'orange', 'yellow', 'lime', 'green', 'teal', 'blue', 'purple'];

// const { user } = useAuth0();
// const teacherAuthId = user?.sub;
// const baseURL = `http://localhost:8081/teacher/chart3/${teacherAuthId}`;
// const [chart3, setChart3] = useState<any[]>([]);

// let duration = 0;

// useEffect(() => {
//   axios
//       .get(baseURL)
//       .then((res: AxiosResponse) => {
//         res.data.map((x: any) => {
//           const stClass = x.student_class
//           stClass.map((y: any) => {
//             duration = duration + (y.left_time - y.joined_time)
//           })
//           setChart3(prevState => [
//             ...prevState,
//             {
//               course: x.course_name,
//               average: duration / stClass.length
//             }
//           ]);
//         });
//       })
//       .catch(error => {
//         console.log(error);
//       });
    
// })

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Monthly Student Enrollment for courses',
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

export const data = {
  labels,

  datasets: [
    // chart3.map((item: any) => {
    //   return(
    //     {
    //       label: item.course,
    //       data: item.average,
    //       backgroundColor: 'rgba(255, 139, 143, 0.89)',
    //       borderColor: 'rgba(255, 139, 143, 0.89)',
    //     }
    //   );
    // })
    {
      label: 'Mathematics',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: 'rgba(255, 139, 143, 0.89)',
      borderColor: 'rgba(255, 139, 143, 0.89)',
    },
    {
      label: 'Science',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 10 })),
      backgroundColor: 'rgba(91, 6, 143, 0.89)',
      borderColor: 'rgba(91, 6, 143, 0.89)',
    },
  ],
};

export function Enrollmentchart() {
  const chartRef = useRef<ChartJS>(null);
  const [chartData, setChartData] = useState<ChartData<'bar'>>({
    datasets: [],
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <Chart
      ref={chartRef}
      options={options}
      type="line"
      data={chartData}
      style={{
        height: '350px',
        width: '565px',
        position: 'relative',
        bottom: '-58px',
      }}
    />
  );
}

export default Enrollmentchart;
