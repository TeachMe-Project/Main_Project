import express from "express";
import {createInstitute, getInstituteByID, getInstitutes} from "../controllers/instituteController";

export const instituteRouter=express.Router();



instituteRouter.route("/allInstitutes")
    .get(getInstitutes);

instituteRouter.route("/:id")
    .get(getInstituteByID);

instituteRouter.route("/createInstitute")
    .post(createInstitute);


