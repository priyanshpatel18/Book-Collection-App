import express from "express";
import * as bookController from "../controller/bookController.js";
const router = express.Router();

router
  .get("/", bookController.getAllBooks)
  .post("/", bookController.createBook)
  .get("/:id", bookController.getBook)
  .put("/:id", bookController.updateBook)
  .delete("/:id", bookController.deleteBook);

export default router;
