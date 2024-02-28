import { getSHNews } from "./sh";
import { Request, Response } from "express";
import { NewsSource } from "@enums";

const checkNews = async (req?: Request, res?: Response): Promise<void> => {
  const shNews = await getSHNews();

  const checkList = [];
  checkList.push({
    name: NewsSource.SH,
    result: shNews,
  });

  res?.status(200).json({
    checkList: checkList,
    success: true,
  });
};

export { checkNews };
