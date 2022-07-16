import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import AboutUs from "./components/Home/aboutUs/aboutUs";
import SignUpCategory from "./components/signup/SignUpCategory";
import TeacherSignup from "./components/signup/TeacherSignup";
import InstituteSignup from "./components/signup/InstituteSignup";
import StudentSignup from "./components/signup/StudentSignup";
import ParentSignup from "./components/signup/ParentSignup";
import PUpComingClasses from "./components/profile/parent/PUpComingClasses";
import PUpComingPayments from './components/profile/parent/PUpComingPayments';
import PStudentProgress from './components/profile/parent/PStudentProgress';
import Admin from './components/admin/Admin';
import Institute from './components/institute/institute';
import ManageUsers from "./components/admin/ManageUsers";
import ManageCourses from "./components/admin/ManageCourses";
import ComplaintHandling from "./components/admin/ComplaintHandling";
import VerifyTutorsPage from "./components/admin/VerifyTutorsPage";
import VerifyInstitutesPage from "./components/admin/VerifyInstitutesPage";
import {ProtectedRoute} from "./components/utils/protected-routes";
import NotFound from "./components/utils/notFound";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                {/*<Route path="/admin" element={<ProtectedRoute component={PUpComingClasses}/>}/>*/}
                {/*<Route path="/dashboard" element={<PStudentProgress />} />*/}
                {/*<Route path="/signup" element={<SignUpCategory/>}/>*/}
                {/*<Route path="/teacherSignup" element={<TeacherSignup/>}/>*/}
                {/*<Route path="/instituteSignup" element={<InstituteSignup/>}/>*/}
                {/*<Route path="/studentSignup" element={<StudentSignup/>}/>*/}
                {/*<Route path="/parentSignup" element={<ParentSignup/>}/>*/}
                <Route path="/parent" >
                    <Route element={<PUpComingClasses/>}/>
                </Route>
                <Route path="/admin" element={<ProtectedRoute component={Admin}/>} >
                    <Route path="/admin/manageusers" element={<ProtectedRoute component={ManageUsers}/>} />
                    <Route path="/admin/managecourses" element={<ProtectedRoute component={ManageCourses}/>}/>
                    <Route path="/admin/complainthandling" element={<ProtectedRoute component={ComplaintHandling}/>}/>
                    <Route path="/admin/verifytutors" element={<ProtectedRoute component={VerifyTutorsPage}/>} />
                    <Route path="/admin/verifyinstitutes" element={<ProtectedRoute component={VerifyInstitutesPage}/>} />
                </Route>
                {/*<Route path="/institute" element={<Institute />} />*/}
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;