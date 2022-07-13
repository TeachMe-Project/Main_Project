const Joi = require('joi');

 export const studentSchema = Joi.object({
    first_name: Joi.string().min(1).required(),
    last_name: Joi.string().min(1).required(),
    school: Joi.string().min(1).required(),
    grade: Joi.string().min(1).required(),
    security_status: Joi.string().min(1).required(),
    user_id: Joi.number().required(),
    parent_id: Joi.number().required(),
});

export const studentClassSchema = Joi.object({
    student_id: Joi.number().required(),
    class_id: Joi.number().required(),
}
);

export const studentPaymentSchema = Joi.object({
    payment_id: Joi.number().required(),
    student_id: Joi.number().required(),
    course_id: Joi.number().required(),
    month: Joi.string().min(1).required(),
    payment_status: Joi.string().min(1).required(),
}
);

