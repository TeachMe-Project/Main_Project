import React from 'react';
import { Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/aboutUs/aboutUs";
import TeacherSignup from "./components/signup/TeacherSignUp";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dashboard" element={<AboutUs />} />
                <Route path="/signup" element={<TeacherSignup />} />
            </Routes>
        </div>
    );
};

export default App;