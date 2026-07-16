import express from "express";
import auth from "../middleware/auth.js";

import {
  createArticle,
  getArticles,
  getArticle,
  deleteArticle
} from "../controllers/article.controller.js";

const router = express.Router();

router.get("/", getArticles);

router.get("/:id", getArticle);

router.post("/", auth, createArticle);

router.delete("/:id", auth, deleteArticle);

export default router;
