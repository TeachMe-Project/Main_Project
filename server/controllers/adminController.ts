import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import adminSchema from "../models/adminModel";
import logger from "../utils/logger";

const prisma = new PrismaClient()
const NAME_SPACE = "ADMIN"
export const getAdmins = async (req: Request, res: Response) => {

    try {
        const data = await prisma.admin.findMany()
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const getAdminByID = async (req: Request, res: Response) => {


    try {
        const data = await prisma.admin.findMany({
            where: {
                admin_id: Number(req.params.id)
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const adminRemoveUser = async (req: Request, res: Response) => {

    try {
        const data = await prisma.user.update({
            where: { user_id: Number(req.body.user_id) },
            data: {
                is_active: bool(0)
            }
        }
        )
        res.status(200).send(data)
    }
    catch (error) {
        res.status(500).send(error);
    }
}
export const newTeacherRequests = async (req: Request, res: Response) => {

    try {
        const data = await prisma.teacher.findMany({
            where: {
                verification:"pending"
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

export const verifyTeacher = async (req: Request, res: Response) => {

    try {
        const data = await prisma.teacher.update({
            where: {
                user_id: req.body.user_id
            },
            data: {
                verification: 'verified'
            }
        })
        logger.info(NAME_SPACE, "Your Tutor Profile Successfully Verified");
        res.status(200).send("Your Tutor Profile Successfully Verified");
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error);
    }
}

export const rejectTeacher = async (req: Request, res: Response) => {

    try {
        const data = await prisma.teacher.update({
            where: {
                user_id: req.body.user_id
            },
            data: {
                verification: 'rejected'
            }
        })
        logger.info(NAME_SPACE, "Your Tutor Profile Rejected");
        res.status(200).send("Your Tutor Profile Rejected");
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error);
    }
}

export const createAdmin = async (req: Request, res: Response) => {

    const { error, value } = adminSchema.validate(req.body);

    if (!error) {
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

