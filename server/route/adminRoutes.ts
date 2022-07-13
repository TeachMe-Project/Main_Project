import express from "express";
import {createAdmin, getAdminByID, getAdmins} from "../controllers/adminController";

export const adminRouter=express.Router();



adminRouter.route("/alladmins")
    .get(getAdmins);

adminRouter.route("/:id")
    .get(getAdminByID);

adminRouter.route("/createAdmin")
    .post(createAdmin);


