import { NewsTypes } from "@types";
import { NewsSource } from "@enums";
import { v4 as uuidv4 } from "uuid";
import { Constants } from "@configurations";

export interface IGetALNewsResponse {
  data: {
    list: Array<{
      title?: {
        id: number;
        code: string;
        names: {
          ru?: string;
          en?: string;
        };
        posters: {
          small: {
            url: string;
          };
          medium: {
            url: string;
          };
          original: {
            url: string;
          };
        };
        last_change: number;
        updated: number;
        genres?: string[];
        description: string;
      };
      youtube?: {
        id: number;
        title: string;
        preview: {
          src: string;
          thumbnail: string;
        };
        views: number;
        timestamp: number;
        youtube_id: string;
      };
    }>;
  };
}

export const converterGetALNewsResponse = (
  data: IGetALNewsResponse,
): NewsTypes.IGetNewsALData[] => {
  const result: NewsTypes.IGetNewsALData[] = [];

  data?.data?.list?.map((v) => {
    if (v?.youtube?.id) {
      const createdTS = v?.youtube?.timestamp
        ? new Date(v?.youtube?.timestamp)?.getTime()
        : new Date().getTime();
      const imageSource = calculatedImageSource(v?.youtube?.preview?.src);

      const youTubeLink = calculatedYoutubeLink(v?.youtube?.youtube_id);

      result.push({
        newsType: NewsSource.AL_YOUTUBE,
        uuid: uuidv4(),
        source: NewsSource.AL,
        createdTimestamp: createdTS,
        imageScr: imageSource,
        createdAt: v?.youtube?.timestamp,
        title: v?.youtube?.title,
        id: v?.youtube?.id,
        youTubeLink: youTubeLink,
      });
    }

    if (v?.title?.id) {
      const createdTS = v?.title?.updated
        ? new Date(v?.title?.updated)?.getTime()
        : new Date().getTime();
      const imageSource = calculatedImageSource(
        v?.title?.posters?.original?.url,
        v?.title?.posters?.medium?.url,
        v?.title?.posters?.small?.url,
      );

      result.push({
        newsType: NewsSource.AL_TITLE,
        uuid: uuidv4(),
        source: NewsSource.AL,
        createdTimestamp: createdTS,
        imageScr: imageSource,
        createdAt: v?.title?.updated,
        title: v?.title?.names?.ru ?? v?.title?.names?.en ?? "",
        id: v?.title?.id,
        description: v?.title?.description ?? "",
        genres: v?.title?.genres,
      });
    }
  });
  return result;
};

const calculatedImageSource = (...args: (string | undefined)[]): string => {
  const filteredArgs = args.filter(
    (arg, index, arr) =>
      typeof arg === "string" && arg !== "" && arr.indexOf(arg) === index,
  ) as string[];
  if (filteredArgs.length > 0) {
    return `${Constants.AL_IMAGE_SOURCE}${filteredArgs[0]}`;
  } else {
    return "";
  }
};

const calculatedYoutubeLink = (source?: string): string => {
  if (!source) {
    return "";
  }
  return `${Constants.YOUTUBE_LINK}${source}`;
};
