import Joi from "joi";

export const classSchema = Joi.object({
    user_id: Joi.string().required(),
    course_id: Joi.number().required(),
    date: Joi.date().required(),
    start_time: Joi.string().min(1).required(),
    end_time: Joi.string().min(1).required(),
}
);