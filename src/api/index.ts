import type { CorporateInfo } from "./footerData";
import type { BannerInfo } from "./bannerData";
import {
  headerFamilySiteLinks,
  signedInHeaderUserLinks,
  signedOutHeaderUserLinks,
  headerMenuLinks,
  headerDetailMenuLinks,
} from "./headerData";
import {
  footerUserLinks,
  footerFamilySiteLinks,
  footerCorporateInfos,
} from "./footerData";
import { navmenuMobileLinks, navmenuPCLinks } from "./navData";
import { mainBannerInfos } from "./bannerData";

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

/* =============== [ nav menu ] =============== */
const getNavMenuLinks = (key?: string, isMobile?: boolean): LinkProps[] => {
  if (!key) return [];
  return isMobile ? navmenuMobileLinks[key] : navmenuPCLinks[key];
};
/* =============== [ banners ] =============== */
const getMainBannerInfos = (): BannerInfo[] => {
  return mainBannerInfos;
};
export type { BannerInfo, CorporateInfo };
export {
  getHeaderFamilySiteLinks,
  getHeaderUserLinks,
  getHeaderMenuLinks,
  getHeaderDetailMenuLinks,
  getFooterUserLinks,
  getFooterFamilySiteLinks,
  getFooterCorporateInfos,
  getNavMenuLinks,
  getMainBannerInfos,
};
