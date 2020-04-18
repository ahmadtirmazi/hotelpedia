const Joi = require("joi");

export const usersListQuery = Joi.object({
  currentPage: Joi.number().min(0).default(0),
  pageSize: Joi.number().positive().default(5),
});
