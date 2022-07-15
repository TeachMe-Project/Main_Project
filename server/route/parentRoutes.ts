import express from "express";
import {getParentByID, getParents,createParent} from "../controllers/parentController";
export const parentRouter=express.Router();



parentRouter.route("/allParents")
    .get(getParents);



parentRouter.route("/:id")
    .get(getParentByID);

parentRouter.route("/createParent")
    .post(createParent);
