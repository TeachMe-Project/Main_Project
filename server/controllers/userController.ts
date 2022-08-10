import express from "express";
import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {number} from "joi";
import userSchema from "../models/userModel";
import logger from "../utils/logger";

const prisma = new PrismaClient()
const NAME_SPACE = "User"
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

export const removeUser = async (req: Request, res: Response) => {

    try {
        const data = await prisma.user.update({
            where: {
                user_id: req.body.user_id
            },
            data: {
                isActive: false
            }
        })
        logger.info(NAME_SPACE, "Remove User Successfully");
        res.status(200).send("Remove User Successfully");
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error);
    }
}

