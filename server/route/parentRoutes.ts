import express from "express";
import {
    getParentByID,
    getParents,
    createParent,
    parentDoPayment,
    getParentByAuthId, updateParent
} from "../controllers/parentController";
export const parentRouter=express.Router();



parentRouter.route("/allParents")
    .get(getParents);



parentRouter.route("/:id")
    .get(getParentByID);

parentRouter.route("/doPayment")
    .post(parentDoPayment);


parentRouter.route("/createParent")
    .post(createParent);
parentRouter.route("/updateParent")
    .post(updateParent);

parentRouter.route("/parentIdByAuth").post(getParentByAuthId);
