import config from "../../config";
import AppError from "../../errors/AppError";
import User from "./user.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const registerUser = async (payload: any) => {
  const existingUser = await User.findOne({ email: payload.email });
  if (existingUser) {
    throw new AppError(400, "User already exists");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);
  payload.password = hashedPassword;

  const user = await User.create(payload);

  const { password, ...rest } = user.toObject();
  return rest;
};

const loginUser = async (payload: any) => {
  const user = await User.findOne({ email: payload.email });
  if (!user) {
    throw new AppError(400, "User not found");
  }

  const isPasswordMatch = await bcrypt.compare(payload.password, user.password);
  if (!isPasswordMatch) {
    throw new AppError(400, "Invalid password");
  }
  const JWT_EXPIRES_IN = 60 * 60 * 24;

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    config.JWT_SECRET as string,
    { expiresIn: JWT_EXPIRES_IN }
  );

  return {
    token,
  };
};

export const UserService = {
  registerUser,
  loginUser,
};
