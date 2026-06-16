import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware";

const app = express();

app.use(cors());

app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(morgan("dev"));

app.use("/api/v1", routes);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
