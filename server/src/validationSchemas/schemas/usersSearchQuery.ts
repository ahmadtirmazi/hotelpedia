const Joi = require("joi");

export const usersSearchQuery = Joi.object({
  currentPage: Joi.number().positive().default(1),
  pageSize: Joi.number().positive().default(10),
  searchBy: Joi.string().required().valid('name', 'email'),
  searchKeyword: Joi.string().required().min(1),
  sortBy: Joi.string().optional().valid('name', 'email'),
  sortOrder: Joi.string().when('sortBy', {
    is: null,
    then: Joi.optional(),
    otherwise: Joi.string().valid('asc', 'desc').default('asc')
  })
});