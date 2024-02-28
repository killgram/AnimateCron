import { mongoClient } from "@configurations";
import { NewsDBEnum } from "@enums";

const newsWrite = async <T extends any[]>(collectionName: string, data?: T) => {
  try {
    const dbClient = await mongoClient.connect();
    const newsDocument = dbClient
      .db(NewsDBEnum.NEWS_TABLE)
      .collection(collectionName);

    const lastElementsArray = (await newsDocument
      .find({}, { projection: { _id: 0 } })
      .limit(1)
      .sort({ createdTimestamp: -1 })
      .toArray()) as T;

    const lastElementTS = lastElementsArray?.[0]?.createdTimestamp ?? 0;
    const newElements = data?.filter((item) => {
      if (item?.createdTimestamp > lastElementTS) {
        return item;
      }
    }) as T;

    if (newElements && newElements?.length > 0 && Array.isArray(newElements)) {
      await newsDocument.insertMany(newElements);
    }

    return true;
  } catch (_) {
    return false;
  }
};

export { newsWrite };
