import React from 'react';
import CourseProfile from "../tutor/CourseProfile";
import AdminLayout from "../admin/AdminLayout";
import InstituteLayout from "./InstituteLayout";

const InstituteViewCourse = () => {
    return (
        <InstituteLayout>
            <CourseProfile/>
        </InstituteLayout>
    );
};

export default InstituteViewCourse;