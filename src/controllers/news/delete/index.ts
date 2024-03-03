import { Request, Response } from "express";
import { deleteList } from "./list";
import { cronWorkLogger, NewsCronResults } from "@utils";

const deleteNews = async (_?: Request, res?: Response): Promise<void> => {
  cronWorkLogger(NewsCronResults.START_DELETING);

  const result: {
    name: string;
    status: boolean;
  }[] = [];

  for (let i = 0; i < deleteList.length; i++) {
    const status = await deleteList[i].logicFunction?.();
    result.push({
      name: deleteList[i].name,
      status: status,
    });
  }

  cronWorkLogger(NewsCronResults.FINISH_DELETING);

  res?.status(200).json({
    deleteList: result,
    success: true,
  });
};

export { deleteNews };
