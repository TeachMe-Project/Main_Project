import express from "express";
import {getStudent, getStudents} from "../controllers/studentController";
export const studentRouter=express.Router();


studentRouter.route("/allStudents")
    .get(getStudents);

studentRouter.route("/:id")
    .get(getStudent);

