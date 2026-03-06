import Joi from 'joi';

const authenticationPayloadSchema = Joi.object({
    username: Joi.string().min(3).max(100).required(),
    password: Joi.string().min(3).required()
});

export default authenticationPayloadSchema;