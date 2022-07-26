import express from "express";
import {
    acceptTeacher,
    adminRemoveUser,
    createAdmin,
    getAdminByID,
    getAdmins,
     rejectTeacher
} from "../controllers/adminController";

export const adminRouter=express.Router();



adminRouter.route("/alladmins")
    .get(getAdmins);

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


