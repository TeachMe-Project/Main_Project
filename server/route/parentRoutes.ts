import express from "express";
import {
    getParentByID,
    getParents,
    createParent,
    parentDoPayment,
    getParentByAuthId,
    updateParent,
    getParentCourseRequest,
    acceptCourseRequest,
    rejectCourseRequest,
    getParentUpComingPayment, getStudentProgress, getStudentUpcomingClass
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
parentRouter.route("/parentCourseRequest/:id").get(getParentCourseRequest);
parentRouter.route("/acceptCourse").post(acceptCourseRequest);
parentRouter.route("/rejectCourse").post(rejectCourseRequest);
parentRouter.route("/upcomingPayment/:id").get(getParentUpComingPayment);
parentRouter.route("/studentProgress/:id").get(getStudentProgress);
parentRouter.route("/upcomingClass/:id").get(getStudentUpcomingClass);
