import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';

import AddCourse from './AddCourse';
import Addextraclass from './Addextraclass';
import Course from './Course';
import CreateCourse from './CreateCourse';
import Dashboard from './Dashboard';
import Editdetails from './Editdetails';
import Institutes from './Institutes';
import MyCourses from './MyCourses';

import Settings from './Settings';
import { Students } from './Students';
import Uploadhomework from './Uploadhomework';
import Uploadnotes from './Uploadnotes';
import Userprofile, { TutorProfile } from './TutorProfile';
import Notifications from '../../Notification/notifications';

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: '/mycourses',
    main: () => <MyCourses />,
  },

  {
    path: '/settings',
    main: () => <Settings />,
  },
  {
    path: '/tutorprofile',
    main: () => <TutorProfile />,
  },
  {
    path: '/createcourse',
    main: () => <CreateCourse />,
  },
  {
    path: '/addcourse',
    main: () => <AddCourse />,
  },
  {
    path: '/course',
    main: () => <Course />,
  },
  {
    path: '/notifications',
    main: () => <Notifications />,
  },
  {
    path: '/editdetails',
    main: () => <Editdetails />,
  },
  {
    path: '/uploadnotes',
    main: () => <Uploadnotes />,
  },
  {
    path: '/uploadhomework',
    main: () => <Uploadhomework />,
  },
  {
    path: '/institutes',
    main: () => <Institutes />,
  },
  {
    path: '/addextraclass',
    main: () => <Addextraclass />,
  },
];

export default function MainPanel() {
  return (
    <div className="MainPanel">
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} caseSensitive={route.exact} element={<route.main />} />
        ))}
      </Routes>
    </div>
  );
}
