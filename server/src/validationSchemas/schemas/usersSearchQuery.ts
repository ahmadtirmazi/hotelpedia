const Joi = require("joi");

export const usersSearchQuery = Joi.object({
  currentPage: Joi.number().optional().min(1).default(1),
  pageSize: Joi.number().optional().min(1).default(10),
  name: Joi.string().required().min(1),
});
