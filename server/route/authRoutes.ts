import express from "express";
import { createAuthParent, getAccessToken } from '../auth0_api/user';
export const authRouter=express.Router();


// authRouter.route("/access").post(getAccessToken);
authRouter.route("/createParent")
    .post(createAuthParent);


