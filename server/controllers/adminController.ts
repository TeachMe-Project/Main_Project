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
        const data = await prisma.user.findUnique({
            where: {
                user_id: req.params.id
            },
            include:{
                admin:true
            }
        })
        res.status(200).send(data)
    }

    catch (error:any) {
        res.status(500).send(error.message);
    }
}
export const adminRemoveUser = async (req: Request, res: Response) => {

    try {
        const data = await prisma.user.update({
            where: { user_id: req.body.user_id },
            data: {
                isActive: false,
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

export const newInstituteRequests = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute.findMany({
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

export const verifyInstitute = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute.update({
            where: {
                user_id: req.body.user_id
            },
            data: {
                verification: 'verified'
            }
        })
        logger.info(NAME_SPACE, "Your Institute Profile Successfully Verified");
        res.status(200).send("Your Institute Profile Successfully Verified");
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error);
    }
}

export const rejectInstitute = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute.update({
            where: {
                user_id: req.body.user_id
            },
            data: {
                verification: 'rejected'
            }
        })
        logger.info(NAME_SPACE, "Your Institute Profile Rejected");
        res.status(200).send("Your Institute Profile Rejected");
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
                data:<any> {
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

