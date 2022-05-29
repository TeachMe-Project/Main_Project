import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import Twilio from '../Twilio/Twilio';
import Dashboard from '../Pages/Student/Dashboard';

const routings = [
  {
    path: "/",
    exact: true,
    main: () => <Dashboard />,
  },
  {
    path: "/twilio",
    
    main: () => <Twilio />,
  },
  {
    path:"/c",
    
    main: () => <div>not found page</div>,
  },
];

export default function Routings() {
  return (
    <div className="MainPanel">
      <Routes>
        {routings.map((route, index) => (
          <Route key={index} path={route.path} caseSensitive={route.exact} element={<route.main />} />
        ))}
      </Routes>
    </div>
  );
}
