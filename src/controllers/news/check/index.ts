import { Request, Response } from "express";
import { checkList } from "./list";
import { cronWorkLogger, NewsCronResults } from "@utils";

const checkNews = async (_?: Request, res?: Response): Promise<void> => {
  cronWorkLogger(NewsCronResults.START_CHECKING);

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

  cronWorkLogger(NewsCronResults.FINISH_CHECKING);

  res?.status(200).json({
    checkList: result,
    success: true,
  });
};

export { checkNews };
