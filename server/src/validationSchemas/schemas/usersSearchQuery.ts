const Joi = require("joi");

export const usersSearchQuery = Joi.object({
  currentPage: Joi.number().positive().default(1),
  pageSize: Joi.number().positive().default(10),
  name: Joi.string().required().min(1),
});