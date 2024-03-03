import { ALRoutes, Constants } from "@configurations";
import { NewsTypes } from "@types";
import axios from "axios";
import { converterGetALNewsResponse, IGetALNewsResponse } from "./converter";

const getNewsALService = async (): Promise<NewsTypes.IGetNewsALResponse> => {
  const url = `${Constants.AL_DOMAIN}${ALRoutes.FEED}`;

  try {
    const result = (await axios.get(url)) as IGetALNewsResponse;
    const processingResult = converterGetALNewsResponse(result);

    return {
      isError: false,
      data: processingResult,
    };
  } catch (_) {
    return {
      isError: true,
    };
  }
};

export { getNewsALService };
