import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client'
import {notificationSchema} from "../models/notificationModel";

const prisma = new PrismaClient()

export const getNotifications=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.notification.findMany()
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getNotificationByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.notification.findMany({
            where:{
                notification_id:Number(req.params.id)
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const  createNotification=async (req:Request,res:Response)=>{

    const { error, value } = notificationSchema.validate(req.body);

    if(!error) {
        try {
            const data = await prisma.notification.create({
                data:<any> {
                    user_id: req.body.user_id,
                    subject: req.body.subject,
                    description: req.body.description,
                    read_status: req.body.read_status
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

