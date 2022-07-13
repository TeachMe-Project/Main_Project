import express from "express";
import {createClass, getClassByID, getClasses} from "../controllers/classController";

export const classRouter=express.Router();



classRouter.route("/allClasses")
    .get(getClasses);

classRouter.route("/:id")
    .get(getClassByID);

classRouter.route("/createClass")
    .post(createClass);


