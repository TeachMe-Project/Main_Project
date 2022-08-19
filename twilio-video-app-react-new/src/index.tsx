import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';

import { CssBaseline } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';

import App from './App';
import AppStateProvider, { useAppState } from './state';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ErrorDialog from './components/ErrorDialog/ErrorDialog';
import LoginPage from './components/LoginPage/LoginPage';
//import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import theme from './theme';
//import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './types';
import { ChatProvider } from './components/ChatProvider';
import { VideoProvider } from './components/VideoProvider';
import useConnectionOptions from './utils/useConnectionOptions/useConnectionOptions';
import UnsupportedBrowserWarning from './components/UnsupportedBrowserWarning/UnsupportedBrowserWarning';
import Twilio from './components/Twilio/Twilio';
import Dashboard from './components/Pages/Student/Dashboard';
import MyTeachers from './components/Pages/Student/MyTeachers';
import Course from './components/Pages/Student/Course';
import MyCourses from './components/Pages/Student/MyCourses';
import StudentProfile from './components/Pages/Student/StudentProfile';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './auth0/auth0-provider-with-history';

ReactDOM.render(
  // 👈️ deprecated starting React 18
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // document.getElementById('root')

  <App />,
  document.getElementById('root')
);

// const VideoApp = () => {
//     const { error, setError } = useAppState();
//     const connectionOptions = useConnectionOptions();
//
//     return (
//         <VideoProvider options={connectionOptions} onError={setError}>
//             <ErrorDialog dismissError={() => setError(null)} error={error} />
//             <ChatProvider>
//                 <Twilio />
//             </ChatProvider>
//         </VideoProvider>
//     );
// };
//
// ReactDOM.render(
//     <MuiThemeProvider theme={theme}>
//         <CssBaseline />
//         <UnsupportedBrowserWarning>
//             <Router>
//                 <AppStateProvider>
//                     <Routes>
//                         <Route path="/" element={<App />} />
//                         <Route path="/mycourses" element={<MyCourses />} />
//                         <Route path="/myteachers" element={<MyTeachers />} />
//                         <Route path="/settings" element={<Settings />} />
//                         <Route path="/userprofile" element={<StudentProfile />} />
//                         <Route path="/course" element={<Course />} />
//
//                         <Route path="/twilio" element={<VideoApp />} />
//                         <Route path="/room/:URLRoomName" element={<VideoApp />} />
//                         <Route path="/login" element={<LoginPage />} />
//
//
//                     </Routes>
// //                 </AppStateProvider>
// //             </Router>
// //         </UnsupportedBrowserWarning>
// //     </MuiThemeProvider>,
//     document.getElementById('root')
// );
