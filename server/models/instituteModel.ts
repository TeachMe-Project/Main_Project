const Joi = require('joi');
export const instituteSchema = Joi.object({
        user_id: Joi.string().min(1).required(),
        username: Joi.string().min(1).required(),
        profile_image: Joi.string().min(1).required(),
        institute_name: Joi.string().min(1).required(),
        owner_name: Joi.string().min(1).required(),
        location: Joi.string().min(1).required(),
        address: Joi.string().min(1).required(),
        contact_no: Joi.string().min(10).required(),
        description: Joi.string().min(1).required(),
        account_name: Joi.string().min(1).required(),
        account_no: Joi.string().min(1).required(),
        bank_name: Joi.string().min(1).required(),
        branch_name: Joi.string().min(1).required(),
    }
);