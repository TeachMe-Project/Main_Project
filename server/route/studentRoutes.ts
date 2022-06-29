import express from "express";
import {getStudent, getStudentCourses, getStudents, getStudentUpcomingClasses} from "../controllers/studentController";
export const studentRouter=express.Router();



studentRouter.route("/allStudents")
    .get(getStudents);

studentRouter.route("/:id")
    .get(getStudent);

studentRouter.route("/:id/courses")
    .get(getStudentCourses);

studentRouter.route("/:id/upcomingClasses")
    .get(getStudentUpcomingClasses);

studentRouter.route("/:id/homeworks")
    .get(getStudent);


