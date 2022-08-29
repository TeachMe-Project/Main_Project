import express from "express";
import {
    getCourseByID,
    getCourses,
    createCourse,
    getCourseByGrade,
    getCourseBySubject,
    getCourseByInstituteName,
    updateCourseDetails,
    removeCourse, getCourseStudentByID, getCourseUpcomingByID, unrollCourseStudents
} from "../controllers/courseController";

export const courseRouter=express.Router();



courseRouter.route("/allCourses")
    .get(getCourses);

courseRouter.route("/:id")
    .get(getCourseByID);

courseRouter.route("/courseStudents/:id")
    .get(getCourseStudentByID);

courseRouter.route("/courseUpcoming/:id")
    .get(getCourseUpcomingByID);

courseRouter.route("/getCourseByGrade/:grade")
    .get(getCourseByGrade);

courseRouter.route("/getCourseBySubject/:subject")
    .get(getCourseBySubject);

courseRouter.route("/getCourseByInstituteName/:instituteName")
    .get(getCourseByInstituteName);

courseRouter.route("/:id/updateCourseDetails")
    .post(updateCourseDetails);

courseRouter.route("removeCourse")
    .post(removeCourse)

courseRouter.route("/unenroll/:id")
    .post(unrollCourseStudents)



courseRouter.route("/createCourse")
    .post(createCourse);
