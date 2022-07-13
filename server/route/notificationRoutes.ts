import express from "express";
import {createNotification, getNotificationByID, getNotifications} from "../controllers/notificationController";

export const notificationRouter=express.Router();



notificationRouter.route("/allNotifications")
    .get(getNotifications);

notificationRouter.route("/:id")
    .get(getNotificationByID);

notificationRouter.route("/createNotification")
    .post(createNotification);


