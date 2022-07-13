import express from "express";
import {createNote, getNoteByID, getNotes} from "../controllers/notesController";

export const notesRouter=express.Router();



notesRouter.route("/allNotes")
    .get(getNotes);

notesRouter.route("/:id")
    .get(getNoteByID);

notesRouter.route("/createNotes")
    .post(createNote);


