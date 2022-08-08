import express from "express";
import {
    adminRemoveUser,
    createAdmin,
    getAdminByID,
    getAdmins,
    newTeacherRequests,
    rejectTeacher, verifyTeacher
} from "../controllers/adminController";

export const adminRouter=express.Router();


adminRouter.route("/newTeacherRequests")
    .get(newTeacherRequests);

adminRouter.route("/verifyTeacher")
    .post(verifyTeacher);

adminRouter.route("/rejectTeacher")
    .post(rejectTeacher);


adminRouter.route("/alladmins")
    .get(getAdmins);


adminRouter.route("/:id")
    .get(getAdminByID);

adminRouter.route("/removeUser")
    .post(adminRemoveUser);

adminRouter.route("/createAdmin")
    .post(createAdmin);

