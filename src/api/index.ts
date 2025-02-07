import type { CorporateInfo } from "./footerData";
import {
  footerUserLinks,
  footerFamilySiteLinks,
  footerCorporateInfos,
} from "./footerData";
import {
  headerFamilySiteLinks,
  signedInHeaderUserLinks,
  signedOutHeaderUserLinks,
  headerMenuLinks,
  headerDetailMenuLinks,
} from "./headerData";

/* =============== [ header ] =============== */
const getHeaderFamilySiteLinks = (): LinkProps[] => {
  return headerFamilySiteLinks;
};
const getHeaderUserLinks = (isSignedIn = false): LinkProps[] => {
  return isSignedIn ? signedInHeaderUserLinks : signedOutHeaderUserLinks;
};
const getHeaderMenuLinks = (): LinkProps[] => {
  return headerMenuLinks;
};
const getHeaderDetailMenuLinks = (key: string): LinkProps[] => {
  return headerDetailMenuLinks[key];
};

/* =============== [ footer ] =============== */
const getFooterUserLinks = (): LinkProps[] => {
  return footerUserLinks;
};
const getFooterFamilySiteLinks = (): LinkProps[] => {
  return footerFamilySiteLinks;
};
const getFooterCorporateInfos = (): CorporateInfo[] => {
  return footerCorporateInfos;
};

export type { CorporateInfo };
export {
  getHeaderFamilySiteLinks,
  getHeaderUserLinks,
  getHeaderMenuLinks,
  getHeaderDetailMenuLinks,
  getFooterUserLinks,
  getFooterFamilySiteLinks,
  getFooterCorporateInfos,
};
