import express, { Router } from "express";
import { CommonRoutesEnum } from "@enums";
import { CommonControllers } from "@controllers";

const router: Router = express.Router();

router.get(CommonRoutesEnum.STATUS, CommonControllers.getWorkStatus);

export { router as CommonRouter };
