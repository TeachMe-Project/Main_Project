import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {teacherSchema} from "../models/teacherModel";

const prisma = new PrismaClient()

export const getTeachers=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.teacher.findMany()
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getTeacherByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.teacher.findMany({
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
export const createTeacher=async (req:Request,res:Response)=>{

        const { error, value } = teacherSchema.validate(req.body);

        if(!error) {
            try {
                const data = await prisma.teacher.create({
                    data: {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        gender:req.body.gender,
                        description:req.body.description,
                        qualification:req.body.qualification,
                        account_name:req.body.account_name,
                        bank_name:req.body.bank_name,
                        branch_name:req.body.branch_name,
                        account_no:req.body.account_no,
                        verification:req.body.verification,
                        security_status:req.body.security_status,
                        user_id:req.body.user_id
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

