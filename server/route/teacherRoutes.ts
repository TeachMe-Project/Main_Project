import express from "express";
import {
    getTeacherByAuthID,
    getTeacherByID,
    getTeachers,
    createTeacher,
    getTeacherUpcomingClasses,
    getTeacherCourses,
    getTeacherInstitutes,
    getTeacherByUsername,
    getTeacherPendingInstitutes,
    acceptInstituteRequest,
    rejectInstituteRequest,
    getStudentCountAnalytics,
    getAvgAttendanceAnalytics
} from "../controllers/teacherController";
export const teacherRouter=express.Router();



teacherRouter.route("/allTeachers")
    .get(getTeachers);

teacherRouter.route("/:id")
    .get(getTeacherByID);

teacherRouter.route("/authId/:id")
    .get(getTeacherByAuthID);


teacherRouter.route("/getTeacherByUsername/:username")
    .get(getTeacherByUsername);

teacherRouter.route("/:id/upcomingClasses")
    .get(getTeacherUpcomingClasses);

teacherRouter.route("/:id/courses")
    .get(getTeacherCourses);

teacherRouter.route("/teacherInstitutes/:id")
    .get(getTeacherInstitutes);
    
    teacherRouter.route("/teacherPendingInstitutes/:id")
    .get(getTeacherPendingInstitutes);
    
teacherRouter.route("/acceptInstituteRequest/:id")
.post(acceptInstituteRequest);

teacherRouter.route("/rejectInstituteRequest/:id")
.post(rejectInstituteRequest);

teacherRouter.route("/createTeacher")
.post(createTeacher);

teacherRouter.route("/chart1/:id")
    .get(getStudentCountAnalytics);

    teacherRouter.route("/chart3/:id")
    .get(getAvgAttendanceAnalytics);