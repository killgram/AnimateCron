import { Constants } from "@configurations";

const guardRules = (token: string): boolean => {
  return token === Constants.ACCESS_TOKEN_SECRET;
};

export { guardRules };
