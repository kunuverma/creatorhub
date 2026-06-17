import { Request, Response } from "express";
import { ApiResponse } from "../utils/api-response";

export const healthCheck = (_req: Request, res: Response): void => {
  res.status(200).json(
    new ApiResponse(true, "CreatorHub API Running", {
      timestamp: new Date().toISOString(),
    }),
  );
};
