import { ZodError, ZodType } from "zod";
import { Request, Response, NextFunction } from "express";

export const validate =
  (schema: ZodType) =>
  (req: Request, res: Response, next: NextFunction): void => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({
          success: false,
          errors: error.issues.map((err) => ({
            field: err.path.join("."),
            message: err.message,
          })),
        });

        return;
      }

      res.status(500).json({
        success: false,
        message: "Validation failed",
      });
    }
  };
