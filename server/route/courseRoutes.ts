import express from "express";
import {getCourseByID, getCourses,createCourse} from "../controllers/courseController";
import {createclass} from "../controllers/classController";
import {classRouter} from "./classRoutes";
export const courseRouter=express.Router();



courseRouter.route("/allCourses")
    .get(getCourses);



courseRouter.route("/:id")
    .get(getCourseByID);

courseRouter.route("/createCourse")
    .post(createCourse);
