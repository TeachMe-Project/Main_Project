import express from "express";
import {getTeacherByID, getTeachers,createTeacher} from "../controllers/teacherController";
export const teacherRouter=express.Router();



teacherRouter.route("/allTeachers")
    .get(getTeachers);

teacherRouter.route("/:id")
    .get(getTeacherByID);

teacherRouter.route("/createTeacher")
    .post(createTeacher);
