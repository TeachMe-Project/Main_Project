import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export const classSchedule = async () => {
    let data = await prisma.course.findMany();

    for (let i = 0; i < data.length; i++) {

        if (data[i].created_date == '') {

            let courseId = data[i].course_id;
            // console.log(courseId)
            let teacherId = data[i].teacher_id;
            // console.log(teacherId)
            let startAt = data[i].start_time.toUTCString();
            startAt = startAt.substring(17, 22)
            // console.log(startAt)
            let endAt = data[i].end_time.toUTCString();
            endAt = endAt.substring(17, 22)
            console.log(endAt)
            // console.log(data[i].start_date)
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
        }
        else {
            let courseId = data[i].course_id;
            // console.log(courseId)
            let teacherId = data[i].teacher_id;
            // console.log(teacherId)
            let startAt = data[i].start_time.toUTCString();
            startAt = startAt.substring(17,22)
            // console.log(startAt)
            let endAt = data[i].end_time.toUTCString();
            endAt = endAt.substring(17,22)
            // console.log(endAt)
            // console.log(data[i].start_date)
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