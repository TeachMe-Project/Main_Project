import express from "express";
import {getClassByID, getClasses , createClass} from "../controllers/classController";

export const classRouter=express.Router();



classRouter.route("/allClasses")
    .get(getClasses);

classRouter.route("/:id")
    .get(getClassByID);

classRouter.route("/createClass")
    .post(createClass);


