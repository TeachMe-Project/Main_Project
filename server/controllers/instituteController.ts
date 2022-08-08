import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client'
import {instituteSchema} from "../models/instituteModel";
import logger from "../utils/logger";
import {string} from "joi";

const prisma = new PrismaClient()
const NAME_SPACE = "Institute";

export const getInstitutes = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute.findMany()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}
export const getInstituteByID = async (req: Request, res: Response) => {

    console.log(req.params)
    try {
        const data = await prisma.institute.findMany({
            where: {
                user_id: req.params.id
            },
            include: {
                user: true
            }
        })
        logger.info(NAME_SPACE, data[0].user_id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getInstituteByName = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute.findMany({
            where: {
                institute_name: req.params.name
            }
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateInstituteDetails = async (req: Request, res: Response) => {

    try {

        const data = await prisma.institute.update({
            where: {
                institute_id: Number(req.params.id)
            },
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
export const getAllInstituteCourses = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute_teacher.findMany({
            where: {
                institute_id: Number(req.params.id)
            },
            include: {course: true}
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const createInstitute = async (req: Request, res: Response) => {

    const {error, value} = instituteSchema.validate(req.body);
    if (!error) {
        try {
            const data = await prisma.user.create({
                data: {
                    user_id: req.body.user_id,
                    username: req.body.username,
                    type: "institute",
                    profile_image: req.body.profile_image,
                    isActive: true,
                    institute: {
                        create: {
                            institute_name: req.body.institute_name,
                            owner_name:req.body.owner_name,
                            location:req.body.location,
                            address:req.body.address,
                            contact_no: req.body.contact_no,
                            description: req.body.description,
                            account_name: req.body.account_name,
                            account_no: req.body.account_no,
                            bank_name: req.body.bank_name,
                            branch_name: req.body.branch_name,
                            isActive: true,
                            verification_code:'',
                            verification:'pending',
                            applied_date: new Date().toJSON().slice(0, 10)
                        }
                    }
                }
            })
            logger.info(NAME_SPACE, "Your Institute Profile Successfully Created");
            res.status(200).send("Your Institute Profile Successfully Created");
        } catch (error: any) {
            logger.error(NAME_SPACE, error.message);
            res.status(500).send(error);
        }
    } else {
            logger.error(NAME_SPACE, req.body.institute_name)
        logger.error(NAME_SPACE, error.message)
        res.status(500).send(error.details[0].message);
    }
}


