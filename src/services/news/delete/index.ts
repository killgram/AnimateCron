import { CronConfig, mongoClient } from "@configurations";
import { NewsDBEnum } from "@enums";

const newsDelete = async (
  collectionName: string,
  limit = CronConfig.news.limit,
): Promise<boolean> => {
  try {
    const dbClient = await mongoClient.connect();
    const newsDocument = dbClient
      .db(NewsDBEnum.NEWS_TABLE)
      .collection(collectionName);
    const countOfCollectionElements = await newsDocument.countDocuments();

    if (countOfCollectionElements > limit) {
      const deleteElementsArray = await newsDocument
        .find({}, { projection: { _id: 0 } })
        .limit(limit / 2)
        .sort({ createdTimestamp: 1 })
        .toArray();

      const limitedElementStamp = deleteElementsArray[
        deleteElementsArray?.length - 1
      ]?.createdTimestamp as number;

      await newsDocument.deleteMany({
        createdTimestamp: { $lt: limitedElementStamp },
      });
    }

    return true;
  } catch (_) {
    return false;
  }
};

export { newsDelete };
