import { NewsService } from "@services";
import { NewsDBEnum } from "@enums";

const deleteSHNews = async (): Promise<boolean> => {
  return await NewsService.newsDelete(NewsDBEnum.SH_NEWS_COLLECTION);
};

export { deleteSHNews };
