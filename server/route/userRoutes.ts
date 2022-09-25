import express from "express";
import {changeUserImage, createUser, getUsers, getUsersByID, removeUser} from "../controllers/userController";

export const userRouter = express.Router();


userRouter.route("/allUsers")
    .get(getUsers);

userRouter.route("/:id")
    .get(getUsersByID);

userRouter.route("/createUser")
    .post(createUser);

userRouter.route("/removeUser")
    .post(removeUser);

userRouter.route("/changeImage")
    .post(changeUserImage);
