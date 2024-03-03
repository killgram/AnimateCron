declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: string;
      APP_NAME: string;
      ACCESS_TOKEN_SECRET: string;
      SH_CLIENT_NAME: string;
      SH_MAX_CALLS_PER_SECOND: string;
      SH_MAX_CALLS_PER_MINUTE: string;
      SH_IMAGE_SOURCE: string;
      MONGODB_URL: string;
      AL_DOMAIN: string;
      AL_IMAGE_SOURCE: string;
      YOUTUBE_LINK: string;
    }
  }
}

export {};
