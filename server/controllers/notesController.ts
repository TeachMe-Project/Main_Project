import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {notesSchema} from "../models/notesModel";

const prisma = new PrismaClient()

export const getNotes=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.notes.findMany()
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getNoteByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.notes.findMany({
            where:{
                note_id:Number(req.params.id)
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const  createNote=async (req:Request,res:Response)=>{

    const { error, value } = notesSchema.validate(req.body);

    if(!error) {
        try {
            const data = await prisma.notes.create({
                data: {
                    uploaded_date: req.body.uploaded_date,
                    note: req.body.note,
                    course_id: req.body.course_id,
                    student_id: req.body.student_id
                }
            })
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error);
        }
    }
    else {
        res.status(500).send(error.details[0].message);
    }
}

