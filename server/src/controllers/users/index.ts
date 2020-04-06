import { Request, Response } from "express";

import { getAllUsers } from "services/users";

import { usersListQuery } from "validationSchemas";
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
      .then((result: any) => res.status(200).json(result.data))
      .catch(handleError);
  } catch (error) {
    handleError(error, res);
  }
};
