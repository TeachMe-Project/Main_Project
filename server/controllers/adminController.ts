import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import adminSchema from "../models/adminModel";

const prisma = new PrismaClient()

export const getAdmins=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.admin.findMany()
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getAdminByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.admin.findMany({
            where:{
                admin_id:Number(req.params.id)
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const adminRemoveUser=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.user.update({
            where:{user_id:Number(req.body.user_id)},
            data:{
                is_active:false
            }
        }
        )
        res.status(200).send(data)
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export const acceptTeacher=async (req:Request,res:Response)=>{

        try {
            const data =await prisma.teacher.update({
                where:{user_id:Number(req.body.user_id)},
                data:{
                    security_status:"active"
                }
            }
            )
            res.status(200).send(data)
        }
        catch (error) {
            res.status(500).send(error);
        }
}

export const rejectTeacher=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.teacher.update({
                where:{user_id:Number(req.body.user_id)},
                data:{
                    security_status:"inactive"
                }
            }
        )
        res.status(200).send(data)
    }
    catch (error) {
        res.status(500).send(error);
    }
}

export const  createAdmin=async (req:Request,res:Response)=>{

    const { error, value } = adminSchema.validate(req.body);

    if(!error) {
        try {
            const data = await prisma.admin.create({
                data: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    mobile_no: req.body.mobile_no,
                    user_id: req.body.user_id
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

