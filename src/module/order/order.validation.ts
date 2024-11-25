import Joi from 'joi';

export const orderValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } }) 
    .required(),
  product: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/) 
    .required(),
  quantity: Joi.number()
    .integer()
    .min(1) 
    .required(),
  totalPrice: Joi.number()
    .positive() 
    .required(),
});
