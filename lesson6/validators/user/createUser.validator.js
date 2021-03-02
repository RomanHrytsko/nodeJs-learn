const Joi = require('joi');

const { regexEnum } = require('../../constants');

// const girlSubSchema = Joi.array().items(Joi.object({
//     name: Joi.string().alphanum().max(20)
// }));

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(50)
        .required(),
    email: Joi.string().regex(regexEnum.EMAIL_REGEXP).required(),
    password: Joi.string().regex(regexEnum.PASSWORD_REGEXP).required(),
    // car: Joi.boolean(),
    // age: Joi.number().integer().min(3).max(99)
    // yearOfBorn: Joi.number().integer().min(1921).max(constants.CURRENT_YEAR - 100)
    //     .max(constants.CURRENT_YEAR),
    // girls: girlSubSchema.optional().when('car', { is: true, then: Joi.required() })
});
