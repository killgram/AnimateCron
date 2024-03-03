import { NewsService } from "@services";
import { NewsDBEnum } from "@enums";

const getALNews = async (): Promise<any> => {
  const data = await NewsService.getNewsALService();

  if (data.isError) return false;

  return await NewsService.newsWrite(NewsDBEnum.AL_NEWS_COLLECTION, data?.data);
};

export { getALNews };
