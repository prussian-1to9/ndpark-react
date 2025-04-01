import type { NoticeProps } from "@api/mainpage/commonData";
import type { BannerProps } from "@api/mainpage/bannerData";

import {
  hotelInfos,
  moviePrices,
  noticeData,
  noticeTypesData,
} from "@api/mainpage/commonData";

import {
  mainTopBannerData,
  arrivalBannerData,
  movieBannerData,
  tourBannerData,
} from "@api/mainpage/bannerData";

const getTopBanners = () => {
  return mainTopBannerData;
};
const getArrivalBanners = () => {
  return arrivalBannerData;
};

const getHotelInfo = () => {
  return hotelInfos;
};

const getTourBanners = () => {
  return tourBannerData;
};

const getMovieInfo = () => {
  return moviePrices;
};
const getMovieBanners = () => {
  return movieBannerData;
};
const getNoticeData = (): NoticeProps[] => {
  return noticeData;
};
const getNoticeTypeString = (type: "gurye" | "goesan"): string => {
  return noticeTypesData[type];
};

export {
  getTopBanners,
  getArrivalBanners,
  getMovieBanners,
  getTourBanners,
  getNoticeData,
  getNoticeTypeString,
};
export { getHotelInfo, getMovieInfo };
export type { BannerProps };
