import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AppError from "../errors/AppError";
import config from "../config";
import User from "../modules/User/user.model";

interface MyJwtPayload extends JwtPayload {
  userId: string;
  email: string;
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new AppError(401, "Unauthorized access: No token provided");
    }

    const decoded = jwt.verify(
      token,
      config.JWT_SECRET as string
    ) as MyJwtPayload;

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      throw new AppError(401, "Unauthorized access: User not found");
    }

    req.user = user;
    next();
  } catch (error: any) {
    res.status(401).json({
      success: false,
      message: error.message || "Unauthorized",
    });
  }
};
