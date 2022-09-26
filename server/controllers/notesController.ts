import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client'
// import {notesSchema} from "../models/notesModel";

const prisma = new PrismaClient()

export const getNotes = async (req: Request, res: Response) => {

    try {
        const data = await prisma.notes.findMany({
            where:{
                course_id: Number(req.params.course_id)
            },
            orderBy:{
             uploaded_date: "desc"
            }
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}
export const getNoteByID = async (req: Request, res: Response) => {


    try {
        const data = await prisma.notes.findMany({
            where: {
                note_id: Number(req.params.id)
            }
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const createNote = async (req: Request, res: Response) => {

    // const { error, value } = notesSchema.validate(req.body);
    console.log(req.body)
    const course_id = Number(req.body.course_id);
    try {
        const data = await prisma.notes.create({
            data: {
                topic: req.body.topic,
                uploaded_date: new Date(),
                note: req.body.note,
                course_id: course_id,
                isActive: true
            }
        })
        res.status(200).send(data)
    } catch (error:any) {
        console.log(error.message)
        res.status(500).send(error.message);
    }
}

