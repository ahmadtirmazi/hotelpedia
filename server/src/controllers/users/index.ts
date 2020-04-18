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

    const { currentPage, pageSize, sortBy, sortOrder } = params;

    return getAllUsers()
      .then((users: User[]) => {
        let totalRecords = users.length;
        let paginatedUsers = paginateUsers(users, currentPage, pageSize);
        let sortedUsers = sortUsers(paginatedUsers, sortBy, sortOrder);

        res.status(200).json({
          totalRecords,
          records: sortedUsers
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
      .then((users: User[]) => filterUsers(users, searchBy, keyword))
      .then((filteredUsers: User[]) => {
        let paginatedUsers = paginateUsers(filteredUsers, currentPage, pageSize);
        let sortedUsers = sortUsers(paginatedUsers, sortBy, sortOrder);

        res.status(200).json({
          totalRecords: filteredUsers.length,
          records: sortedUsers
        });
      })
  } catch (error) {
    handleError(error, res);
  }
};

const filterUsers = function (users: User[], searchBy: string, keyword: any) {
  if (searchBy && keyword) {
    return users.filter((user: any) => {
      if (typeof user[searchBy] === 'string') {
        return user[searchBy].toLowerCase().includes(keyword);
      }
      else return user[searchBy] == keyword;
    })
  }
  else {
    return users;
  }
}

const paginateUsers = (users: User[], currentPage: number, pageSize: number) => {
  return _.take(_.drop(users, currentPage * pageSize), pageSize);
}


const sortUsers = (users: User[], sortBy: string, sortOrder: 'asc' | 'desc') => {
  return (sortBy && sortOrder) ? _.orderBy(users, [sortBy], [sortOrder]) : users;
}