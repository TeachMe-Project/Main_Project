import { Request, Response } from "express";
import { PrismaClient } from '@prisma/client'
import { studentSchema } from "../models/studentModel";
import logger from "../utils/logger";
import userSchema from "../models/userModel";
import test from "node:test";

const prisma = new PrismaClient()
const NAME_SPACE = "Student"
export const getStudents = async (req: Request, res: Response) => {

  try {
    const data = await prisma.student.findMany({
      include: {
        parent: true
      }
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getStudentByID = async (req: Request, res: Response) => {


  try {
    const data = await prisma.student.findMany({
      where: {
        user_id: req.params.id
      },
      include: {
        user: true,
        parent: {
          include: {
            user: true
          }
        },
      }
    })
    res.status(200).send(data)
  } catch (error) {
    res.status(500).send(error);
  }
}


export const getStudentUpcomingClasses = async (req: Request, res: Response) => {

  try {

    // @ts-ignore
    const { student_id } = await prisma.student.findFirst({
      where: {
        user_id: req.params.id
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
    // console.log(student_courses);
    let upcoming_class = [];
    for await (const course of student_courses) {
      const data = await prisma.teacher_class.findFirst(
          {
            where: {
              course_id: course.course_id,
              date: {
                gte: new Date()
              }
            },
            include:{
              teacher:true,
              course:true
            }
          }
      );
      // console.log(data);
      if (data) {
        upcoming_class.push(data);
      }
    }
    res.status(200).send(upcoming_class);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getStudentTutors = async (req: Request, res: Response) => {

  try {
    // @ts-ignore
    const { student_id } = await prisma.student.findFirst({
      where: {
        user_id: req.params.id
      },
      select: {
        student_id: true
      }
    });


    const data = await prisma.student_course.findMany({
      where: {
        student_id: student_id,
        isActive: true,
        status: "accepted"
      },
      include: {
        course: {
          include: {
            teacher: {
              include: {
                user: true
              }
            }
          }
        }
      }
    })

    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getStudentCourses = async (req: Request, res: Response) => {

  try {
    // @ts-ignore
    const { student_id } = await prisma.student.findFirst({
      where: {

        user_id: req.params.id
      },
      select: {
        student_id: true
      }
    });

    const data = await prisma.student_course.findMany(
        {
          where: {
            student_id: student_id,
            isActive: true
          },
          include: { course: true }

        }
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const getStudentUpcomingPayments = async (req: Request, res: Response) => {

  try {
    const data = await prisma.student_payment.findMany(
        {
          where: { student_id: Number(req.params.id), payment_status: "unpaid" },


        }
    );
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};
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


export const searchCourses = async (req: Request, res: Response) => {


  // console.log(req.body);
  try {
    const data = await prisma.course.findMany(
        {
          where: {
            description: {
              contains: req.body.data
            }
          },
          include: {
            teacher: true
          }
        }
    );
    res.status(200).send(data);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
};

export const makeCourseRequest = async (req: Request, res: Response) => {

  const course_id = Number(req.body.course_id)
  try {
    // @ts-ignore
    const { student_id } = await prisma.student.findFirst({
      where: {
        user_id: req.body.user_id
      },
      select: {
        student_id: true
      }
    });

    const existed = await prisma.student_course.findMany({
      where: {

        course_id: course_id,
        student_id: student_id
      }
    });

    if (existed.length == 0) {
      const data = await prisma.student_course.create(
          {
            data: {
              student_id: student_id,
              course_id: course_id,
              isActive: true,
              status: "pending"
            }
          }
      );
      res.status(200).send(data);
    } else {
      res.status(200).send("Course Already Added");
    }
  } catch (error: any) {
    console.log(error)
    res.status(500).send(error.message);
  }
};


export const insertUsedApps = async (req: Request, res: Response) => {
  console.log(req.params.id)
//   console.log("class"+req.body.class_id)

  // console.log(req.body.class_id)
  try {

    const { student_id } = await prisma.student.findFirst({
      where: {
        user_id: req.params.id
      },
      select: {
        student_id: true
      }
    });
    console.log("student"+student_id)

    const data = await prisma.student_class.updateMany(
        {
          where: {

            user_id:req.params.id

          },
          data: {
            usedApps:req.body.apps
          }
        }
    )
    res.status(200).send(data)
  } catch (error:any) {
    res.status(500).send(error.message);
  }
}

export const getUsedApps = async (req: Request, res: Response) => {

  // console.log("test");
  // console.log(req.body.class_id);
  // console.log(req.body.course_id);
  let apps = [
    { name: "Facebook.exe", students: [""], count: 0 },
    { name: "WhatsApp.exe", students: [""], count: 0 },
    { name: "Telegram.exe", students: [""], count: 0 },
    { name: "Spotify.exe", students: [""], count: 0 },
    { name: "chrome.exe", students: [""], count: 0 },
    { name: "obs64.exe", students: [""], count: 0 }
  ]

  try {
    const data = await prisma.student_class.findMany({

      where: {
        class_id: Number(req.body.class_id),
        course_id: Number(req.body.course_id)
      },

      select: {
        class_id: true,
        course_id: true,
        usedApps: true,
        student: true
      },

    })


    for (let appIndex = 0; appIndex < apps.length; appIndex++) {
      for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {

        // @ts-ignore
        let stdentsApps = data[dataIndex].usedApps.split(",")
        for (let studentAppsIndex = 0; studentAppsIndex < stdentsApps.length; studentAppsIndex++) {
          if (apps[appIndex].name == stdentsApps[studentAppsIndex]) {
            apps[appIndex].count += 1
            apps[appIndex].students.push(data[dataIndex].student.first_name+" "+ data[dataIndex].student.last_name)
          }
        }

      }


    }

    res.status(200).send(apps)
  } catch (error:any) {
    res.status(500).send(error.message);
  }
}