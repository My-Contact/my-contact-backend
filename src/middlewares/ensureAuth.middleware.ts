import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import "dotenv/config";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Invalid Token" });
  }

  const tokenSplited = token.split(" ")[1];

  jwt.verify(
    tokenSplited,
    process.env.SECRET_KEY!,
    (error: any, decoded: any) => {
      if (error) {
        return res.status(401).json({ message: "Invalid Token" });
      }

      res.locals.userId = decoded.sub;

      next();
    }
  );
};

export { ensureAuthMiddleware };
