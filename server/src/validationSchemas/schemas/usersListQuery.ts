const Joi = require("joi");

export const usersListQuery = Joi.object({
  currentPage: Joi.number().positive().default(1),
  pageSize: Joi.number().positive().default(10),
});
