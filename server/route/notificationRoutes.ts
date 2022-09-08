import express from "express";
import {
    createNotification,
    getNotificationByID,
    getNotificationByUserId,
    getNotifications
} from "../controllers/notificationController";

export const notificationRouter=express.Router();



notificationRouter.route("/allNotifications")
    .get(getNotifications);

notificationRouter.route("/:id")
    .get(getNotificationByID);

notificationRouter.route("/createNotification")
    .post(createNotification);

notificationRouter.route("/user/:id")
    .get(getNotificationByUserId);

