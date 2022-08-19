import {Request,Response} from "express";
import { PrismaClient } from '@prisma/client';
import {classSchema} from "../models/classModel";

const prisma = new PrismaClient()

export const getClasses=async (req:Request,res:Response)=>{

    try {
        const data =await prisma.renamedclass.findMany({

        }

        )
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}
export const getClassByID=async (req:Request,res:Response)=>{


    try {
        const data =await prisma.renamedclass.findMany({
            where:<any>{
                user_id: req.params.id
            }
        })
        res.status(200).send(data)
    }

    catch (error) {
        res.status(500).send(error);
    }
}

// export const  createClass=async (req:Request,res:Response)=>{
//
//     const { error, value } = classSchema.validate(req.body);
//
//     if(!error) {
//         try {
//             const data = await prisma.Renamedclass.create({
//                 data: {
//                     first_name: req.body.first_name,
//                     last_name: req.body.last_name,
//                     mobile_no: req.body.mobile_no,
//                     user_id: req.body.user_id
//                 }
//             })
//             res.status(200).send(data)
//         } catch (error) {
//             res.status(500).send(error);
//         }
//     }
//     else {
//         res.status(500).send(error.details[0].message);
//     }
// }

