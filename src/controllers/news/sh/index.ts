import { TopicsListParams } from "node-shikimori";
import { NewsService } from "@services";
import { NewsDBEnum } from "@enums";

const getSHNews = async (): Promise<boolean> => {
  const params = createParams();
  const data = await NewsService.getNewsSHService(params);

  if (data.isError) return false;

  return await NewsService.newsWrite(NewsDBEnum.SH_NEWS_COLLECTION, data?.data);
};

const createParams = (page = 1, limit = 50): TopicsListParams => {
  return {
    forum: "news",
    limit: Number(limit),
    page: Number(page),
  };
};

export { getSHNews };
