import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { courseSchema } from "../models/courseModel";

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
                teacher: {
                    include: {
                        institute_teacher: true,
                        user: true
                    }
                },
                homework:
                {
                    where: {
                        isActive: true
                    }
                }
                ,
                notes:
                {
                    where: {
                        isActive: true
                    }
                }
                ,
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
                            include: {
                                parent: true,
                                user: true
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
                        parent: true,
                        user: true
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

    try {
        const data = await prisma.course.update({
            where: {
                course_id: Number(req.params.id)
            },
            data: {
                description: req.body.description,
                price: req.body.price,
                grade: req.body.grade,
                subject: req.body.subject
            }

        })
        res.status(200).send(data)
    } catch (error: any) {
        res.status(500).send(error.message);
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
    const { error, value } = courseSchema.validate(req.body);

    if (!error) {
        try {
            // @ts-ignore
            const { teacher_id, first_name, last_name } = await prisma.teacher.findUnique({
                where: {
                    user_id: req.body.user_id
                },
                select: {
                    teacher_id: true,
                    first_name: true,
                    last_name: true
                }
            })
            console.log(teacher_id)

            // @ts-ignore
            const data = await prisma.course.create({
                data: {
                    course_name: req.body.subject + " for " + req.body.grade + " in " + req.body.medium + " medium by " + first_name + " " + last_name,
                    description: req.body.description,
                    price: req.body.price,
                    day: req.body.day,
                    grade: req.body.grade,
                    subject: req.body.subject,
                    start_date: req.body.start_date,
                    end_date: req.body.end_date,
                    start_time: req.body.start_time,
                    end_time: req.body.end_time,
                    isActive: true,
                    medium: req.body.medium,
                    created_date: String(new Date()),
                    teacher_id: teacher_id,
                    image_url: req.body.image_url
                }
            })
            // console.log(data.course_id);
            const added_course_id = data.course_id;
            if (req.body.institute != "NoInstitute") {
                const add_institute_course = await prisma.institute_course.create({
                    data: {
                        institute_id: req.body.institute,
                        course_id: added_course_id,
                        isActive: true
                    }
                })
                res.status(200).send(add_institute_course);
            } else {
                res.status(200).send(data)
            }
        } catch (error: any) {
            res.status(500).send(error.message);
        }
    } else {
        res.status(500).send(error.details[0].message);
    }
}

export const unrollCourseStudents = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const { student_id } = await prisma.student.findFirst({
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
