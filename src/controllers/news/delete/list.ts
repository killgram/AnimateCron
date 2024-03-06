import { NewsSource } from "@enums";

import { deleteSHNews } from "./sh";
import { deleteALNews } from "./al";

export const deleteList = [
  {
    name: NewsSource.SH,
    logicFunction: deleteSHNews,
  },
  // {
  //   name: NewsSource.AL,
  //   logicFunction: deleteALNews,
  // },
];
