import { Request, Response } from "express";
import { handleError } from "utils/errorHandler";
const { getAllUsers } = require("services/users");

export const list = function (req: Request, res: Response) {
  return getAllUsers()
    .then((result: any) => res.status(200).json(result.data))
    .catch(handleError);
};
