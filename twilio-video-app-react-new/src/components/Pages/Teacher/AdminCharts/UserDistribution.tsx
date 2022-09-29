import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

import { Bar } from 'react-chartjs-2';
import '../../../../Assets/Styles/main.scss';
// @ts-ignore
import { faker } from '@faker-js/faker';
import axios, { AxiosResponse } from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

let duration = 0;

const options = {
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

const data = {
  labels,
  datasets: [
    // chart3.map((item: any) => {
    //   return(
    //     {
    //       label: item.course,
    //       data: item.average,
    //       backgroundColor: 'rgba(255, 139, 143, 0.89)'
    //     }
    //   );
    // })
    {
      label: 'Mathematics',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2 })),
      backgroundColor: '#f39c12',
    },
    {
      label: 'Science',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 2 })),
      backgroundColor: '#003865',
    },
  ],
};

export function UserDistribution() {
  const { user } = useAuth0();
  const teacherAuthId = user?.sub;
  const baseURL = `http://localhost:8081/teacher/chart3/${teacherAuthId}`;
  const [chart3, setChart3] = useState<any[]>([]);

  // useEffect(() => {
  //   axios
  //       .get(baseURL)
  //       .then((res: AxiosResponse) => {
  //         res.data.map((x: any) => {
  //           const stClass = x.student_class
  //           stClass.map((y: any) => {
  //             duration = duration + (y.left_time - y.joined_time)
  //             console.log("Duration for class " + x.student_id + " is " + duration)
  //           })
  //           setChart3(prevState => [
  //             ...prevState,
  //             {
  //               course: x.course_name,
  //               average: duration / stClass.length
  //             }
  //           ]);
  //         });
  //         console.log(chart3)
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });

  // })

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

export default UserDistribution;
