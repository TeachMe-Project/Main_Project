import {Request, Response} from "express";
import {PrismaClient} from '@prisma/client'
import {courseSchema} from "../models/courseModel";

const prisma = new PrismaClient()

export const getCourses = async (req: Request, res: Response) => {

    try {
        const data = await prisma.course.findMany({
            include: {
                teacher: true,
                
            }
        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}


export const getCourseByID = async (req: Request, res: Response) => {


    try {
        const data = await prisma.course.findMany({
            where: {
                course_id: Number(req.params.id)
            }

        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
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
    } catch (error) {
        res.status(500).send(error);
    }
}

export  const updateCourseDetails = async (req: Request, res: Response) => {

    const {error, value} = courseSchema.validate(req.body);

    if (!error) {
        try {
            const data = await prisma.course.update({
                where: {
                    course_id: Number(req.params.id)
                },
                data: {
                    course_name: req.body.course_name,
                    grade: req.body.grade,
                    subject: req.body.subject,
                    description: req.body.description,
                    duration: req.body.duration,
                    start_date: req.body.start_date,
                    start_time: req.body.start_time,
                    end_time: req.body.end_time,
                    day: req.body.day,
                    course_id: req.body.course_id,
                    teacher_id: req.body.teacher_id,
                    price: req.body.price


                }

            })
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error);
        }
    } else {
        res.status(400).send(error);
    }
}

export const removeCourse = async (req: Request, res: Response) => {

        try {
            const data = await prisma.course.update({
                where: {
                    course_id: Number(req.params.id)
                },
                data: {
                    is_active: false
                }

            })
            res.status(200).send(data)
        } catch (error) {
            res.status(500).send(error);
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
    } catch (error) {
        res.status(500).send(error);
    }
}




export const getCourseByInstituteName = async (req: Request, res: Response) => {

    try {
        const data = await prisma.institute.findMany({
            where: {
                institute_name: req.params.instituteName

            },
            select: {
                institute_teacher: {
                    select: {
                        course: {
                            select: {
                                course_name: true,
                            }
                        }
                    }
                }
            }


        })
        res.status(200).send(data)
    } catch (error) {
        res.status(500).send(error);
    }
}


export const createCourse = async (req: Request, res: Response) => {
    const {error, value} = courseSchema.validate(req.body);

    if (!error) {
        try {
            const data = await prisma.course.create({
                data: {
                    course_name: req.body.course_name,
                    course_description: req.body.course_description,
                    course_image: req.body.course_image
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

