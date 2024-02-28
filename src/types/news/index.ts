export interface IGetNewsData {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  imageScr?: string;
  descriptionLinks?: string[];
  createdTimestamp?: number;
  source: string;
  uuid: string;
}

export interface IGetNewsResponse {
  isError: boolean;
  data?: IGetNewsData[];
}
