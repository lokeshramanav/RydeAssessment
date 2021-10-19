const Joi = require('joi')
const userValidator = require('./userValidation.middleware').user


module.exports = function() {
    return async function(req, res, next) {
        try {
            const validated = await userValidator.validateAsync(req.body)
            req.body = validated
            next()
        } catch (err) {
            if(err.isJoi) 
                res.status(400).send({message: err.message})
            next(Error(`err.message`))
        }
    }
}