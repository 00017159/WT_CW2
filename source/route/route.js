import { Router } from "express";
import Controller from "../controller/index.js";

const router = Router();

export default router
  .get("/get", Controller.GET)
  .post("/create", Controller.CREATE)
  .put("/update/:id", Controller.UPDATE)
  .delete("/delete/:id", Controller.DELETE);
