import express from "express";
import {createHomework, getHomeworkByID, getHomeworks} from "../controllers/homeworkController";

export const homeworkRouter=express.Router();



homeworkRouter.route("/allHomeworks")
    .get(getHomeworks);

homeworkRouter.route("/:id")
    .get(getHomeworkByID);

homeworkRouter.route("/createHomework")
    .post(createHomework);


