import Joi from "joi";
export const notesSchema = Joi.object({
    note: Joi.string().min(1).required(),
    course_id: Joi.number().required(),
    student_id: Joi.number().required(),
}
);