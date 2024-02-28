import { Request, Response, NextFunction } from "express";
import { ErrorsEnum } from "@enums";
import { errorResponse, guardRules } from "@utils";

const guardMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(400).json(errorResponse(ErrorsEnum.FORBIDDEN));

  const token = authHeader.split(" ")[1];

  if (!guardRules(token))
    return res.status(400).json(errorResponse(ErrorsEnum.FORBIDDEN));

  next();
};

export { guardMiddleware };
