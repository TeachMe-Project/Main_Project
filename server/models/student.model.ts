const Joi = require('joi');

const studentSchema = Joi.object({
    email: Joi.string().email().lowercase().required(),
    name: Joi.string().min(1).required()
});

export default studentSchema;