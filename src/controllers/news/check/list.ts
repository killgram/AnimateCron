import { NewsSource } from "@enums";

import { getSHNews } from "./sh";
import { getALNews } from "./al";

export const checkList = [
  {
    name: NewsSource.SH,
    logicFunction: getSHNews,
  },
  // {
  //   name: NewsSource.AL,
  //   logicFunction: getALNews,
  // },
];
