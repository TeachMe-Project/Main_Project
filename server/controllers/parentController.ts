import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";
import {parentSchema} from "../models/parentModel";
import logger from "../utils/logger";

const prisma = new PrismaClient();
const NAME_SPACE = "Parent";
export const getParents = async (req: Request, res: Response) => {

    try {
        const data = await prisma.parent.findMany({
            include: {
                user: true
            }
        });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};
export const getParentByID = async (req: Request, res: Response) => {


    try {
        const data = await prisma.user.findUnique({
            where: {
                user_id: req.params.id
            },
            include: {
                parent: true
            }
        });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const getParentByAuthId = async (req: Request, res: Response) => {

    console.log(req.params);
    try {
        const data = await prisma.parent.findMany({
            where: {
                user_id: req.body.id
            }
        });
        // @ts-ignore
        logger.info(NAME_SPACE, data[0].parent_id);
        res.status(200).json(data[0].parent_id);
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error.message);
    }
};

export const updateParent = async (req: Request, res: Response) => {

    console.log(req.params);
    try {
        const user_id = req.body.user_id;
        // @ts-ignore
        const {parent_id} = await prisma.parent.findFirst({
            where: {
                user_id: user_id
            },
            select: {
                parent_id: true
            }
        });

        const data = await prisma.parent.update({
            where: {
                parent_id: parent_id
            },
            data: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                mobile_no: req.body.mobile_no
            }
        });

        // @ts-ignore
        logger.info(NAME_SPACE, "Parent Updated");
        res.status(200).send("Parent Updated");
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error.message);
    }
};


export const parentDoPayment = async (req: Request, res: Response) => {

    try {
        const data = await prisma.parent_payment.create({
            data: <any>{
                payment_time: req.body.payment_time,
                amount: req.body.amount,
                student_id: Number(req.body.student_id),
                month: req.body.month,
                year: req.body.year
            }
        });
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};
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
                            isActive: true
                        }
                    }
                }
            });
            logger.info(NAME_SPACE, "Your Profile Successfully Created");
            res.status(200).send("Your Profile Successfully Created");
        } catch (error: any) {
            logger.error(NAME_SPACE, error.message);
            res.status(500).send(error.message);
        }
    } else {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error.details[0].message);
    }
};

export const getParentCourseRequest = async (req: Request, res: Response) => {

    console.log(req.params);
    try {
        // @ts-ignore
        const {parent_id} = await prisma.parent.findFirst({
            where: {
                user_id: req.params.id
            },
            select: {
                parent_id: true
            }
        });
        // @ts-ignore
        const {student_id} = await prisma.student.findFirst({
            where: {
                parent_id: parent_id
            },
            select: {
                student_id: true
            }
        });

        const data = await prisma.student_course.findMany({
            where: {
                student_id: student_id,
                status: "pending"
            },
            include: {
                course: {
                    include: {
                        teacher: true
                    }
                }
            }
        });
        console.log();
        // @ts-ignore
        // logger.info(NAME_SPACE, data[0].parent_id);
        res.status(200).send(data);
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error.message);
    }
};

export const acceptCourseRequest = async (req: Request, res: Response) => {

    try {
        const data = await prisma.student_course.update({
            where: {
                student_id_course_id: {
                    course_id: req.body.course_id,
                    student_id: req.body.student_id
                }
            },
            data: {
                status: "accepted"
            }
        });

        res.status(200).send(data);
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error.message);
    }
};

export const rejectCourseRequest = async (req: Request, res: Response) => {

    try {
        const data = await prisma.student_course.update({
            where: {
                student_id_course_id: {
                    course_id: req.body.course_id,
                    student_id: req.body.student_id
                }
            },
            data: {
                status: "rejected"
            }
        });

        res.status(200).send(data);
    } catch
        (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error.message);
    }
}

export const getParentUpComingPayment = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {parent_id} = await prisma.parent.findFirst({
            where: {
                user_id: req.params.id
            },
            select: {
                parent_id: true
            }
        });
        console.log(parent_id)
        // @ts-ignore
        const {student_id} = await prisma.student.findFirst({
            where: {
                parent_id: parent_id
            },
            select: {
                student_id: true
            }
        });
        console.log(student_id)
        const data = await prisma.student_payment.findMany(
            {
                where: {
                  student_id: student_id,
                  payment_status: "unpaid"
                },
                include:{
                    course: {
                        include:{
                            teacher:true
                        }
                    }
                }
            })
        // console.log(data);
        // @ts-ignore
        // logger.info(NAME_SPACE, data[0].parent_id);
        res.status(200).send(data);
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error.message);
    }
};

export const getStudentProgress = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {parent_id} = await prisma.parent.findFirst({
            where: {
                user_id: req.params.id
            },
            select: {
                parent_id: true
            }
        });
        console.log(parent_id)
        // @ts-ignore
        const {student_id} = await prisma.student.findFirst({
            where: {
                parent_id: parent_id
            },
            select: {
                student_id: true
            }
        });
        console.log(student_id)
        const data = await prisma.student_class.findMany(
            {
                where: {
                    student_id: student_id,
                    status: "ended"
                },
                orderBy:{
                  date:'desc'
                },
                include:{
                    course: true
                }
            })
        console.log(data);
        // @ts-ignore
        // logger.info(NAME_SPACE, data[0].parent_id);
        res.status(200).send(data);
    } catch (error: any) {
        logger.error(NAME_SPACE, error.message);
        res.status(500).send(error.message);
    }
};

export const getStudentUpcomingClass = async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const {parent_id} = await prisma.parent.findFirst({
            where: {
                user_id: req.params.id
            },
            select: {
                parent_id: true
            }
        });

        // @ts-ignore
        const { student_id } = await prisma.student.findFirst({
            where: {
                parent_id: parent_id
            },
            select: {
                student_id: true
            }
        });


        const student_courses = await prisma.student_course.findMany({
            where: {
                student_id: student_id,
                isActive: true,
                status: "accepted"
            },
            select: {
                course_id: true
            }
        });
        console.log(student_courses);
        let upcoming_class = [];
        for await (const course of student_courses) {
            const data = await prisma.teacher_class.findFirst(
                {
                    where: {
                        course_id: course.course_id,
                        date: {
                            gte: new Date()
                        },
                    },
                    include:{
                        course:{
                            include:{
                            teacher: true
                            }
                        }
                    }
                }
            );
            console.log(data);
            if (data) {
                upcoming_class.push(data);
            }
        }
        // console.log(upcoming_class)
        res.status(200).send(upcoming_class);
    } catch (error) {
        res.status(500).send(error);
    }
};