import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {instituteSchema} from "../models/instituteModel";

const prisma = new PrismaClient()

export const getInstitutes=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.institute.findMany()
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getInstituteByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.institute.findMany({
            where:{
                institute_id:Number(req.params.id)
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const  createInstitute=async (req:Request,res:Response)=>{

    const { error, value } = instituteSchema.validate(req.body);

    if(!error) {
        try {
            const data = await prisma.institute.create({
                data: {
                    institute_name: req.body.institute_name,
                    contact_no: req.body.contact_no,
                    description: req.body.description,
                    account_name: req.body.account_name,
                    account_no: req.body.account_no,
                    bank_name: req.body.bank_name,
                    branch_name: req.body.branch_name,
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

