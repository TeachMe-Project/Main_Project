import Joi from "joi";

export const teacherSchema = Joi.object({
        title:Joi.string().min(1).required(),
        user_id: Joi.string().min(1).required(),
        username: Joi.string().min(1).required(),
        profile_image: Joi.string().min(1).required(),
        first_name: Joi.string().min(1).required(),
        last_name: Joi.string().min(1).required(),
        contact_no: Joi.string().min(10).required(),
        description: Joi.string().min(1).required(),
        qualification: Joi.string().min(1).required(),
        account_name: Joi.string().min(1).required(),
        bank_name: Joi.string().min(1).required(),
        branch_name: Joi.string().min(1).required(),
        account_no: Joi.string().min(1).required(),
    }
);

export const instituteTeacherSchema = Joi.object({
        course_id: Joi.number().required(),
    }
);
