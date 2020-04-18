import { Request, Response } from "express";
var _ = require('lodash');

import { getAllUsers } from "services/users";

import { User } from "models/user";
import { usersListQuery, usersSearchQuery } from "validationSchemas";
import {
  handleError,
  getPayloadValidationErrorMessage,
} from "utils/errorHandler";

export const list = function (req: Request, res: Response) {
  try {

    let { error, value: params } = usersListQuery.validate(req.query);
    if (error) {
      throw new Error(getPayloadValidationErrorMessage(error));
    }

    const currentPage = params.currentPage;
    const pageSize = params.pageSize;

    return getAllUsers()
      .then((result: User[]) => {
        let totalRecords = result.length;
        let records = _.take(_.drop(result, currentPage * pageSize), pageSize);

        res.status(200).json({
          totalRecords,
          records
        });
      })
  } catch (error) {
    handleError(error, res);
  }
};

export const search = function (req: Request, res: Response) {
  try {
    const { error, value: params } = usersSearchQuery.validate(req.query);
    if (error) {
      throw new Error(getPayloadValidationErrorMessage(error));
    }

    const { searchBy, currentPage, pageSize, sortBy, sortOrder } = params;
    const keyword = params.searchKeyword.toLowerCase();

    return getAllUsers()
      .then((users: User[]) => {
        return users.filter((user: any) => {
          if (typeof user[searchBy] === 'string') {
            return user[searchBy].toLowerCase().includes(keyword);
          }
          else return user[searchBy] == keyword;
        })
      })
      .then((filteredUsers: User[]) => {
        let totalRecords = filteredUsers.length;

        // paginate
        let records = _.take(_.drop(filteredUsers, currentPage * pageSize), pageSize);

        // sort
        if (sortBy && sortOrder) {
          records = _.orderBy(records, [sortBy], [sortOrder]);
        }

        res.status(200).json({
          totalRecords,
          records
        });
      })
  } catch (error) {
    handleError(error, res);
  }
};
