import { Request, Response } from "express";
import { checkList } from "./list";

const checkNews = async (_?: Request, res?: Response): Promise<void> => {
  const result: {
    name: string;
    status: boolean;
  }[] = [];

  for (let i = 0; i < checkList.length; i++) {
    const status = await checkList[i].logicFunction?.();
    result.push({
      name: checkList[i].name,
      status: status,
    });
  }

  res?.status(200).json({
    checkList: result,
    success: true,
  });
};

export { checkNews };
