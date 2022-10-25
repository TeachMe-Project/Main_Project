import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const classSchedule = async () => {
    let data = await prisma.course.findMany();

    for (let i = 0; i < data.length; i++) {

        if (data[i].created_date == '-') {

            let courseId = data[i].course_id;
            // console.log(courseId)
            let teacherId = data[i].teacher_id;
            // console.log(teacherId)
            let startAt = data[i].start_time;
            // console.log(startAt)
            let endAt = data[i].end_time;
            console.log(data[i].start_date)
            let newDate = new Date(data[i].start_date);
            // console.log(newDate)
            let nextWeek = new Date(newDate.getTime() + 7 * 24 * 60 * 60 * 1000)
            // console.log(nextWeek)
            let existClasses = await prisma.teacher_class.findMany({
                where: {
                    date: {
                        equals: nextWeek
                    },
                    course_id: {
                        equals: courseId
                    }
                }
            });
            if (existClasses.length == 0) {
                // console.log("No class")
                let res = await prisma.teacher_class.create({
                    data: <any>{
                        course_id: courseId,
                        teacher_id: teacherId,
                        date: nextWeek,
                        start_time: startAt,
                        end_time: endAt,
                        isActive: true,
                        getToStudentTable: "-"
                    }
                })
                // console.log(res)
            } else {
                console.log(existClasses)
            }
            let update_date = await prisma.course.update({
                where: {
                    course_id: courseId,
                },
                data: {
                    created_date: nextWeek.toUTCString(),
                },
            });

            // nextWeek = new Date(newDate.getTime() + 14 * 24 * 60 * 60 * 1000)
            // console.log(nextWeek)
        } else {
            let courseId = data[i].course_id;
            // console.log(courseId)
            let teacherId = data[i].teacher_id;
            // console.log(teacherId)
            let startAt = data[i].start_time;
            // console.log(startAt)
            let endAt = data[i].end_time;
            // console.log(endAt)
            // console.log(data[i].start_date)
            // @ts-ignore
            let newDate = new Date(data[i].created_date);
            // console.log(newDate)
            let nextWeek = new Date(newDate.getTime() + 7 * 24 * 60 * 60 * 1000)
            // console.log(nextWeek)
            let existClasses = await prisma.teacher_class.findMany({
                where: {
                    date: {
                        equals: nextWeek
                    },
                    course_id: {
                        equals: courseId
                    }
                }
            });
            if (existClasses.length == 0) {
                // console.log("No class")
                let res = await prisma.teacher_class.create({
                    data: <any>{
                        course_id: courseId,
                        teacher_id: teacherId,
                        date: nextWeek,
                        start_time: startAt,
                        end_time: endAt,
                        isActive: true
                    }
                })
                // console.log(res)
            } else {
                console.log(existClasses)
            }
            let update_date = await prisma.course.update({
                where: {
                    course_id: courseId,
                },
                data: {
                    created_date: nextWeek.toUTCString(),
                },
            });

        }

    }
    console.log("Class Data added")
}

export const payment_schedule = async () => {
    let student_course = await prisma.student_course.findMany({
            include: {
                course: {
                    select: {
                        price: true
                    }
                },
                student: {
                    select: {
                        parent_id: true
                    }
                }
            }
        }
    );
    console.log(student_course)
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const current_date = new Date();
    let current_month = month[current_date.getMonth()];
    console.log(current_month)
    for (let i = 0; i < student_course.length; i++) {

        const getCurrentPayment = await prisma.student_payment.findMany({
            where: {
                student_id: student_course[i].student_id,
                course_id: student_course[i].course_id,
                month: {
                    equals: current_month
                }
            }
        })
        console.log("Current Payment")
        console.log(getCurrentPayment);
        if (getCurrentPayment.length == 0) {
            const insert_payment = await prisma.student_payment.create({
                data: {
                    course_id: student_course[i].course_id,
                    student_id: student_course[i].student_id,
                    month: current_month,
                    payment_status: "unpaid",
                    isActive: true
                }
            })
            console.log("Insert payment")
            console.log(insert_payment);
        }

    }
}

export const studentClassSchedule = async () => {
    let data = await prisma.teacher_class.findMany();

    for (let i = 0; i < data.length; i++) {

        let teacherClassId = data[i].class_id;
        let courseId = data[i].course_id;
        let teacherId = data[i].teacher_id;
        let date = data[i].date;
        let startTime = data[i].start_time;
        let endTime = data[i].end_time;
        let getToStudentTable = data[i].getToStudentTable;

        let courseStudent = await prisma.student_course.findMany({
            where: {
                course_id: courseId
            },
            include: {
                student: {
                    select: {
                        student_id: true,
                        user_id: true
                    },
                }
            }
        })
        console.log("Students For")
        // console.log(courseId)
        // console.log(teacherClassId)
        // console.log(courseStudent)
        console.log(getToStudentTable)
        if (getToStudentTable == null) {
            for (let i = 0; i < courseStudent.length; i++) {
                // console.log("Course Error")
                // console.log(teacherClassId)
                // console.log(courseStudent)
                let res = await prisma.student_class.create({
                    data: {
                        class_id: teacherClassId,
                        student_id: courseStudent[i].student_id,
                        course_id: courseStudent[i].course_id,
                        date: date,
                        start_time: startTime,
                        end_time: endTime,
                        usedApps: "-",
                        status: "upcoming",
                        isActive: true,
                        isStarted: false,
                        online_status: "offline",
                        user_id: courseStudent[i].student.user_id
                    }
                })
                console.log("Data Added")
            }

            // console.log(res)

            let update = await prisma.teacher_class.update({
                where: {
                    class_id: teacherClassId
                },
                data: {
                    getToStudentTable: new Date().toDateString()
                },
            });
            console.log("Updated");
            console.log(update)
        }

    }

}