import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {courseSchema} from "../models/courseModel";

const prisma = new PrismaClient()

export const getCourses=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.course.findMany()
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getCourseByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.course.findMany({
            where:{
                course_id:Number(req.params.id)
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const  createCourse=async (req:Request,res:Response)=>{
    const { error, value } = courseSchema.validate(req.body);

    if(!error) {
        try {
            const data = await prisma.course.create({
                data: {
                    course_name: req.body.course_name,
                    course_description: req.body.course_description,
                    course_image: req.body.course_image
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

