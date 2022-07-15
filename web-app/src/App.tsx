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

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/admin" element={<ProtectedRoute component={AboutUs}/>}/>
                {/*<Route path="/dashboard" element={<PStudentProgress />} />*/}
                {/*<Route path="/signup" element={<SignUpCategory/>}/>*/}
                {/*<Route path="/teacherSignup" element={<TeacherSignup/>}/>*/}
                {/*<Route path="/instituteSignup" element={<InstituteSignup/>}/>*/}
                {/*<Route path="/studentSignup" element={<StudentSignup/>}/>*/}
                {/*<Route path="/parentSignup" element={<ParentSignup/>}/>*/}
                {/*<Route path="/parent" >*/}
                {/*    <Route index element={<PUpComingClasses/>}/>*/}
                {/*</Route>*/}
                {/*<Route path="/admin" element={<Admin />} >*/}
                {/*    <Route path="/admin/manageusers" element={<ManageUsers />} />*/}
                {/*    <Route path="/admin/managecourses" element={<ManageCourses />}/>*/}
                {/*    <Route path="/admin/complainthandling" element={<ComplaintHandling />}/>*/}
                {/*    <Route path="/admin/verifytutors" element={<VerifyTutorsPage />} />*/}
                {/*    <Route path="/admin/verifyinstitutes" element={<VerifyInstitutesPage />} />*/}
                {/*</Route>*/}
                {/*<Route path="/institute" element={<Institute />} />*/}
            </Routes>
        </div>
    );
};

export default App;