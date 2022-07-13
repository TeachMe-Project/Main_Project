import Joi from 'joi';
export const parentSchema = Joi.object({
    user_id: Joi.number().required(),
    first_name: Joi.string().min(1).required(),
    last_name: Joi.string().min(1).required(),
    mobile_no: Joi.string().min(10).max(12).required(),
    security_status: Joi.string().min(1).required(),
}
);
export const parentPaymentSchema = Joi.object({
    parent_id: Joi.number().required(),
    payment_time: Joi.string().min(1).required(),
    amount: Joi.number().required(),
    student_id: Joi.number().required(),
    month: Joi.string().min(1).required(),
    year: Joi.string().min(1).required(),
}
);