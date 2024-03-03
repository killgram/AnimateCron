import { NewsService } from "@services";
import { NewsDBEnum } from "@enums";

const deleteALNews = async (): Promise<boolean> => {
  return await NewsService.newsDelete(NewsDBEnum.AL_NEWS_COLLECTION);
};

export { deleteALNews };
