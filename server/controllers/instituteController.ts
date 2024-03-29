import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client'
import {instituteSchema, instituteTeacherRequest, instituteUpdateSchema} from "../models/instituteModel";
import logger from "../utils/logger";

const prisma = new PrismaClient()
const NAME_SPACE = "Institute";

export const getInstitutes = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute.findMany()
        res.status(200).send(data)
    } catch (error:any) {
        res.status(500).send(error.message);
    }
}

export const getInstituteByID = async (req: Request, res: Response) => {

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
    } catch (error:any) {
        res.status(500).send(error.message);
    }
}

export const getInstituteByInstituteID = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute.findMany({
            where: {
                institute_id: Number(req.params.id)
            },
            include: {
                user: true
            }
        })
        logger.info(NAME_SPACE, data[0].user_id)
        res.status(200).json(data)
    } catch (error:any) {
        res.status(500).send(error.message);
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
    } catch (error:any) {
        res.status(500).send(error.message);
    }
}

export const updateInstituteDetails = async (req: Request, res: Response) => {

    const {error, value} = instituteUpdateSchema.validate(req.body);
    if (!error) {
        console.log(req.body)
        try {
            const data = await prisma.institute.update({
                where: {
                    user_id: req.body.user_id
                },
                data: {
                    institute_name: req.body.institute_name,
                    owner_name: req.body.owner_name,
                    location: req.body.location,
                    address: req.body.address,
                    contact_no: req.body.contact_no,
                    description: req.body.description,
                    account_name: req.body.account_name,
                    account_no: req.body.account_no,
                    bank_name: req.body.bank_name,
                    branch_name: req.body.branch_name
                }
            })
            res.status(200).send(data)
            logger.info(NAME_SPACE, "Your Institute Profile Successfully Updated");
        } catch (error:any) {
            res.status(500).send(error);
            logger.error(NAME_SPACE, error.message);

        }
    }
}

export const getAllInstituteCourses = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {institute_id} = await prisma.institute.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                institute_id: true
            }
        })

        const data: any = await prisma.institute_course.findMany({
            where: {
                institute_id: Number(institute_id),
                isActive: true
            },
            include: {
                course: {
                    include: {
                        teacher: true,
                    }
                }
            }
        })
        res.status(200).send(data)
    } catch (error:any) {
        res.status(500).send(error.message);
    }
}

export const getAllInstituteTeachers = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {institute_id} = await prisma.institute.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                institute_id: true
            }
        })

        const data = await prisma.institute_teacher.findMany({
            where: {
                institute_id: Number(institute_id),
                isActive: true,
                status: 'active'
            },
            include: {
                teacher: {
                    include: {
                        user: true
                    }
                }
            }
        })
        res.status(200).send(data)
    } catch (error:any) {
        res.status(500).send(error.message);
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
                            owner_name: req.body.owner_name,
                            location: req.body.location,
                            address: req.body.address,
                            contact_no: req.body.contact_no,
                            description: req.body.description,
                            account_name: req.body.account_name,
                            account_no: req.body.account_no,
                            bank_name: req.body.bank_name,
                            branch_name: req.body.branch_name,
                            isActive: true,
                            verification_code: '',
                            verification: 'pending',
                            applied_date: new Date().toJSON().slice(0, 10)
                        }
                    }
                }
            })
            logger.info(NAME_SPACE, "Your Institute Profile Successfully Created");
            res.status(200).send("Your Institute Profile Successfully Created");
        } catch (error:any) {
            logger.error(NAME_SPACE, error.message);
            res.status(500).send(error.message);
        }
    } else {
        logger.error(NAME_SPACE, req.body.institute_name)
        logger.error(NAME_SPACE, error.message)
        res.status(500).send(error.details[0].message);
    }
}

export const searchTeacher = async (req: Request, res: Response) => {

    try {
        const data = await prisma.user.findMany({
            where: {
                username: {
                    contains: req.body.teacher_email,
                },
                type: "teacher"
            },
            include: {
                teacher: true
            }
        })
        res.status(200).send(data)
    } catch (error:any) {
        res.status(500).send(error.message);
    }
}


export const createTeacherRequest = async (req: Request, res: Response) => {

    const {error, value} = instituteTeacherRequest.validate(req.body);
    if (!error) {
        try {
            // @ts-ignore
            const {institute_id} = await prisma.institute.findUnique({
                where: {
                    user_id: req.params.id
                },
                select: {
                    institute_id: true
                }
            })
            const data: any = await prisma.teacher_requests.create({
                data: {
                    institute_id: institute_id,
                    request_status: 'pending',
                    teacher_id: req.body.teacher_id,
                    isActive: true
                }
            })
            res.status(200).send(data)
        } catch (error:any) {
            res.status(500).send(error.message);
        }
    } else {
        logger.error(NAME_SPACE, req.body.institute_name)
        logger.error(NAME_SPACE, error.message)
        res.status(500).send(error.details[0].message);
    }
}

export const removeInstituteTeacher = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {institute_id} = await prisma.institute.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                institute_id: true
            }
        })
        console.log(institute_id)
        const teacher_id = Number(req.body.teacher_id);
        const data: any = await prisma.institute_teacher.update({
            where:{
                institute_id_teacher_id:{
                    institute_id: institute_id,
                    teacher_id: teacher_id
                }
            },
            data: {
                status: "inactive"
            }
        })
        console.log(data)
        res.status(200).send(data)
    } catch (error:any) {
        res.status(500).send(error.message);
    }

}
