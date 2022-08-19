import express from "express";
import {
    createInstitute, getAllInstituteCourses,
    getInstituteByID,
    getInstituteByName,
    getInstitutes,
    updateInstituteDetails
} from "../controllers/instituteController";

export const instituteRouter=express.Router();



instituteRouter.route("/allInstitutes")
    .get(getInstitutes);

instituteRouter.route("/:id")
    .get(getInstituteByID);

instituteRouter.route("/getInstituteByName/:name")
    .get(getInstituteByName);

instituteRouter.route("/updateInstituteDetails")
    .post(updateInstituteDetails);

instituteRouter.route("/:id/getAllInstituteCourses")
    .get(getAllInstituteCourses);

instituteRouter.route("/createInstitute")
    .post(createInstitute);


