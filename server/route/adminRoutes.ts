import express from "express";
import {
    acceptTeacher,
    adminRemoveUser,
    createAdmin,
    getAdminByID,
    getAdmins,
    newTeacherRequests,
    rejectTeacher
} from "../controllers/adminController";

export const adminRouter=express.Router();



adminRouter.route("/alladmins")
    .get(getAdmins);

adminRouter.route("/newTeacherRequests")
    .get(newTeacherRequests);

adminRouter.route("/:id")
    .get(getAdminByID);

adminRouter.route("/removeUser")
    .post(adminRemoveUser);

adminRouter.route("/createAdmin")
    .post(createAdmin);

adminRouter.route("/acceptTeacher")
    .post(acceptTeacher);

adminRouter.route("/rejectTeacher")
    .post(rejectTeacher);


