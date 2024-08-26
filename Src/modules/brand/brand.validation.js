import Joi from "joi";

export const createBrandSchema = Joi.object({
  name: Joi.string().min(2).max(20).required(),
});
export const updateBrandSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
  name: Joi.string().min(2).max(20),
});
export const getBrandSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});
export const deleteBrandSchema = Joi.object({
  id: Joi.string().hex().length(24).required(),
});
