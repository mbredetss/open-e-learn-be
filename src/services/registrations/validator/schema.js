import Joi from'joi';

const registryPayloadSchema = Joi.object({
    username: Joi.string().min(3).max(100).pattern(/^\S+$/).required(), 
    email: Joi.string().email().required(), 
    phone: Joi.string().pattern(/^[0-9]+$/).min(10).max(15).required(), 
    password: Joi.string().min(6).pattern(/^\S+$/).required(), 
    repeatPassword: Joi.ref('password')
});

export default registryPayloadSchema;