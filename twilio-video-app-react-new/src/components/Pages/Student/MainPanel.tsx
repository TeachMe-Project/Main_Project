import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import MyCourses from './MyCourses';
import MyTeachers from './MyTeachers';
import Settings from './Settings';
import StudentProfile from './StudentProfile';
import { Course } from './Course';
import Twilio from '../../Twilio/Twilio';

import AppStateProvider, { useAppState } from '../../../state';
import ErrorDialog from '../../ErrorDialog/ErrorDialog';
import { ChatProvider } from '../../ChatProvider';
import { VideoProvider } from '../../VideoProvider';
import useConnectionOptions from '../../../utils/useConnectionOptions/useConnectionOptions';
import theme from '../../../theme';

import { MuiThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import UnsupportedBrowserWarning from '../../UnsupportedBrowserWarning/UnsupportedBrowserWarning';
import PaymentGateway from '../../PaymentGateway/PayementGateway';

const VideoApp = () => {
  const { error, setError } = useAppState();
  const connectionOptions = useConnectionOptions();

  return (
    <VideoProvider options={connectionOptions} onError={setError}>
      <ErrorDialog dismissError={() => setError(null)} error={error} />
      <ChatProvider>
        <Twilio />
      </ChatProvider>
    </VideoProvider>
  );
};

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
    path: '/myteachers',
    main: () => <MyTeachers />,
  },
  {
    path: '/settings',
    main: () => <Settings />,
  },
  {
    path: '/userprofile',
    main: () => <StudentProfile />,
  },
  {
    path: '/course',
    main: () => <Course />,
  },
  {
    path: '/paymentGateway',
    main: () => <PaymentGateway />,
  },
  {
    path: '/twilio',
    main: () => <VideoApp />,
  },
  {
    path: '/room/:URLRoomName',
    main: () => <VideoApp />,
  },
];

export default function MainPanel() {
  return (
    <div className="MainPanel">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <UnsupportedBrowserWarning>
          <AppStateProvider>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} caseSensitive={route.exact} element={<route.main />} />
              ))}
            </Routes>
          </AppStateProvider>
        </UnsupportedBrowserWarning>
      </MuiThemeProvider>
      ,
    </div>
  );
}
