const Joi = require('joi');

const userSchema = Joi.object({
    user_id: Joi.string().min(1).required(),
    username: Joi.string().min(1).required(),
    type: Joi.string().min(1).required(),
    isActive:Joi.required(),
    profile_image: Joi.string().min(1).required()
});

export default userSchema;