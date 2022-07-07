import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/aboutUs/aboutUs";
import SignUpCategory from "./components/signup/SignUpCategory";
import TeacherSignup from "./components/signup/TeacherSignup";
import InstituteSignup from "./components/signup/InstituteSignup";
import StudentSignup from "./components/signup/StudentSignup";
import ParentSignup from "./components/signup/ParentSignup";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dashboard" element={<AboutUs />} />
                <Route path="/signup" element={<SignUpCategory/>}/>
                <Route path="/teacherSignup" element={<TeacherSignup/>}/>
                <Route path="/instituteSignup" element={<InstituteSignup/>}/>
                <Route path="/studentSignup" element={<StudentSignup/>}/>
                <Route path="/parentSignup" element={<ParentSignup/>}/>
            </Routes>
        </div>
    );
};

export default App;