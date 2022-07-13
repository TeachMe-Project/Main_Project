const Joi = require('joi');
export const instituteSchema = Joi.object({
    institute_name: Joi.string().min(1).required(),
    contact_no: Joi.string().min(1).required(),
    description: Joi.string().min(1).required(),
    account_name: Joi.string().min(1).required(),
    account_no: Joi.string().min(1).required(),
    bank_name: Joi.string().min(1).required(),
    branch_name: Joi.string().min(1).required(),
    user_id: Joi.number().required(),
}
);