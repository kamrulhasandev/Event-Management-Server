import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendRequest";
import { UserService } from "./user.service";

const registerUser = catchAsync(async (req, res) => {
  const result = await UserService.registerUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User created successfully",
    data: result,
  });
});

const loginUser = catchAsync(async (req, res) => {
  const result = await UserService.loginUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Login successfully",
    data: result,
  });
});

export const UserController = {
  registerUser,
  loginUser,
};
