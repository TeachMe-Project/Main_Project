import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';
import homeworkSchema from "../models/homeworkModel";


const prisma = new PrismaClient();

// export const getHomeworks=async (req:Request,res:Response)=>{
//
//     try {
//         const data =await prisma.homework.findMany({
//             include:{
//                 student:true
//             }
//         })
//         console.log(data[0].student)
//         res.status(200).send(data[0].student)
//     }
//
//     catch (error) {
//         res.status(500).send(error);
//     }
// }
export const getHomeworkByID = async (req: Request, res: Response) => {


    try {
        const data = await prisma.homework.findMany({
            where: {
                course_id: Number(req.params.id)
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const createHomework = async (req: Request, res: Response) => {
    const { error, value } = homeworkSchema.validate(req.body);

    if (!error) {
        try {
            const data = await prisma.homework.create({
                data: <any>{
                    updated_date: req.body.updated_date,
                    homework: req.body.homework,
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

export const removeHomework = async (req: Request, res: Response) => {
    // const { error, value } = homeworkSchema.validate(req.body);

    // if (!error) {
        try {
            // @ts-ignore
            const data = await prisma.homework.update({
                where: {
                    homework_id: req.body.homework_id
                },
                data: {
                    isActive: false
                }
            })
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error);
        }
    }
    // else {
    //     res.status(500).send(error.details[0].message);
    // }
// }

