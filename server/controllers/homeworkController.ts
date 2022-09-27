import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client';


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
    } catch (error) {
        res.status(500).send(error);
    }
}
export const createHomework = async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const data = await prisma.homework.create({
            data: {
                uploaded_date: new Date(),
                homework: req.body.homework,
                course_id: Number(req.body.course_id),
                topic: req.body.topic,
                isActive: true
            }
        })
        res.status(200).send(data)
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send(error);
    }

}

export const removeHomework = async (req: Request, res: Response) => {
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

