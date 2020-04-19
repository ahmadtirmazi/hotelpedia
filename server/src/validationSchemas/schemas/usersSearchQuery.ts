const Joi = require("joi");

export const usersSearchQuery = Joi.object({
  currentPage: Joi.number().min(0).default(0),
  pageSize: Joi.number().positive().default(5),
  searchBy: Joi.string().required().valid('name', 'email'),
  searchKeyword: Joi.string().required().min(1),
  sortBy: Joi.string().optional(),
  sortOrder: Joi.string().when('sortBy', {
    is: null,
    then: Joi.optional(),
    otherwise: Joi.string().valid('asc', 'desc').default('asc')
  })
});