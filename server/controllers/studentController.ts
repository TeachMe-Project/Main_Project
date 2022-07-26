import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {studentSchema} from "../models/studentModel";

const prisma = new PrismaClient()

export const getStudents=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.student.findMany()
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.student.findMany({
            where:{
                user_id:Number(req.params.id)
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}


export const getStudentUpcomingClasses=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.renamedclass.findMany(
            {
                where:{student_id:Number(req.params.id)}

            }
        )
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentCourses=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.student_course.findMany(
            {
                where:{student_id:Number(req.params.id)},
                include:{course:true},

            }
        )
        res.status(200).send(data);
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentHomeworks=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.homework.findMany(
            {
                where:{student_id:Number(req.params.id)},
                include:{course:true},

            }
        )
        res.status(200).send(data);
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentUpcomingPayments=async (req:Request,res:Response)=>{

        try {
            const data =await prisma.student_payment.findMany(
                {
                    where:{student_id:Number(req.params.id),payment_status:"unpaid"},


                }
            )
            res.status(200).send(data);
        }

        catch (error) {
            res.status(500).send(error);
        }
}
export const createStudent=async (req:Request,res:Response)=>{
    const { error, value } = studentSchema.validate(req.body);

    if(!error) {
        try {
            const data = await prisma.student.create({
                data: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    school: req.body.school,
                    grade: req.body.grade,
                    security_status: req.body.security_status,
                    user_id: req.body.user_id,
                    parent_id: req.body.parent_id,
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