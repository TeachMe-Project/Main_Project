import * as React from "react";
import {Route, Routes, useParams} from "react-router-dom";

import AddCourse from "./AddCourse";
import Addextraclass from "./Addextraclass";
import Course from "./Course";
import CreateCourse from "./CreateCourse";
import Dashboard from "./Dashboard";
import Editdetails from "./Editdetails";
import Institutes from "./Institutes";
import InstituteProfile from "./Instituteprofileview";
import MyCourses from "./MyCourses";
import FreeCard from "./FreeCard";
import Settings from "./Settings";
import StudentAnalytics from "./StudentAnalytics";
import Uploadhomework from "./Uploadhomework";
import Uploadnotes from "./Uploadnotes";
import TeacherProfile from "./TeacherProfile";
import StudentProfile from "./StudentProfile";
import Notifications from "../../Notification/notifications";
import Helpandsupport from "./Helpandsupport";
import Parentscharts from "./Parentscharts";
import Twilio from "../../Twilio/Twilio";
import useConnectionOptions from "../../../utils/useConnectionOptions/useConnectionOptions";
import { VideoProvider } from "../../VideoProvider";
import ErrorDialog from "../../ErrorDialog/ErrorDialog";
import { ChatProvider } from "../../ChatProvider";
import AppStateProvider, { useAppState } from "../../../state";
import theme from "../../../theme";
import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ViewInstituteProfile from "./ViewInstituteProfile";

const VideoApp = () => {
  const params=useParams();
  console.log("test"+params.id)
  const { error, setError } = useAppState();
  const connectionOptions = useConnectionOptions();

  return (
    <VideoProvider options={connectionOptions} onError={setError}>
      <ErrorDialog dismissError={() => setError(null)} error={error} />
      <ChatProvider>
        <Twilio id={params.id} class_id={params.class_id} tag={true}/>
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
    path: '/settings',
    main: () => <Settings />,
  },
  {
    path: '/userprofile',
    main: () => <TeacherProfile />,
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
    path: '/course/:course_id',
    main: () => <Course />,
  },
  {
    path: '/notifications',
    main: () => <Notifications />,
  },
  {
    path: '/editdetails/:course_id',
    main: () => <Editdetails />,
  },
  {
    path: '/uploadnotes/:course_id',
    main: () => <Uploadnotes />,
  },
  {
    path: '/studentanalytics',
    main: () => <StudentAnalytics />,
  },
  {
    path: '/uploadhomework/:course_id',
    main: () => <Uploadhomework />,
  },
  {
    path: '/institutes',
    main: () => <Institutes />,
  },
  {
    path: "/instituteView/:institute_user_id",
    main: () => <ViewInstituteProfile/>
  },
  {
    path: '/freecard',
    main: () => <FreeCard />,
  },
  {
    path: '/addextraclass/:course_id',
    main: () => <Addextraclass />,
  },
  {
    path: '/helpandsupport',
    main: () => <Helpandsupport />,
  },
  {
    path: '/parentscharts',
    main: () => <Parentscharts />,
  },
  {
    path: '/twilio/:id/:class_id',
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
  {
    path: '/studentProfile/:student_id',
    main: () => <StudentProfile />,
  },
  {
    path: '/admindashboard',
    main: () => <AdminDashboard />,
  },
];

export default function MainPanelTeacher() {
  return (
    <div className="MainPanel">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppStateProvider>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} caseSensitive={route.exact} element={<route.main />} />
            ))}
          </Routes>
        </AppStateProvider>
      </MuiThemeProvider>
    </div>
  );
}
