import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import MyCourses from './MyCourses';
import MyTeachers from './MyTeachers';
import Messages from './Messages';
import StudentProfile from './StudentProfile';
import HelpAndSupport from './HelpAndSupport';
import CourseDetails from './CourseDetails';
import Course from './Course';
import Twilio from '../../Twilio/Twilio';
import Notification from '../../Notification/notifications';
import SearchResults from './SearchResults';

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
import TeacherProfile from "../Teacher/TeacherProfile";

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

// @ts-ignore
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
    path: '/messages',
    main: () => <Messages />,
  },
  {
    path: '/helpandsupport',
    main: () => <HelpAndSupport />,
  },
  {
    path: '/notifications',
    main: () => <Notification />,
  },
  {
    path: '/userprofile',
    main: () => <StudentProfile />,
  },
  {
    path: '/searchresults',
    main: () => <SearchResults />,
  },
  {
    path: '/course',
    main: () => <Course />,
  },
  {
    path: '/courseDetails',
    main: () => <CourseDetails />,
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
  {
    path: '/teacherProfile',
    main: () => <TeacherProfile />,
  },
];

export default function MainPanelStudent() {
  return (
    <div className="MainPanel">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {/*<UnsupportedBrowserWarning>*/}
        <AppStateProvider>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} caseSensitive={route.exact} element={<route.main />} />
            ))}
          </Routes>
        </AppStateProvider>
        {/*</UnsupportedBrowserWarning>*/}
      </MuiThemeProvider>
    </div>
  );
}
