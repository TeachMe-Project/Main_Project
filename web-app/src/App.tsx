import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import SignUpCategory from "./components/signup/SignUpCategory";
import TeacherSignup from "./components/signup/TeacherSignup";
import InstituteSignup from "./components/signup/InstituteSignup";
import StudentSignup from "./components/signup/StudentSignup";
import ParentSignup from "./components/signup/ParentSignup";
import PUpComingClasses from "./components/profile/parent/PUpComingClasses";
import PUpComingPayments from './components/profile/parent/PUpComingPayments';
import PStudentProgress from './components/profile/parent/PStudentProgress';
import ManageUsers from "./components/profile/admin/ManageUsers";
import ManageCourses from "./components/profile/admin/ManageCourses";
import ComplaintHandling from "./components/profile/admin/ComplaintHandling";
import VerifyTutorsPage from "./components/profile/admin/VerifyTutorsPage";
import VerifyInstitutesPage from "./components/profile/admin/VerifyInstitutesPage";
import {ProtectedRoute} from "./components/utils/protected-routes";
import NotFound from "./components/utils/notFound";
import TutorPayments from "./components/profile/admin/TutorPayments";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Route path="/admin" element={<ProtectedRoute component={PUpComingClasses}/>}/>*/}
                <Route path="/dashboard" element={<PStudentProgress/>}/>
                <Route path="/signup" element={<SignUpCategory/>}/>
                <Route path="/signup/teacher" element={<TeacherSignup/>}/>
                <Route path="/signup/institute" element={<InstituteSignup/>}/>
                <Route path="/signup/parent" element={<ParentSignup/>}/>

                <Route path="/parent" element={<ProtectedRoute component={PUpComingClasses} role={'parent'}/>}/>
                <Route path="/parent/payments"
                       element={<ProtectedRoute component={PUpComingPayments} role={'parent'}/>}/>
                <Route path="/parent/stuSignup" element={<ProtectedRoute component={StudentSignup} role={'parent'}/>}/>
                <Route path="/parent/history" element={<ProtectedRoute component={PStudentProgress} role={'parent'}/>}/>

                <Route path="/admin" element={<ProtectedRoute component={ManageUsers} role={'admin'}/>}/>
                <Route path="/admin/managecourses"
                       element={<ProtectedRoute component={ManageCourses} role={'admin'}/>}/>
                <Route path="/admin/complainthandling"
                       element={<ProtectedRoute component={ComplaintHandling} role={'admin'}/>}/>
                <Route path="/admin/verifytutors"
                       element={<ProtectedRoute component={VerifyTutorsPage} role={'admin'}/>}/>
                <Route path="/admin/verifyinstitutes"
                       element={<ProtectedRoute component={VerifyInstitutesPage} role={'admin'}/>}/>
                <Route path="/admin/tutorpayment"
                       element={<ProtectedRoute component={TutorPayments} role={'admin'}/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
};

export default App;