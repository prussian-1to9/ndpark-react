import type { CorporateInfo } from "./footerData";
import { userLinks, corporateInfos, familySiteLinks } from "./footerData";

const getFooterUserLinks = (): LinkProps[] => {
  return userLinks;
};
const getFooterFamilySiteLinks = (): LinkProps[] => {
  return familySiteLinks;
};
const getFooterCorporateInfos = (): CorporateInfo[] => {
  return corporateInfos;
};

export type { CorporateInfo };
export {
  getFooterUserLinks,
  getFooterFamilySiteLinks,
  getFooterCorporateInfos,
};
