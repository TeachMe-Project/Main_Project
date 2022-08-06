import express from "express";
import {
    getTeacherByID,
    getTeachers,
    createTeacher,
    getTeacherUpcomingClasses,
    getTeacherCourses, getTeacherInstitutes, getTeacherByUsername, verifyTeacher, rejectTeacher
} from "../controllers/teacherController";
export const teacherRouter=express.Router();



teacherRouter.route("/allTeachers")
    .get(getTeachers);

teacherRouter.route("/:id")
    .get(getTeacherByID);

teacherRouter.route("/getTeacherByUsername/:username")
    .get(getTeacherByUsername);

teacherRouter.route("/:id/upcomingClasses")
    .get(getTeacherUpcomingClasses);

teacherRouter.route("/:id/courses")
    .get(getTeacherCourses);

teacherRouter.route("/:id/teacherInstitutes")
    .get(getTeacherInstitutes);

teacherRouter.route("/createTeacher")
    .post(createTeacher);

teacherRouter.route("/verify")
    .post(verifyTeacher);

teacherRouter.route("/reject")
    .post(rejectTeacher);
