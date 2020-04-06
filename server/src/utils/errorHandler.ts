import { Response } from "express";
import { ValidationError } from "joi";

export const handleError = (error: Error, res: Response) => {
  console.error(error);
  res.status(400).json({
    error: error.message,
  });
};

export const getPayloadValidationErrorMessage = (error: ValidationError) =>
  error.details.map((i) => i.message).join(",");
