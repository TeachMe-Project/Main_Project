import Joi from "joi";

export const teacherSchema = Joi.object({
    first_name: Joi.string().min(1).required(),
    last_name: Joi.string().min(1).required(),
    gender:Joi.string().min(1).required(),
    description:Joi.string().min(1).required(),
    qualification:Joi.string().min(1).required(),
    account_name:Joi.string().min(1).required(),
    bank_name:Joi.string().min(1).required(),
    branch_name:Joi.string().min(1).required(),
    account_no:Joi.string().min(1).required(),
    verification:Joi.string().min(1).required(),
    security_status:Joi.string().min(1).required(),
    user_id:Joi.number().required(),
}
);

export const instituteTeacherSchema = Joi.object({
        course_id: Joi.number().required(),
    }
);
