import express from "express";
import {
    getStudentByID,
    getStudentCourses,
    getStudentHomeworks,
    getStudents,
    getStudentUpcomingClasses,
    createStudent, getStudentUpcomingPayments, getStudentNotes
} from "../controllers/studentController";
export const studentRouter=express.Router();



studentRouter.route("/allStudents")
    .get(getStudents);

studentRouter.route("/:id")
    .get(getStudentByID);

studentRouter.route("/:id/courses")
    .get(getStudentCourses);

studentRouter.route("/:id/upcomingClasses")
    .get(getStudentUpcomingClasses);

studentRouter.route("/:id/homeWorks")
    .get(getStudentHomeworks);

studentRouter.route("/:id/notes")
    .get(getStudentNotes);

studentRouter.route("/:id/upcomingPayments")
    .get(getStudentUpcomingPayments);

studentRouter.route("/createStudent")
    .post(createStudent);


