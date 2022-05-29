import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Dashboard from "./Dashboard";
import MyCourses from "./MyCourses";
import MyTeachers from "./MyTeachers";
import Settings from "./Settings";
import StudentProfile from "./StudentProfile";
import { Course } from "./Course";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "/mycourses",
    main: () => <MyCourses />,
  },
  {
    path: "/myteachers",
    main: () => <MyTeachers />,
  },
  {
    path: "/settings",
    main: () => <Settings />,
  },
  {
    path: "/userprofile",
    main: () => <StudentProfile />,
  },
  {
    path: "/course",
    main: () => <Course />,
  },
];

export default function MainPanel() {
  return (
    <div className="MainPanel">
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          caseSensitive={route.exact}
          element={<route.main />}
        />
      ))}
    </Routes>
    </div>
  );
}

