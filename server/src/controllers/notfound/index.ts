import { Request, Response } from "express";

export function notFoundController(req: Request, res: Response) {
  res.status(404).send("Not found");
}
