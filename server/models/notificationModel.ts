import Joi from 'joi';
export const notificationSchema = Joi.object({
    user_id: Joi.number().required(),
    subject: Joi.string().min(1).required(),
    description: Joi.string().min(1).required(),
    read_status: Joi.boolean().required(),
}
);