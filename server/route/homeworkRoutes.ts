import express from "express";
import {createHomework, getHomeworkByID, removeHomework} from "../controllers/homeworkController";

export const homeworkRouter=express.Router();


//
// homeworkRouter.route("/allHomeworks")
//     .get(getHomeworks);

homeworkRouter.route("/:id")
    .get(getHomeworkByID);

homeworkRouter.route("/createHomework")
    .post(createHomework);

homeworkRouter.route("/removeHomework")
    .post(removeHomework);


