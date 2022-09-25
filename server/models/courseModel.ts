import Joi from "joi";

export const courseSchema = Joi.object({
        description: Joi.string().min(1).required(),
        user_id: Joi.string().required(),
        price: Joi.number().required(),
        day: Joi.string().min(1).required(),
        grade: Joi.string().min(1).required(),
        subject: Joi.string().min(1).required(),
        start_date: Joi.string().min(1).required(),
        end_date: Joi.string().min(1).required(),
        start_time: Joi.string().min(1).required(),
        end_time: Joi.string().min(1).required(),
        medium: Joi.string().min(1).required(),
        institute: Joi.required()
    }
);