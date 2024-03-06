import { NewsSource } from "@enums";

import { getSHNews } from "./sh";

export const checkList = [
  {
    name: NewsSource.SH,
    logicFunction: getSHNews,
  },
];
