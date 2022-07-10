import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/aboutUs/aboutUs";
import SignUpCategory from "./components/signup/SignUpCategory";
import TeacherSignup from "./components/signup/TeacherSignup";
import Admin from './components/admin/Admin';
import Institute from './components/institute/institute';
import ManageUsers from "./components/admin/ManageUsers";
import ManageCourses from "./components/admin/ManageCourses";
import ComplaintHandling from "./components/admin/ComplaintHandling";
import VerifyTutorsPage from "./components/admin/VerifyTutorsPage";
import VerifyInstitutesPage from "./components/admin/VerifyInstitutesPage";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dashboard" element={<AboutUs />} />
                <Route path="/signup" element={<SignUpCategory/>}/>
                <Route path="/teacherSignup" element={<TeacherSignup/>}/>
                <Route path="/admin" element={<Admin />} >
                    <Route path="/admin/manageusers" element={<ManageUsers />} />
                    <Route path="/admin/managecourses" element={<ManageCourses />}/>
                    <Route path="/admin/complainthandling" element={<ComplaintHandling />}/>
                    <Route path="/admin/verifytutors" element={<VerifyTutorsPage />} />
                    <Route path="/admin/verifyinstitutes" element={<VerifyInstitutesPage />} />
                </Route>
                <Route path="/institute" element={<Institute />} />
            </Routes>
        </div>
    );
};

export default App;