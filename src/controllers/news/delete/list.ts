import { NewsSource } from "@enums";

import { deleteSHNews } from "./sh";

export const deleteList = [
  {
    name: NewsSource.SH,
    logicFunction: deleteSHNews,
  },
];
