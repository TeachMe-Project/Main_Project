import express from "express";
import {
    createInstitute, createTeacherRequest, getAllInstituteCourses, getAllInstituteTeachers,
    getInstituteByID, getInstituteByInstituteID,
    getInstituteByName,
    getInstitutes, removeInstituteTeacher, searchTeacher,
    updateInstituteDetails
} from "../controllers/instituteController";

export const instituteRouter=express.Router();



instituteRouter.route("/allInstitutes")
    .get(getInstitutes);

instituteRouter.route("/:id")
    .get(getInstituteByID);

instituteRouter.route("/getInstituteByInstituteId/:id")
    .get(getInstituteByInstituteID);

instituteRouter.route("/getInstituteByName/:name")
    .get(getInstituteByName);

instituteRouter.route("/updateInstituteDetails")
    .post(updateInstituteDetails);

instituteRouter.route("/getAllInstituteCourses/:id")
    .get(getAllInstituteCourses);

instituteRouter.route("/getAllInstituteTeacher/:id")
    .get(getAllInstituteTeachers);

instituteRouter.route("/searchTeacher")
    .post(searchTeacher);


instituteRouter.route("/createInstitute")
    .post(createInstitute);

instituteRouter.route("/addTeacher/:id")
    .post(createTeacherRequest);

instituteRouter.route("/removeTeacher/:id")
    .post(removeInstituteTeacher);

