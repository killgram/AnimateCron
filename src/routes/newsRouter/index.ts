import express, { Router } from "express";
import { NewsRoutesEnum } from "@enums";
import { NewsControllers } from "@controllers";
const router: Router = express.Router();

router.get(NewsRoutesEnum.CHECK, NewsControllers.checkNews);

export { router as NewsRouter };
