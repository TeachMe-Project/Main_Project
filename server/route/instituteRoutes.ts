import express from "express";
import {
    createInstitute, getAllInstituteCourses, getAllInstituteTeachers,
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

instituteRouter.route("/getAllInstituteCourses/:id")
    .get(getAllInstituteCourses);

instituteRouter.route("/getAllInstituteTeacher/:id")
    .get(getAllInstituteTeachers);

instituteRouter.route("/createInstitute")
    .post(createInstitute);


