import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middleware/GlobalErrorHandler";
import notFound from "./app/middleware/notFound";
import router from "./app/routes";

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://event-management-client-ebon.vercel.app",
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT',"PATCH", 'DELETE'],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Worlds!");
});

app.use("/api/v1", router);

app.use(globalErrorHandler);
app.use(notFound);

export default app;
