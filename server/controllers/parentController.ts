import express from "express";
import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {number} from "joi";
import {parentSchema} from "../models/parentModel";

const prisma = new PrismaClient()

export const getParents=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.parent.findMany()
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getParentByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.parent.findMany({
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
export const  createParent=async (req:Request,res:Response)=>{

        const { error, value } = parentSchema.validate(req.body);

        if(!error) {
            try {
                const data = await prisma.parent.create({
                    data: {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        mobile_no: req.body.mobile_no,
                        user_id: req.body.user_id,
                        security_status: req.body.security_status
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

