import express from "express";
import {createUser, getUsers, getUsersByID} from "../controllers/userController";
export const userRouter=express.Router();



userRouter.route("/allUsers")
    .get(getUsers);

userRouter.route("/:id")
    .get(getUsersByID);

userRouter.route("/createUser")
    .post(createUser);

