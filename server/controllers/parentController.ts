import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client'
import {parentSchema} from "../models/parentModel";
import logger from "../utils/logger";

const prisma = new PrismaClient()
const NAME_SPACE = "Parent"
export const getParents = async (req: Request, res: Response) => {

    try {
        const data = await prisma.parent.findMany()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}
export const getParentByID = async (req: Request, res: Response) => {


    try {
        const data = await prisma.parent.findMany({
            where: {
                user_id: Number(req.params.id)
            }
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getParentByAuthId = async (req: Request, res: Response) => {

    console.log(req.params)
    try {
        const data = await prisma.parent.findMany({
            where: {
                user_id:  req.body.id,
            }
        })
        // @ts-ignore
        logger.info(NAME_SPACE, data[0].parent_id);
        res.status(200).json(data[0].parent_id)
    } catch (error:any) {
        logger.error(NAME_SPACE, error.message)
        res.status(500).send(error.message);
    }
}



export const parentDoPayment = async (req: Request, res: Response) => {

    try {
        const data = await prisma.parent_payment.create({
            data: {
                payment_time: req.body.payment_time,
                amount: req.body.amount,
                student_id: Number(req.body.student_id),
                month: req.body.month,
                year: req.body.year
            }
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}
export const createParent = async (req: Request, res: Response) => {

    const {error, value} = parentSchema.validate(req.body);

    if (!error) {
        try {
            const data = await prisma.user.create({
                data: {
                    user_id: req.body.user_id,
                    username: req.body.username,
                    type: "parent",
                    profile_image: req.body.profile_image,
                    isActive: true,
                    parent: {
                        create: {
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            mobile_no: req.body.mobile_no,
                            isActive: true,
                        }
                    }
                }
            })
            logger.info(NAME_SPACE, "Your Profile Successfully Created");
            res.status(200).send("Your Profile Successfully Created");
        } catch (error: any) {
            logger.error(NAME_SPACE, error.message);
            res.status(500).send(error.message);
        }
    } else {
        logger.error(NAME_SPACE, error.message)
        res.status(500).send(error.details[0].message);
    }
}
