import express from "express";
import {
    getStudentByID,
    getStudentCourses,
    // getStudentHomeworks,
    // getStudentNotes,
    // getStudentParentDetails,
    getStudents,
    // getStudentUpcomingClasses,
    createStudent,
    getStudentUpcomingClasses, getStudentTutors, getStudentUpcomingPayments, insertUsedApps, getUsedApps,
    // getStudentNotes
} from "../controllers/studentController";
export const studentRouter = express.Router();



studentRouter.route("/allStudents")
    .get(getStudents);

studentRouter.route("/:id")
    .get(getStudentByID);

studentRouter.route("/:id/courses")
    .get(getStudentCourses);

studentRouter.route("/upcomingClasses/:id")
    .get(getStudentUpcomingClasses);

studentRouter.route("/tutors/:id")
    .get(getStudentTutors);

// studentRouter.route("/:id/homeWorks")
//     .get(getStudentHomeworks);

//
// studentRouter.route("/:id/notes")
//     .get(getStudentNotes);

// studentRouter.route("/:id/upcomingPayments")
//     .get(getStudentUpcomingPayments);

studentRouter.route("/createStudent")
    .post(createStudent);

studentRouter.route("/:id/insertUsedApps")
    .post(insertUsedApps)

studentRouter.route("/getUsedApps")
    .post(getUsedApps)


