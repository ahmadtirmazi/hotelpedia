import { Request, Response } from "express";
import { handleError } from "utils/errorHandler";
const { getAllHotels } = require("services/hotels");

export const list = function (req: Request, res: Response) {
  return getAllHotels()
    .then((result: any) => res.status(200).json(result.data))
    .catch(handleError);
};
