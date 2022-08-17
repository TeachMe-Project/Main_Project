import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
//import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import './types';
import { BrowserRouter } from 'react-router-dom';
import { Auth0ProviderWithHistory } from './auth0/auth0-provider-with-history';

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
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
