import express from "express";
import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {number} from "joi";

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

export const getStudent=async (req:Request,res:Response)=>{


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
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentHomeworks=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.homework.findMany(
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