import path from "path";
import express from "express";
import cors from "cors";
import { PORT } from "./config/app.config.js";
import { ErrorHandlerMiddleware } from "./middleware/error-handler.js";
import route from "./route/route.js";

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(process.cwd(), "source", "views"));

app.use(
  "/assets",
  express.static(path.join(process.cwd(), "source", "public"))
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(route);
app.use("/*", (_, res) => {
  return res.json({
    message: `There is no such a route`,
  });
});
app.use(ErrorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(PORT);
});
