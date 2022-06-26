import express from "express";
import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {integer} from "twilio/lib/base/deserialize";

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
                user_id:integer(req.params.id)
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const studentCourses=async (req:Request,res:Response)=>{

        try {
            const data =await prisma.student.findMany({
                where:{
                    user_id:integer(req.params.id)
                }
            })
            res.status(200).send(data)
        }

        catch (error) {
            res.status(500).send(error);
        }
}