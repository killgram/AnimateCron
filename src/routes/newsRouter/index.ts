import express, { Router } from "express";
import { NewsRoutesEnum } from "@enums";
import { NewsControllers } from "@controllers";
import { guardMiddleware } from "@middleware";

const router: Router = express.Router();

router.get(NewsRoutesEnum.CHECK, guardMiddleware, NewsControllers.checkNews);

router.delete(
  NewsRoutesEnum.DELETE,
  guardMiddleware,
  NewsControllers.deleteNews,
);

export { router as NewsRouter };
