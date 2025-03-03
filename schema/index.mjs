import joi from "joi"

const schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
})

export default schema;