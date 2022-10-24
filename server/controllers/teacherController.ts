import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client'
import {teacherSchema} from "../models/teacherModel";
import logger from "../utils/logger";

const prisma = new PrismaClient()
const NAME_SPACE = "Teacher"

export const getTeachers = async (req: Request, res: Response) => {

    try {
        const data = await prisma.teacher.findMany()
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTeacherByID = async (req: Request, res: Response) => {

    console.log(req.params)
    try {
        const data = await prisma.teacher.findMany({
            where: {
                teacher_id: Number(req.params.id)
            },
            include: {
                user: true,
                course: true
            }
        })
        logger.info(NAME_SPACE, data[0].user_id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTeacherByAuthID = async (req: Request, res: Response) => {

    console.log(req.params)
    try {
        const data = await prisma.teacher.findMany({
            where: {
                user_id: req.params.id
            },
            include: {
                user: true,
                course: true
            }
        })
        logger.info(NAME_SPACE, data[0].user_id)
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTeacherByUsername = async (req: Request, res: Response) => {

    try {
        const data = await prisma.user.findMany({
            where: {
                username: req.params.username
            },
            include: {
                teacher: true
            }

        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTeacherUpcomingClasses = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {teacher_id} = await prisma.teacher.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                teacher_id: true
            }
        })

        const data = await prisma.teacher_class.findMany({
            take: 3,
            where: {
                teacher_id: teacher_id,
                date: {
                    gte: new Date()
                },
            },
            orderBy: {
                date: "asc"
            },
            include: {course: true}
        })
        console.log(data);
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTeacherCourses = async (req: Request, res: Response) => {

    try {
        const data = await prisma.teacher.findMany({
            where: {
                user_id: req.params.id
            },
            include: {course: true}
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getTeacherInstitutes = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {teacher_id} = await prisma.teacher.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                teacher_id: true
            }
        })

        // @ts-ignore
        const data = await prisma.institute_teacher.findMany({
            where: {
                teacher_id: teacher_id,
                status: "active",
                isActive: true
            },
            include: {institute: true}
        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const getTeacherPendingInstitutes = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {teacher_id} = await prisma.teacher.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                teacher_id: true
            }
        })

        // @ts-ignore
        const data = await prisma.teacher_requests.findMany({
            where: {
                teacher_id: teacher_id,
                isActive: true,
                request_status: "pending"
            },
            include: {
                institute: true
            }
        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const acceptInstituteRequest = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {teacher_id} = await prisma.teacher.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                teacher_id: true
            }
        })
        // console.log(req.body);
        const institute_id = req.body.institute_id;
        const request_time = req.body.request_time;

        // @ts-ignore
        const data = await prisma.teacher_requests.update({
            where: {
                institute_id_teacher_id_date: {
                    institute_id: institute_id,
                    teacher_id: teacher_id,
                    date: request_time
                }
            },
            data: {
                request_status: "accepted"
            }
        })


        const institute_teacher = await prisma.institute_teacher.create({
            data: {
                institute_id: institute_id,
                teacher_id: teacher_id,
                isActive: true,
                status: "active"
            }
        })
        res.status(200).send(institute_teacher)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const rejectInstituteRequest = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {teacher_id} = await prisma.teacher.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                teacher_id: true
            }
        })
        // console.log(req.body);
        const institute_id = req.body.institute_id;
        const request_time = req.body.request_time;

        // @ts-ignore
        const data = await prisma.teacher_requests.update({
            where: {
                institute_id_teacher_id_date: {
                    institute_id: institute_id,
                    teacher_id: teacher_id,
                    date: request_time
                }
            },
            data: {
                request_status: "rejected"
            }
        })

        res.status(200).send("Successfully Rejected The Request")
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const createTeacher = async (req: Request, res: Response) => {

    const {error, value} = teacherSchema.validate(req.body);
    if (!error) {
        try {
            const data = await prisma.user.create({
                data: {
                    user_id: req.body.user_id,
                    username: req.body.username,
                    type: "teacher",
                    profile_image: req.body.profile_image,
                    isActive: true,
                    teacher: {
                        create: {
                            title: req.body.title,
                            first_name: req.body.first_name,
                            last_name: req.body.last_name,
                            contact_no: req.body.contact_no,
                            description: req.body.description,
                            qualification: req.body.qualification,
                            account_name: req.body.account_name,
                            bank_name: req.body.bank_name,
                            branch_name: req.body.branch_name,
                            account_no: req.body.account_no,
                            isActive: true,
                            verification: 'pending',
                            applied_date: new Date().toJSON().slice(0, 10)
                        }
                    }
                }
            })
            logger.info(NAME_SPACE, "Your Tutor Profile Successfully Created");
            res.status(200).send("Your Tutor Profile Successfully Created");
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

export const getStudentCountAnalytics = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {teacher_id} = await prisma.teacher.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                teacher_id: true
            }
        })

        // @ts-ignore
        const courses = await prisma.course.findMany({
            where: {
                teacher_id: teacher_id,
            },
            include: {
                student_course: {
                    where: {
                        status: 'accepted'
                    }
                }
            }
        })
        // console.log(courses);

        res.status(200).send(courses)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const getAvgAttendanceAnalytics = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {teacher_id} = await prisma.teacher.findUnique({
            where: {
                user_id: req.params.id
            },
            select: {
                teacher_id: true
            }
        })

        // @ts-ignore
        const courses = await prisma.course.findMany({
            where: {
                teacher_id: teacher_id
            },
            include: {
                student_class: {
                    where: {
                        status: 'ended'
                    }
                }
            }
        })
        // console.log(courses);
        res.status(200).send(courses)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}
