import {
  DateTime,
  Linkable,
  LinkedId,
  LinkedType,
  TopicEventType,
  TopicId,
  TopicType,
} from "node-shikimori";
import { NewsTypes } from "@types";
import { NewsSource } from "@enums";
import { v4 as uuidv4 } from "uuid";

export interface IGetNewsResponse {
  id: TopicId;
  topic_title: string;
  body: string;
  created_at: DateTime;
  linked_type: LinkedType;
  linked_id?: LinkedId;
  linked?: Linkable;
  event: TopicEventType;
  type: TopicType;
  html_footer?: string;
  html_body: string;
}

export const converterGetNewsResponse = (
  data: IGetNewsResponse[],
): NewsTypes.IGetNewsData[] => {
  return data?.map((item) => {
    const imageUrl = extractImageUrl(item?.html_footer);
    const descriptionLinks = extractLinks(item?.html_footer);
    const stripDescription = stripHtmlTags(item?.html_body);

    const createdTS = item?.created_at
      ? new Date(item?.created_at)?.getTime()
      : new Date().getTime();

    return {
      id: item?.id,
      title: item?.topic_title,
      description: stripDescription,
      createdAt: item?.created_at,
      imageScr: imageUrl,
      descriptionLinks: descriptionLinks,
      createdTimestamp: createdTS,
      source: NewsSource.SH,
      uuid: uuidv4(),
    };
  });
};

function extractLinks(htmlString?: string) {
  if (!htmlString) return undefined;
  const regex = /href="([^"]+)"/g;
  const links = [];
  let match;
  while ((match = regex.exec(htmlString)) !== null) {
    const link = match[1];
    if (!link.includes("youtu")) {
      links.push(link);
    }
  }
  return links;
}
function stripHtmlTags(htmlString: string) {
  return htmlString
    .replace(/<(?!br\s*\/?)[^>]+>/gi, "")
    .replace(/<br[^>]*>/gi, "<br>")
    .replace(/\[.*?\]/g, "")
    .replace(/\d+x\d+(x\d+)*/gi, "")
    .replace(/(<br\s*\/?>)\s*(?=<br\s*\/?>)/gi, "")
    .replace(/<br[^>]*>/gi, "\n");
}

function extractImageUrl(htmlString?: string): string | undefined {
  if (!htmlString) return undefined;
  const regex = /<img\s.*?src=["'](.*?)["']/;
  const match = htmlString.match(regex);
  if (match && match.length >= 2) {
    let imageUrl = match[1];
    if (!imageUrl.startsWith("https:")) {
      imageUrl = "https:" + imageUrl;
    }
    return imageUrl;
  }
  return undefined;
}
