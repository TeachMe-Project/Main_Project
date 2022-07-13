import Joi from "joi";

export const classSchema = Joi.object({
    course_id: Joi.number().required(),
    student_id: Joi.number().required(),
}
);