import { Request, Response } from "express";

import { getAllUsers } from "services/users";

import { User } from "models/user";
import { usersListQuery, usersSearchQuery } from "validationSchemas";
import {
  handleError,
  getPayloadValidationErrorMessage,
} from "utils/errorHandler";

export const list = function (req: Request, res: Response) {
  try {
    const { payloadError, queryParams } = usersListQuery.validate(req.query);
    if (payloadError) {
      throw new Error(getPayloadValidationErrorMessage(payloadError));
    }

    return getAllUsers()
      .then((result: User[]) => res.status(200).json(result))
  } catch (error) {
    handleError(error, res);
  }
};

export const search = function (req: Request, res: Response) {
  try {
    const { payloadError, value: params } = usersSearchQuery.validate(req.query);
    if (payloadError) {
      throw new Error(getPayloadValidationErrorMessage(payloadError));
    }

    const keyword = params.name.toLowerCase();

    return getAllUsers()
      .then((users: User[]) =>
        users.filter((user: User) => user.name.toLowerCase().includes(keyword)))
      .then((result: User[]) => res.status(200).json(result))
  } catch (error) {
    handleError(error, res);
  }
};
