import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client'
import {courseSchema} from "../models/courseModel";

const prisma = new PrismaClient()

export const getCourses = async (req: Request, res: Response) => {

    try {
        const data = await prisma.course.findMany({
            where: {
                isActive: true,
            },
            include: {
                teacher: true,
            }
        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}


export const getCourseByID = async (req: Request, res: Response) => {


    try {
        const data = await prisma.course.findMany({
            where: {
                course_id: Number(req.params.id)
            },
            include: {
                teacher: true,
                homework: true,
                notes: true,
                teacher_class: {
                    where: {
                        date: {
                            gte: new Date()
                        }
                    }
                },
                student_course: {
                    include: {
                        student: {
                            include:{
                                parent: true
                            }
                        }
                    }
                }
            }

        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const getCourseStudentByID = async (req: Request, res: Response) => {

    try {
        const data = await prisma.student_course.findMany({
            where: {
                course_id: Number(req.params.id)
            },
            include: {
                student: {
                    include: {
                        user: true,
                        parent: true
                    }
                }
            }

        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const getCourseUpcomingByID = async (req: Request, res: Response) => {

    try {
        const data = await prisma.teacher_class.findMany({
            where: {
                course_id: Number(req.params.id),
                date: {
                    gte: new Date()
                }
            },
        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const getCourseByGrade = async (req: Request, res: Response) => {

    try {
        const data = await prisma.course.findMany({
            where: {
                grade: req.params.grade
            }
        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const updateCourseDetails = async (req: Request, res: Response) => {

    const {error, value} = courseSchema.validate(req.body);

    if (!error) {
        try {
            const data = await prisma.course.update({
                where: {
                    course_id: Number(req.params.id)
                },
                data: {
                    course_name: req.body.course_name,
                    description: req.body.description,
                    teacher_id: req.body.teacher_id,
                    price: req.body.fee,
                    day: req.body.class_date,
                    grade: req.body.grade,
                    subject: req.body.subject,
                    start_date: req.body.start_date,
                    end_date: req.body.end_date,
                    start_time: req.body.start_time,
                    end_time: req.body.end_time,
                    medium: req.body.medium
                }

            })
            res.status(200).send(data)
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    } else {
        res.status(400).send(error.message);
    }
}

export const removeCourse = async (req: Request, res: Response) => {

    try {
        const data = await prisma.course.update({
            where: {
                course_id: Number(req.params.id)
            },
            data: <any>{
                is_active: false
            }

        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const getCourseBySubject = async (req: Request, res: Response) => {

    try {
        const data = await prisma.course.findMany({
            where: {
                subject: req.params.subject
            }
        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const getCourseByInstituteName = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute.findMany({
            where: {
                institute_name: req.params.instituteName

            },
            // select: {
            //     institute_teacher: {
            //         select: {
            //             course: {
            //                 select: {
            //                     course_name: true,
            //                 }
            //             }
            //         }
            //     }
            // }


        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}


export const createCourse = async (req: Request, res: Response) => {
    const {error, value} = courseSchema.validate(req.body);

    if (!error) {
        try {
            const data = await prisma.course.create({
                data:{
                    course_name: req.body.course_name,
                    description: req.body.description,
                    teacher_id: req.body.teacher_id,
                    price: req.body.fee,
                    day: req.body.class_date,
                    grade: req.body.grade,
                    subject: req.body.subject,
                    start_date: req.body.start_date,
                    end_date: req.body.end_date,
                    start_time: req.body.start_time,
                    end_time: req.body.end_time,
                    isActive: true,
                    medium: req.body.medium,
                    created_date: "-"
                }
            })
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error);
        }
    } else {
        res.status(500).send(error.details[0].message);
    }
}

export const unrollCourseStudents = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {student_id} = await prisma.student.findFirst({
            where: {
                user_id: req.params.id,
            },
            select: {
                student_id: true
            }
        });

        const course_id = req.body.course_id;
        const data = await prisma.student_course.update({
            where: {
                student_id_course_id: {
                    student_id: student_id,
                    course_id: course_id
                }
            },
            data: {
                isActive: false,
                status: "rejected"
            }
        })


        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
    }
}

export const getStudentPendingPayments = async (req: Request, res: Response) => {

    try {
        const data = await prisma.student_payment.findMany(
            {
                where: { course_id: Number(req.params.id), payment_status: "unpaid" },
            }
        )
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}
