const Joi = require('joi')

const userSchema = Joi.object({
    name: Joi.string().required(),
    address: Joi.string().required(),
    description: Joi.string().required(),
    dob: Joi.date().raw().required()
});

module.exports.user = userSchema;