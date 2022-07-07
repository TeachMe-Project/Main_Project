import express, {Request, Response} from "express";

const teacherDetails = async (req:Request,res:Response)=>{

    try {
        res.status(400).send("test");
    }
    catch (error) {
        res.status(400).send(error);
    }

};

export default {teacherDetails};