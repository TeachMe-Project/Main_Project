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
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const current_date = new Date();
    let current_month = month[current_date.getMonth()];
    console.log(current_month)
    for (let i = 0; i < student_course.length; i++) {

        const getCurrentPayment = await prisma.student_payment.findMany({
            where:{
                student_id: student_course[i].student_id,
                course_id: student_course[i].course_id,
                month:{
                    equals: current_month
                }
            }
        })
        console.log("Current Payment")
        console.log(getCurrentPayment);
        if (getCurrentPayment.length == 0){
            const insert_payment = await prisma.student_payment.create({
                data:{
                    course_id: student_course[i].course_id,
                    student_id: student_course[i].student_id,
                    month: current_month,
                    payment_status:"unpaid",
                    isActive: true
                }
            })
            console.log("Insert payment")
            console.log(insert_payment);
        }

    }
}