const Joi = require('joi');

const adminSchema = Joi.object({
    first_name: Joi.string().min(1).required(),
    last_name: Joi.string().min(1).required(),
    mobile_no:Joi.string().min(10).max(12).required(),
    user_id: Joi.number().required(),
});

export default adminSchema ;