const Joi = require("joi");

export const usersListQuery = Joi.object({
  currentPage: Joi.number().optional().min(1).default(1),
  pageSize: Joi.number().optional().min(1).default(10),
});
