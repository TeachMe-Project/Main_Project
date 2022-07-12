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

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dashboard" element={<PStudentProgress />} />
                <Route path="/signup" element={<SignUpCategory/>}/>
                <Route path="/teacherSignup" element={<TeacherSignup/>}/>
                <Route path="/instituteSignup" element={<InstituteSignup/>}/>
                <Route path="/studentSignup" element={<StudentSignup/>}/>
                <Route path="/parentSignup" element={<ParentSignup/>}/>
                <Route path="/parent" >
                    <Route index element={<PUpComingClasses/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;