const Joi = require("joi");

export const usersListQuery = Joi.object({
  currentPage: Joi.number().min(0).default(0),
  pageSize: Joi.number().positive().default(5),
  sortBy: Joi.string().optional().valid('name', 'email'),
  sortOrder: Joi.string().when('sortBy', {
    is: null,
    then: Joi.optional(),
    otherwise: Joi.string().valid('asc', 'desc').default('asc')
  })
});
