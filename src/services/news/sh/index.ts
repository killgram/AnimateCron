import { TopicsListParams } from "node-shikimori";
import { shClient } from "@configurations";
import { NewsTypes } from "@types";
import { IGetNewsResponse, converterGetNewsResponse } from "./converter";

const getNewsSHService = async (
  params: TopicsListParams,
): Promise<NewsTypes.IGetNewsResponse> => {
  const sh = await shClient();

  try {
    const result = (await sh.topics.list(params)) as IGetNewsResponse[];
    const processingResult = result?.slice(0, result.length - 1);
    const convertedData = converterGetNewsResponse(processingResult);

    return {
      isError: false,
      data: convertedData,
    };
  } catch (_) {
    return {
      isError: true,
    };
  }
};

export { getNewsSHService };
