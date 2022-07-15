const Joi = require('joi');

 const homeworkSchema = Joi.object({
    updated_date: Joi.string().min(1).required(),
    homework: Joi.string().min(1).required(),
    course_id: Joi.number().required(),
    student_id: Joi.number().required(),
}
);
 export default homeworkSchema;