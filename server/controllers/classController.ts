import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import { classSchema } from "../models/classModel";

const prisma = new PrismaClient()

export const getClasses = async (req: Request, res: Response) => {

    try {
        const data = await prisma.teacher_class.findMany({

        }

        )
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getClassByID = async (req: Request, res: Response) => {


    try {
        const data = await prisma.teacher_class.findMany({
            where: <any>{
                user_id: req.params.id
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const createClass = async (req: Request, res: Response) => {

    // const { error, value } = classSchema.validate(req.body);

    // if (!error) {
        try {
            // @ts-ignore
            const { teacher_id } = await prisma.teacher.findUnique({
                where: {
                    user_id: req.body.user_id
                },
                select: {
                    teacher_id: true
                }
            })
            console.log(req.body.date);

            //@ts-ignore
            const data = await prisma.teacher_class.create({
                data: {
                    course_id: req.body.course_id,
                    teacher_id: teacher_id,
                    date: new Date(req.body.date),
                    start_time: req.body.start_time,
                    end_time: req.body.end_time,
                    isActive: true,
                    isStarted: false,
                }
            })
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error);
        }
    // }
    // else {
    //     res.status(500).send(error.details[0].message);
    // }
}

