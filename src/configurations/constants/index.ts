import * as process from "process";

export const Constants = {
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET ?? "",
  APP_NAME: process.env.APP_NAME,
  SH_CLIENT_NAME: String(process.env.SH_CLIENT_NAME),
  SH_MAX_CALLS_PER_SECOND: Number(process.env.SH_MAX_CALLS_PER_SECOND),
  SH_MAX_CALLS_PER_MINUTE: Number(process.env.SH_MAX_CALLS_PER_MINUTE),
  SH_IMAGE_SOURCE: process.env.SH_IMAGE_SOURCE,
  MONGODB_URL: process.env.MONGODB_URL ?? "",
  AL_DOMAIN: process.env.AL_DOMAIN ?? "",
  AL_IMAGE_SOURCE: process.env.AL_IMAGE_SOURCE ?? "",
  YOUTUBE_LINK: process.env.YOUTUBE_LINK ?? "",
};
