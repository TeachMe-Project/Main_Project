import express from "express";
import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {number} from "joi";
import userSchema from "../models/userModel";

const prisma = new PrismaClient()

export const getUsers=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.user.findMany({
            where: {
                isActive: true
            },
            include: {
                teacher:true,
                parent:true,
                institute:true,
                student: true
            }
        })
        res.status(200).json(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getUsersByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.user.findMany({
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

export const  createUser=async (req:Request,res:Response)=>{

    const { error, value } = userSchema.validate(req.body);

    if(!error) {
        try {
            const data = await prisma.user.create({
                data: {
                    username: req.body.username,
                    type: req.body.type,
                    profile_image: req.body.profile_image
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

