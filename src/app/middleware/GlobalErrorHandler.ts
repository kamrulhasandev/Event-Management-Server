import { ErrorRequestHandler } from "express";
import AppError from "../errors/AppError";
import { TErrorSources } from "../interface/error";

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Default values
  let statusCode = 500;
  let message = "Something went wrong!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong",
    },
  ];

  // Handle AppError
  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  } else if (err instanceof Error) {
    // Handle generic Error
    message = err.message;
    errorSources = [
      {
        path: "",
        message: err.message,
      },
    ];
  }

  // Response
  res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
  });
};

export default globalErrorHandler;
