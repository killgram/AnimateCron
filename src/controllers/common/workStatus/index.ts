import { Request, Response } from "express";
import { Constants } from "@configurations";

const getWorkStatus = (req: Request, res: Response): void => {
    res.status(200).json({
        title: `${Constants.APP_NAME} is working correctly`,
        success: true,
    });
};

export { getWorkStatus };
