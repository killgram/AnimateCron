import { Request, Response } from "express";
import { deleteSHNews } from "./sh";
import { NewsSource } from "@enums";

const deleteNews = async (req?: Request, res?: Response): Promise<void> => {
  const shNews = await deleteSHNews();

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

export { deleteNews };
