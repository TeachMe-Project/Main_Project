import express from "express";
import {contactUs} from "../controllers/contactController";

export const contactRouter=express.Router();


contactRouter.route("/contactUs")
    .post(contactUs);
