import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { studentSchema } from "../models/studentModel";
import logger from "../utils/logger";

const prisma = new PrismaClient()
const NAME_SPACE = "Student"
export const getStudents = async (req: Request, res: Response) => {

    try {
        const data = await prisma.student.findMany({
            include: {
                parent: true
            }
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentByID = async (req: Request, res: Response) => {


    try {
        const data = await prisma.student.findMany({
            where: {
                user_id: req.params.id
            },
            include: {
                user: true,
            }
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}


export const getStudentUpcomingClasses = async (req: Request, res: Response) => {

    try {
        const data = await prisma.renamedclass.findMany(
            {
                where: { student_id: Number(req.params.id) },
                include: {
                    course: {
                        include: {
                            teacher: true,
                        }
                    }
                }

            }
        )
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentCourses = async (req: Request, res: Response) => {

    try {
        const data = await prisma.student_course.findMany(
            {
                where: { student_id: Number(req.params.id) },
                include: {
                    course: {
                        include: {
                            teacher: true
                        }
                    },
                }
            }
        )
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentHomeworks = async (req: Request, res: Response) => {

    try {
        const data = await prisma.homework.findMany(
            {
                where: { student_id: Number(req.params.id) },
                include: { course: true },

            }
        )
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentNotes = async (req: Request, res: Response) => {

    try {
        const data = await prisma.notes.findMany(
            {
                where: { student_id: Number(req.params.id) },
                include: { course: true },

            }
        )
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getStudentParentDetails = async (req: Request, res: Response) => {

    try {
        const data = await prisma.student.findMany(
            {
                where: { user_id: req.params.id },
                include: {
                    parent: {
                        include: {
                            user: true
                        }
                    },
                }

            }
        )
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}
export const getStudentUpcomingPayments = async (req: Request, res: Response) => {

    try {
        const data = await prisma.student_payment.findMany(
            {
                where: { student_id: Number(req.params.id), payment_status: "unpaid" },


            }
        )
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}
export const createStudent = async (req: Request, res: Response) => {
    const { error, value } = studentSchema.validate(req.body);
    const parent_id = Number(req.body.parent_id);

    if (!error) {
        try {
            const data = await prisma.user.create({
                data: {
                    user_id: req.body.user_id,
                    username: req.body.username,
                    type: "student",
                    profile_image: req.body.profile_image,
                    isActive: true,
                    student: {
                        create: {
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            school: 'ss',
                            grade: req.body.grade,
                            parent_id: parent_id,
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